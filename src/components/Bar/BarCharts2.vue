<!--
 * @Author: Jackie
 * @Date: 2023-07-06 19:53:41
 * @LastEditTime: 2023-07-06 19:54:31
 * @LastEditors: Jackie
 * @Description: 柱状图
 * @FilePath: /vue-echarts-demo/src/components/Bar/BarCharts2.vue
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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [-20, 200, 150, -70, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
  option && myChart.setOption(option);
  window.addEventListener('resize', myChart.resize);
};
</script>

<style lang="scss" scoped>
.bar-chart {
  width: 100%;
  height: 100%;
}
</style>
