import { mockData } from './mock.js';
import * as echarts from 'echarts';
const formatUtil = echarts.format;
// const formatUtil = window.echarts.format;
function getLevelOption() {
  return [
    {
      color: ['#4DD7A1', '#E87B7B', '#777F8D'],
      itemStyle: {
        borderWidth: 0,
        gapWidth: 2,
        borderColor: '#000'
      }
    }
  ];
}

export function getOption(diskData, id) {
  if (!diskData) {
    diskData = mockData;
  }
  return {
    title: [
      {
        show: false
      }
    ],
    tooltip: {
      //弹出框配置
      formatter: function (info) {
        let value = info.value;
        let name = info.name;
        if (id == 'treeMapVolume') {
          let tip = `<div class="tree-map-tooltip">
            <div>${name}</div>
            成交量: <span>$${formatUtil.addCommas(value)}亿</span>
          </div>`;
          return tip;
        }
      },
      backgroundColor: 'rgba(0,0,0,0.9)',
      padding: 0,
      borderWidth: 0,
      textStyle: {
        color: '#fff'
      }
    },
    series: [
      {
        name: 'All',
        type: 'treemap',
        roam: false,
        nodeClick: false,
        width: '100%',
        height: '100%',
        label: {
          show: true,
          position: ['5%', '30%'],
          formatter: (info) => {
            if (id == 'treeMapVolume') {
              let tip = [
                `{nameClass${info.dataIndex}|${info.name}}`,
                `{valueClass${info.dataIndex}|$${info.value}亿}`
              ].join('\n');
              return tip;
            }
          },
          rich: {
            //块内文字样式
            nameClass1: {
              fontSize: 36,
              lineHeight: 50,
              fontWeight: 600
            },
            nameClass2: {
              fontSize: 27,
              fontWeight: 600
            },
            nameClass3: {
              fontSize: 18,
              fontWeight: 600
            },
            nameClass4: {
              fontSize: 12,
              fontWeight: 600
            },
            valueClass1: {
              fontSize: 20,
              fontWeight: 400
            },
            valueClass2: {
              fontSize: 16,
              fontWeight: 400
            }
          }
        },
        itemStyle: {
          borderColor: '#fff'
        },
        levels: getLevelOption(),
        data: diskData,
        breadcrumb: {
          show: false //隐藏底部导航条
        }
      }
    ]
  };
}
