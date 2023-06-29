<!--
 * @Author: Jackie
 * @Date: 2023-06-29 19:53:28
 * @LastEditTime: 2023-06-29 20:32:42
 * @LastEditors: Jackie
 * @Description: line折线图
 * @FilePath: /vue-echarts-demo/src/components/lineCharts2.vue
 * @version: 
-->
<template>
  <div ref="myEcharts" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted, markRow } from 'vue';
onMounted(() => {
  initChart();
});

onUnmounted(() => {
  myChart.dispose();
  window.removeEventListener('resize', myChart.resize);
});
let myChart = '';
const myEcharts = ref(null);

const initChart = () => {
  console.log(myChart, myEcharts.value, 777);

  echarts.init(myEcharts.value).dispose();
  // 标记一个对象,使其永远不会再成为响应式对象
  //   myChart.value = markRow(echarts.init(myEcharts.value));
  myChart = echarts.init(myEcharts.value);

  console.log(myChart, myEcharts.value, 888);

  // 把配置和数据
  const myData = {
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ]
  };

  // 设置option
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
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
