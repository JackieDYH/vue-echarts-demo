<!--
 * @Author: Jackie
 * @Date: 2023-06-29 13:49:42
 * @LastEditTime: 2023-06-29 13:58:27
 * @LastEditors: Jackie
 * @Description: pie圆形图标
 * @FilePath: /vue-echarts-demo/src/components/pieCharts4.vue
 * @version: 
-->
<template>
  <div ref="myEcharts" :style="{ width: '100%', height: '100%' }"></div>
</template>
  
  <script setup>
import * as echarts from "echarts";
import { ref, onMounted, onUnmounted } from "vue";
onMounted(() => {
  initChart();
});

onUnmounted(() => {
  myChart.value.dispose();
  window.removeEventListener("resize", myChart.value.resize);
});
let myChart = ref(null);
const myEcharts = ref(null);

const initChart = () => {
  echarts.init(myEcharts.value).dispose();
  myChart.value = echarts.init(myEcharts.value);
  console.log(myChart.value, 888);

  // 把配置和数据
  const myData = {
    data: [
      { value: 335, name: "直接访问" },
      { value: 310, name: "邮件营销" },
      { value: 234, name: "联盟广告" },
      { value: 135, name: "视频广告" },
      { value: 1548, name: "搜索引擎" },
    ],
  };

  // 设置option
  const conf = {
    title: {
      text: "",
      subtext: "",
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "70%", //图例距离左的距离
      y: "center", //图例上下居中
      data: ["甘肃", "兰州", "济南", "上海", "徐州"],
    },
    color: [
      "rgb(203,155,255)",
      "rgb(149,162,255)",
      "rgb(58,186,255)",
      "rgb(119,168,249)",
      "rgb(235,161,159)",
    ], //五个数据，五个颜色
    series: [
      {
        name: "",
        type: "pie",
        radius: "70%", //图的大小
        center: ["35%", "50%"], //图的位置，距离左跟上的位置
        data: [
          {
            name: "甘肃",
            value: "10",
          },
          {
            name: "兰州",
            value: "8",
          },
          {
            name: "济南",
            value: "9",
          },
          {
            name: "上海",
            value: "5",
          },
          {
            name: "徐州",
            value: "6",
          },
        ],
      },
    ],
  };
  conf && myChart.value.setOption(conf);
  window.addEventListener("resize", myChart.value.resize);
};
</script>
  
  <style>
</style>