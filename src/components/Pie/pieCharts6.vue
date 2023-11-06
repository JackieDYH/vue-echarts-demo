<!--
 * @Author: Jackie
 * @Date: 2023-11-06 14:34:52
 * @LastEditTime: 2023-11-06 14:36:00
 * @LastEditors: Jackie
 * @Description: 饼图 - 鼠标悬浮显示中间统计数据 可用
 * @FilePath: /vue-echarts-demo/src/components/Pie/pieCharts6.vue
 * @version: 
-->
<template>
  <div class="pie-chart" ref="myEcharts"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, watch } from 'vue';
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});
onMounted(() => {
  console.log(props.data);
  initChart(props.data);
});
watch(
  () => props.data,
  (val) => {
    initChart(props.data);
  },
  { deep: true, immediate: false }
);

onUnmounted(() => {
  myChart.dispose();
  window.removeEventListener('resize', myChart.resize);
});

//隐藏title
const hideTitle = (e) => {
  myChart.setOption({
    title: {
      text: '',
      subtext: ''
    }
  });
};
//显示title
const showTitle = (e) => {
  myChart.setOption({
    title: {
      text:
        '$' +
        props.data.reduce((sum, item, index, array) => {
          return sum + item.value;
        }, 0),
      subtext: '总数量'
    }
  });
};

let myChart = '';
const myEcharts = ref(null);

const initChart = (data) => {
  window.echarts.init(myEcharts.value).dispose();
  myChart = window.echarts.init(myEcharts.value);

  // 给饼图添加事件
  // 当区域高亮时隐藏title，比如当鼠标移动到legend上时
  // myChart.on('highlight', hideTitle);
  // 当鼠标悬浮到区域时隐藏title
  // myChart.on('mouseover', hideTitle);
  // 当鼠标离开区域时显示title
  // myChart.on('mouseout', showTitle);
  // 当区域取消高亮时显示title，比如当鼠标从legend上离开时
  // myChart.on('downplay', showTitle);

  // 设置option
  const option = {
    title: {
      text:
        '$' +
        data.reduce((sum, item, index, array) => {
          return sum + item.value;
        }, 0),
      subtext: '总数量',
      x: '34.3%',
      y: '42.3%',
      textAlign: 'center',
      textStyle: {
        color: '#000',
        fontSize: '36px',
        fontWeight: 'bold',
        lineHeight: 30,
        fontFamily: 'DIN',
        fontWight: '500'
      },
      subtextStyle: {
        color: '#868E9B',
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'PingFang SC',
        fontWeight: '500'
      }
    },
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{b}: {d}%-{c}'
    // },
    legend: {
      // type: "scroll",
      show: true,
      // top: "28%",
      y: 'center',
      left: 'right',
      icon: 'circle',
      // selectedMode: false, // 控制是否可以通过点击图例改变系列的显示状态 --
      orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
      padding: [0, 20, 0, 10],
      align: 'left', //图例文字在右边
      itemGap: 20, // 图例间隙
      textStyle: {
        //图例文字的样式
        fontFamily: 'DIN',
        fontWeight: '700',
        color: '#000',
        fontSize: '16px',
        backgroundColor: 'transparent',
        rich: {
          orgname: {
            fontSize: '16px',
            width: 70,
            color: '#000',
            fontFamily: 'DIN',
            fontWeight: '700'
          },
          count: {
            fontSize: '16px',
            verticalAlign: 'top',
            align: 'center',
            color: '#000',
            padding: [0, 0, 0, 15],
            fontFamily: 'DIN',
            fontWeight: '500'
          }
        }
        // lineHeight: 14,
        // padding: [0, 0, 0, 20],
      },
      data: data.map((item) => item.name), //图例组件
      formatter: (name) => {
        let num = '';

        data.forEach((item) => {
          //格式化图例文本，支持字符串模板和回调函数两种形式。
          if (item.name === name) {
            num = String(item.value).replace(/(\d)(?=(?:\d{6})+$)/g, '$1.');
            return;
          }
        });

        let total = data.reduce((sum, item, index, array) => {
          return sum + item.value;
        }, 0);
        let p = Math.round((num / total) * 10000) / 100;
        return `{orgname|${name}}{count|${p}%}`;
      }
    },
    series: [
      {
        name: '分类统计',
        type: 'pie',
        radius: ['60%', '80%'],
        center: ['35%', '50%'], //偏移
        avoidLabelOverlap: false,
        // itemStyle: {
        //   borderRadius: 10,
        //   borderColor: '#fff',
        //   borderWidth: 2
        // },
        label: {
          show: false,
          position: 'center'
        },
        // 鼠标悬浮时中心位置显示对应区域的信息
        emphasis: {
          label: {
            show: true,
            formatter: '{num|${c}}\n{title|{b}}',
            fontSize: '26px',
            fontWeight: 'bold',
            // color: () => {},
            lineHeight: 30,
            rich: {
              num: {
                color: '#000',
                fontFamily: 'DIN',
                fontSize: '36px',
                fontWeight: '500',
                padding: [0, 0, 0, 0]
              },
              title: {
                // color: '#868E9B',
                // fontFamily: 'PingFang SC',
                fontSize: '20px',
                fontWeight: '500',
                padding: [20, 0, 0, 0]
              }
            }
          }
        },
        //   emphasis: false,
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  };
  option && myChart.setOption(option);
  window.addEventListener('resize', myChart.resize);
};
</script>

<style lang="less" scoped>
.pie-chart {
  width: 100%;
  height: 100%;
}
</style>

<!-- <LockPieChart class="pie-chart" :data="LineData3" />

const LineData3 = ref([
  { value: 20, name: 'OKX', sy: 666 },
  { value: 60, name: 'OKX2', sy: 333 },
  { value: 40, name: 'OKX3', sy: 222 }
]); -->
