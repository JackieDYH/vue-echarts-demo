<!--
 * @Author: Jackie
 * @Date: 2023-06-29 12:00:15
 * @LastEditTime: 2023-06-29 20:35:51
 * @LastEditors: Jackie
 * @Description: pie圆形图标
 * @FilePath: /vue-echarts-demo/src/components/pieCharts3.vue
 * @version: 
-->
<template>
  <div ref="myEcharts" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted } from 'vue';

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  myChart.dispose();
  window.removeEventListener('resize', myChart.resize);
});

// 重点代码
//隐藏title
const hideTitle = (e) => {
  console.log(222);
  myChart.setOption({
    title: {
      text: ''
    }
  });
};
//显示title
const showTitle = (e) => {
  console.log(111);
  myChart.setOption({
    title: {
      text: '总数量\n2323'
      // top: "215px",
      // left: "295px",
      // textAlign: "center",
    }
  });
};

let myChart = '';
const myEcharts = ref(null);

const initChart = () => {
  // echarts.init(document.getElementById("myEcharts3")).dispose();
  // let chartDom = document.getElementById("myEcharts3");
  echarts.init(myEcharts.value).dispose();
  myChart = echarts.init(myEcharts.value);

  // 给饼图添加事件
  // 当区域高亮时隐藏title，比如当鼠标移动到legend上时
  myChart.on('highlight', hideTitle);
  // 当鼠标悬浮到区域时隐藏title
  myChart.on('mouseover', hideTitle);
  // 当鼠标离开区域时显示title
  myChart.on('mouseout', showTitle);
  // 当区域取消高亮时显示title，比如当鼠标从legend上离开时
  myChart.on('downplay', showTitle);

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
  const conf = {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      top: 'center',
      align: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  conf && myChart.setOption(conf);
  window.addEventListener('resize', myChart.resize);
};
</script>

<style></style>
