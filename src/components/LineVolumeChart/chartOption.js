import { mockData } from './mock.js';
import { getMax, getMin, division, toPrecision } from '@/utils';

const formatNumber = (number, num) => {
  number = Number(number);
  if (number >= 100000000) {
    return (number / 100000000).toFixed(num) + '亿';
  } else if (number >= 10000) {
    return (number / 10000).toFixed(num) + '万';
  } else if (number >= 0) {
    return number.toFixed(num);
  } else {
    return '-';
  }
};

const dealTooltip = (params, name, unit) => {
  let price = null;
  let BinanceRate = null;
  let OKXRate = null;
  let BitgetRate = null;
  let sum = null;
  params.forEach((item) => {
    if (item.seriesType === 'line') {
      price = item.data[1];
    } else if (item.seriesIndex === 1) {
      //根据seriesIndex确定是哪个交易所的数据
      BinanceRate = item.data[1];
      sum += Number(BinanceRate);
    } else if (item.seriesIndex === 2) {
      OKXRate = item.data[1];
      sum += Number(OKXRate);
    } else if (item.seriesIndex === 3) {
      BitgetRate = item.data[1];
      sum += Number(BitgetRate);
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
        <div class="value">${
          unit === 'USD'
            ? `$${formatNumber(BinanceRate, 2)}`
            : `${formatNumber(BinanceRate, 2)} ${name}`
        }</div>
      </div>
      <div class="flex ${OKXRate ? 'show' : 'hide'}"">
        <b class="logo okx"></b>
        <div class="text-content">OKX</div>
        <div class="value">${
          unit === 'USD'
            ? `$${formatNumber(OKXRate, 2)}`
            : `${formatNumber(OKXRate, 2)} ${name}`
        }</div>
      </div>
      <div class="flex ${BitgetRate ? 'show' : 'hide'}"">
        <b class="logo bit"></b>
        <div class="text-content">Bitget</div>
        <div class="value">${
          unit === 'USD'
            ? `$${formatNumber(BitgetRate, 2)}`
            : `${formatNumber(BitgetRate, 2)} ${name}`
        }</div>
      </div>
      <div class="flex ${
        BitgetRate || BinanceRate || OKXRate ? 'show' : 'hide'
      }"">
        <div class="text-content">总计</div>
        <div class="value">${
          unit === 'USD'
            ? `$${formatNumber(sum, 2)}`
            : `${formatNumber(sum, 2)} ${name}`
        }</div>
      </div>
    </div>`;
  return tip;
};

export function getOption(diskData, name, period, unit) {
  if (!diskData) {
    diskData = mockData;
    console.log(diskData);
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
      formatter: (params) => dealTooltip(params, name, unit), // 处理弹框内容样式
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
        end: 100
      }
      // {
      //   type: 'slider',
      //   borderColor: 'rgba(0,0,0,0)',
      // },
    ],
    legend: {
      // 图例组件
      data: [`${name}价格`, '持仓'],
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
            if (period === '1m' || period === '5m') {
              return '{hh}:{mm}';
            } else if (period === '15m' || period === '1h' || period === '4h') {
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
            return unit === 'USD'
              ? `$${formatNumber(value, 0)}`
              : `${formatNumber(value, 0)} ${name}`;
          }
        },
        // 背景横向样式修改
        splitLine: {
          show: false,
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
        // 背景横向样式修改
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(109, 180, 202, 0.3)',
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        name: `${name}价格`,
        type: 'line',
        smooth: true, //圆滑
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
        name: '持仓',
        type: 'bar',
        stack: 'volume', // 同名数据堆叠
        tooltip: {
          valueFormatter: function (value) {
            return formatNumber(value, 2);
          }
        },
        data: diskData.valueDataBN,
        itemStyle: {
          color: '#11C384',
          borderColor: '#11C384'
        }
      },
      {
        name: '持仓',
        type: 'bar',
        stack: 'volume', // 同名数据堆叠
        tooltip: {
          valueFormatter: function (value) {
            return formatNumber(value, 2);
          }
        },
        data: diskData.valueDataOK,
        itemStyle: {
          color: '#11C384',
          borderColor: '#11C384'
        }
      },
      {
        name: '持仓',
        type: 'bar',
        stack: 'volume', // 同名数据堆叠
        tooltip: {
          valueFormatter: function (value) {
            return formatNumber(value, 2);
          }
        },
        data: diskData.valueDataBIT,
        itemStyle: {
          color: '#11C384',
          borderColor: '#11C384'
        }
      }
    ]
  };
}
