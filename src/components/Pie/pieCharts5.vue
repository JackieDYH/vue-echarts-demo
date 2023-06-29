<!--
 * @Author: Jackie
 * @Date: 2023-06-29 13:58:37
 * @LastEditTime: 2023-06-29 20:37:00
 * @LastEditors: Jackie
 * @Description: pie圆形图标
 * @FilePath: /vue-echarts-demo/src/components/pieCharts5.vue
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
let myChart = '';
const myEcharts = ref(null);

const initChart = () => {
  echarts.init(myEcharts.value).dispose();
  myChart = echarts.init(myEcharts.value);
  console.log(myChart, 888);

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
    tooltip: {
      trigger: 'item',
      show: true,
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      textStyle: {
        align: 'right'
      }
    },
    color: ['rgb(149,162,255)'],
    legend: {
      orient: 'vertical',
      x: 'left',
      show: false,
      data: ['烟尘']
    },
    graphic: {
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: '烟尘',
        textAlign: 'center',
        fill: 'rgb(149,162,255)',
        width: 30,
        height: 30
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['70%', '100%'],
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 10,
            name: '烟尘',
            itemStyle: {
              label: {
                show: true,
                position: 'inside'
              }
            }
          }
        ]
      }
    ]
  };
  conf && myChart.setOption(conf);
  window.addEventListener('resize', myChart.resize);
};
</script>

<style></style>
