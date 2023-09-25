import {mockData} from './mock.js';

const formatNumber = (number, num) => {
  number = Number(number)
  if (number >= 100000000) {
    return (number / 100000000).toFixed(num) + '亿';
  } else if (number >= 10000) {
    return (number / 10000).toFixed(num) + '万';
  } else if (number >= 0)  {
    return number.toFixed(num);
  } else {
    return '-'
  }
}

const dealTooltip = (params, name, unit, exchange) => {
  let price = null;
  let valueData = null;
  params.forEach(item => {
    if (item.seriesIndex === 0) {
      price = item.data[1]
    } else if (item.seriesIndex === 1) { //根据seriesIndex确定是哪个交易所的数据
      valueData = item.data[1]
    }
    
  });
  let tip = `<div class="line-bar-tooltip">
      <div class="time">${params[0].axisValueLabel}</div>
      <div class="flex ${price?'show':'hide'}">
        <b class="logo"></b>
        <div class="text-content">${name}价格</div>
        <div class="value">$${price}</div>
      </div>
      <div class="flex ${valueData?'show':'hide'}"">
        <b class="logo exchange"></b>
        <div class="text-content">${exchange}</div>
        <div class="value">${ unit === 'USD' ? `$${formatNumber(valueData, 2)}` : `${formatNumber(valueData, 2)} ${name}` }</div>
      </div>
    </div>`
    return tip
}

export function getOption(diskData, name, period, unit, exchange) {
  if (!diskData) {
    diskData = mockData
    console.log(diskData)
  }
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      formatter: (params) => dealTooltip(params, name, unit, exchange), // 处理弹框内容样式
      backgroundColor: 'rgba(24,25,30,1)',
      padding: 0,
      borderWidth: 0,
      textStyle: {
        color: '#fff'
      }
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0, // 数据窗口范围的起始百分比，表示0%
        end: 100,
      },
      // {
      //   type: 'slider',
      //   borderColor: 'rgba(0,0,0,0)',
      // },
    ],
    legend: { // 图例组件
      data: [`${name}价格`,`${exchange}`],
      inactiveColor: '#ccc',
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: [
      {
        type: "time",
        axisPointer: {
          snap: true,
          label: {
            show: true,
            formatter: function(params) {
              return echarts.format.formatTime('yyyy-MM-dd hh:mm', params.value);
            }
          },
          handle: {
            show: false
          }
        },
        axisLabel: {
          show: true,
          // formatter: '{yyyy}-{MM}-{dd} {hh}:{mm}' // 设置x轴标签
          formatter: () => { // 设置x轴标签
            if (period === '1m' || period === '5m') {
              return '{hh}:{mm}'
            } else if (period === '15m' || period === '1h' || period === '4h') {
              return '{MM}-{dd} {hh}:{mm}'
            } else {
              return '{MM}-{dd}'
            }
          }
        },
        axisLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          fontSize: 12,
          color: '#868E9B',
          formatter(value, index) {
            // y轴坐标处理数字
            return unit === 'USD' ? `$${formatNumber(value, 0)}` : `${formatNumber(value, 0)} ${name}`
          }
        },
        // 背景横向样式修改
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(109, 180, 202, 0.3)',
            type: 'dashed',
          }
        }
      },
      {
        type: 'value',
        axisLabel: {
          formatter: '${value}'
        },
        // 背景横向样式修改
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(109, 180, 202, 0.3)',
            type: 'dashed',
          }
        }
      }
    ],
    series: [
      {
        name: `${name}价格`,
        type: 'line',
        showSymbol: false, // 只有在 tooltip hover 的时候显示圆点 
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return `$${value}`;
          }
        },
        data: diskData.valueDataPrice,
        itemStyle: {
          color: '#FFC107'
        }
      },
      {
        name: `${exchange}`,
        type: 'line',
        showSymbol: false, // 只有在 tooltip hover 的时候显示圆点 
        tooltip: {
          valueFormatter: function (value) {
            return formatNumber(value, 2);
          }
        },
        data: diskData.baseValue,
        itemStyle: {
          color: '#11C384',
        },
        areaStyle: {
          color: { // 设置线性渐变颜色
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#11C384' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(17,195,132, 0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
        },
      },
    ]
  };  
};