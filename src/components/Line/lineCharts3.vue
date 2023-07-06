<!--
 * @Author: Jackie
 * @Date: 2023-07-06 12:44:25
 * @LastEditTime: 2023-07-06 12:46:35
 * @LastEditors: Jackie
 * @Description: 曲线图传参
 * @FilePath: /vue-echarts-demo/src/components/Line/lineCharts3.vue
 * @version: 
-->
<template>
  <div
    class="line-chart"
    ref="myEcharts"
    :style="{ width: '100%', height: '100%' }"
  ></div>
</template>

<script setup>
import * as echarts from 'echarts';
import {
  ref,
  onMounted,
  onUnmounted,
  defineProps,
  markRow,
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
// 监听
watch(
  () => props.data,
  (val) => {
    // console.log(props.data, 123);
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
  console.log(myChart, myEcharts.value, 777);

  echarts.init(myEcharts.value).dispose();
  // 标记一个对象,使其永远不会再成为响应式对象
  //   myChart.value = markRow(echarts.init(myEcharts.value));
  myChart = echarts.init(myEcharts.value);

  console.log(myChart, myEcharts.value, 888);

  // 把配置和数据
  const myData = {
    data
    // data: [
    //   { value: 335, name: '直接访问' },
    //   { value: 310, name: '邮件营销' },
    //   { value: 234, name: '联盟广告' },
    //   { value: 135, name: '视频广告' },
    //   { value: 1548, name: '搜索引擎' }
    // ]
  };

  // 设置option
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false, //到边界
      // show: false,
      // axisLine: {
      //   show: false //隐藏x轴线
      // },
      // axisTick: {
      //   show: false //隐藏x轴刻度
      // },
      // 显示坐标
      // axisLabel: {
      //   show: false
      // },
      data: myData.data.map((item) => item.name) //['24/3', '25/3', '26/3', '27/3', '28/3', '29/3', '30/3']
    },
    yAxis: {
      type: 'value'
      // show: false, //取消显示坐标轴,坐标轴刻度,坐标值(如果是y轴,默认的网格线也会取消显示)
      // splitLine: {
      //   show: false
      // },
      // 显示坐标
      // axisLabel: {
      //   show: false
      // }
      // axisTick: {
      //   show: false //隐藏x轴刻度
      // }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      top: '4%',
      left: '2%',
      right: '2%',
      bottom: '8%',
      containLabel: true
    },
    series: [
      {
        data: myData.data.map((item) => item.value), //[820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        areaStyle: {
          // 渐变颜色
          color:
            // new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //   {
            //     offset: 0,
            //     color: 'rgba(17,195,132,0.31)'
            //   },
            //   {
            //     offset: 1,
            //     color: 'rgba(17,195,132,0)'
            //   }
            // ]) || 'transparent'
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(217,61,87,0.31)'
              },
              {
                offset: 1,
                color: 'rgba(217,61,87,0)'
              }
            ])
        }
      }
    ]
  };
  option && myChart.setOption(option);
  window.addEventListener('resize', myChart.resize);

  //   window.addEventListener('resize', () => {
  //     myChart?.resize();
  //   });
};
</script>

<style></style>
