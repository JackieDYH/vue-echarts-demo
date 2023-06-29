<!--
 * @Author: Jackie
 * @Date: 2023-06-28 21:18:27
 * @LastEditTime: 2023-06-28 21:21:11
 * @LastEditors: Jackie
 * @Description: line折线图表
 * @FilePath: /vue-echarts-demo/src/components/lineCharts.vue
 * @version: 
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div
      id="myEcharts"
      ref="myEcharts"
      :style="{ width: '100%', height: '100%' }"
    ></div>
  </div>
</template>
    <script setup>
import * as echarts from "echarts";
import { ref, onMounted, onUnmounted } from "vue";

onMounted(() => {
  initChart();
  // window.addEventListener("resize", echarts.resize());
});

onUnmounted(() => {
  console.log(echarts, myChart, 888);
  myChart.dispose();
  // echarts.dispose;
  // window.onresize = null;
  window.removeEventListener("resize", myChart.resize);
  console.log(echarts, myChart, 999);
});
let myChart = null;
// 基础配置一下Echarts
const initChart = () => {
  echarts.init(document.getElementById("myEcharts")).dispose();
  let chartDom = document.getElementById("myEcharts");
  myChart = echarts.init(chartDom, "dark");
  // 把配置和数据
  const myData = {
    xData: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
    yData: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
  };
  const conf = {
    xAxis: {
      type: "category",
      data: myData.xData,
    },
    tooltip: {
      trigger: "axis",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: myData.yData,
        type: "line",
        smooth: true,
      },
    ],
  };
  conf && myChart.setOption(conf);
  window.addEventListener("resize", myChart.resize);
  // window.onresize = function () {
  //   //自适应大小
  //   myChart.resize();
  // };
};
</script>