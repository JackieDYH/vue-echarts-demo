<!--
 * @Author: Jackie
 * @Date: 2023-07-06 19:55:01
 * @LastEditTime: 2023-07-06 21:14:46
 * @LastEditors: Jackie
 * @Description: 柱状图
 * @FilePath: /vue-echarts-demo/src/components/Bar/BarCharts3.vue
 * @version: 
-->
<template>
  <div class="bar-chart" ref="myEcharts"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import {
  ref,
  onMounted,
  onUnmounted,
  defineProps,
  watchEffect,
  watch
} from 'vue';
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
let myChart = '';
const myEcharts = ref(null);

const initChart = (data) => {
  echarts.init(myEcharts.value).dispose();
  myChart = echarts.init(myEcharts.value);

  // 设置option
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: ['0%', '0%'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false //隐藏x轴刻度
      },
      splitLine: {
        show: false //隐藏x轴线
      },
      // boundaryGap: false, //到边界
      data: props.data.map((item) => item.name) //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      top: '4%',
      left: '4%',
      right: '4%',
      bottom: '2%',
      containLabel: true
    },
    series: [
      {
        type: 'bar',
        barMaxWidth: 25,
        data: props.data.map((item) => {
          // 循环
          return {
            // value: item.value,
            ...item,
            label: {
              show: true, //开启显示
              position: item.value > 0 ? 'top' : 'bottom', //判断正负值上方显示还是下方
              formatter: '{c}%', //单位
              textStyle: {
                //数值样式
                color: item.value < 0 ? '#229D45' : '#E93030', //数值颜色
                fontSize: '18px'
              }
            }
          };
        }),
        itemStyle: {
          //柱体背景色
          normal: {
            color: (val) => {
              var index_color = val.value;
              return getAreaStyle(index_color); //index_color > 0 ? '#E93030' : '#229D45';
            }
          }
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      show: true,
      // showContent: false,
      backgroundColor: '#333',
      textStyle: {
        color: '#fff',
        fontSize: '12px',
        fontWeight: '600'
      },
      axisPointer: {
        type: 'cross', // 默认为直线，可选为：'line' | 'shadow' 'cross'
        // axis: 'x',
        lineStyle: {
          type: 'solid', //默认值
          color: 'rgba(109, 180, 202, 0.3)'
        },
        label: {
          color: '#fff',
          backgroundColor: 'rgb(51,51,51)'
        },
        crossStyle: {
          //默认值，
          color: 'rgba(255,140,0,0.3)', //默认值
          type: 'solid' //默认值
        }
      },
      // formatter: "{b0}<br/>"+that.defaultName+"：{c0}<br/>"+ this.legendName + "：{c1}",
      formatter: function (params, ticket, callback) {
        // console.log(params, 8888);
        return (
          params[0].data.sy +
          '<br/>' +
          params[0].data.name +
          '：' +
          params[0].data.value
        );
      },
      axisPointer: {
        label: {
          color: '#fff',
          backgroundColor: 'rgb(51,51,51)'
        },
        type: 'cross',
        lineStyle: {
          //默认值各异
          color: 'rgba(255,140,0,0.3)', //默认值各异，颜色rgba
          type: 'solid' //默认值
        },
        crossStyle: {
          //默认值，
          color: 'rgba(255,140,0,0.3)', //默认值
          type: 'solid' //默认值
        }
      }
    }
  };
  option && myChart.setOption(option);
  window.addEventListener('resize', myChart.resize);
};

/**
 * 设置曲线阴影颜色
 * 右/下/左/上
 * @param {*} list
 */
const getAreaStyle = (list) => {
  const upColor = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    {
      offset: 0,
      color: 'rgba(17,195,132,0.9)'
    },
    {
      offset: 1,
      color: 'rgba(17,195,132,0)'
    }
  ]);
  const downColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(217,61,87,0.9)'
    },
    {
      offset: 1,
      color: 'rgba(217,61,87,0)'
    }
  ]);
  if (list > 0) {
    return downColor;
  } else {
    return upColor;
  }
};
</script>

<style lang="scss" scoped>
.bar-chart {
  width: 100%;
  height: 100%;
}
</style>
