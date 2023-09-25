import { mockData } from './mock.js';
import { getMax, getMin, division, toPrecision } from '@/utils';
import * as echarts from 'echarts';
const getXAxis = (dataList) => {
  return dataList.map((item) =>
    echarts.format.formatTime('MM-dd hh:mm', item, false)
  );
  // return dataList.map((item) => window.echarts.format.formatTime('MM-dd hh:mm', item, false))
};

const dealTooltip = (params, name) => {
  let price = null;
  let BinanceRate = null;
  let OKXRate = null;
  let BitgetRate = null;
  params.forEach((item) => {
    if (item.seriesType === 'line') {
      price = item.data[1];
    } else if (item.seriesName === 'Binance') {
      BinanceRate = item.data[1];
    } else if (item.seriesName === 'OKX') {
      OKXRate = item.data[1];
    } else if (item.seriesName === 'Bitget') {
      BitgetRate = item.data[1];
    }
  });
  let tip = `<div class="line-bar-tooltip">
      <div class="time">${params[0].axisValueLabel}</div>
      <div class="flex ${price ? 'show' : 'hide'}">
        <b class="logo"></b>
        <div class="text-content">${name}价格</div>
        <div class="value">$${price}</div>
      </div>
      <div class="flex ${BinanceRate ? 'show' : 'hide'}"">
        <b class="logo bin"></b>
        <div class="text-content">Binance</div>
        <div class="value">${toPrecision(BinanceRate * 100, 4)}%</div>
      </div>
      <div class="flex ${OKXRate ? 'show' : 'hide'}"">
        <b class="logo okx"></b>
        <div class="text-content">OKX</div>
        <div class="value">${toPrecision(OKXRate * 100, 4)}%</div>
      </div>
      <div class="flex ${BitgetRate ? 'show' : 'hide'}"">
        <b class="logo bit"></b>
        <div class="text-content">Bitget</div>
        <div class="value">${toPrecision(BitgetRate * 100, 4)}%</div>
      </div>
    </div>`;
  return tip;
};

export function getOption(diskData, name, period) {
  if (!diskData) {
    diskData = mockData;
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
      formatter: (params) => dealTooltip(params, name), // 处理弹框内容样式
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
        start: 50, // 数据窗口范围的起始百分比，表示50%
        end: 100
      },
      {
        type: 'slider',
        borderColor: 'rgba(0,0,0,0)'
      }
    ],
    legend: {
      data: [`${name}价格`, 'Binance', 'OKX', 'Bitget'],
      inactiveColor: '#ccc',
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: [
      {
        type: 'time',
        axisPointer: {
          snap: true,
          label: {
            show: true,
            formatter: function (params) {
              return echarts.format.formatTime(
                'yyyy-MM-dd hh:mm',
                params.value
              );
            }
          },
          handle: {
            show: false
          }
        },
        axisLabel: {
          show: true,
          // formatter: '{yyyy}-{MM}-{dd} {hh}:{mm}' // 设置x轴标签
          formatter: () => {
            // 设置x轴标签
            if (period === '1m') {
              return '{hh}:{mm}';
            } else if (period === '5m') {
              return '{MM}-{dd} {hh}:{mm}';
            } else {
              return '{MM}-{dd}';
            }
          }
        },
        axisLine: {
          show: false
        }
      }
      // {
      //   type: 'category',
      //   data: getXAxis(diskData.categoryData), // 处理时间戳
      //   axisPointer: {
      //     type: 'line'
      //   }
      // }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          fontSize: 12,
          color: '#868E9B',
          formatter(value, index) {
            // y轴坐标百分比表示，最多保留4位小数
            return toPrecision(value * 100, 4) + '%';
          }
        },
        // 背景横向样式修改
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(109, 180, 202, 0.3)',
            type: 'dashed'
          }
        }
      },
      {
        type: 'value',
        axisLabel: {
          formatter: '${value}'
        },
        // 去掉背景横线
        splitLine: {
          show: false
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
        name: 'Binance',
        type: 'bar',
        barGap: '-100%', // 使柱体重叠
        tooltip: {
          valueFormatter: function (value) {
            return toPrecision(value * 100, 4) + '%';
          }
        },
        data: diskData.valueDataBN,
        itemStyle: {
          // 通过值的正负给颜色
          color: (params) => {
            return params.value[1] > 0 ? '#11C384' : '#D93D57';
          }
        }
      },
      {
        name: 'OKX',
        type: 'bar',
        barGap: '-100%', // 使柱体重叠
        tooltip: {
          valueFormatter: function (value) {
            return toPrecision(value * 100, 4) + '%';
          }
        },
        data: diskData.valueDataOK,
        itemStyle: {
          // 通过值的正负给颜色
          color: (params) => {
            return params.value[1] > 0 ? '#11C384' : '#D93D57';
          }
        }
      },
      {
        name: 'Bitget',
        type: 'bar',
        barGap: '-100%', // 使柱体重叠
        tooltip: {
          valueFormatter: function (value) {
            return toPrecision(value * 100, 4) + '%';
          }
        },
        data: diskData.valueDataBIT,
        itemStyle: {
          // 通过值的正负给颜色
          color: (params) => {
            return params.value[1] > 0 ? '#11C384' : '#D93D57';
          }
        }
      }
    ]
  };
}
