<!--
 * @Author: Jackie
 * @Date: 2023-07-06 20:17:21
 * @LastEditTime: 2023-07-06 20:18:34
 * @LastEditors: Jackie
 * @Description: echarts 基础模版
 * @FilePath: /vue-echarts-demo/src/components/EchartsDemo.vue
 * @version: 
-->
<template>
  <div class="Demo-chart" ref="myEcharts"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted, defineProps, watch } from 'vue';
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});
onMounted(() => {
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
  const option = {};
  option && myChart.setOption(option);
  window.addEventListener('resize', myChart.resize);
};
</script>

<style lang="scss" scoped>
.Demo-chart {
  width: 100%;
  height: 100%;
}
</style>
