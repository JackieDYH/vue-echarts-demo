<!--
 * @Author: Jackie
 * @Date: 2023-07-06 19:47:10
 * @LastEditTime: 2023-07-06 19:54:46
 * @LastEditors: Jackie
 * @Description: 柱状图
 * @FilePath: /vue-echarts-demo/src/views/BarView.vue
 * @version: 
-->
<template>
  <div class="BarView">
    <h1>This is an BarView page</h1>
    <div class="charts1">
      <BarCharts />
    </div>
    <div class="charts1">
      <BarCharts2 />
    </div>
    <div class="charts1">
      <BarCharts3 :data="LineData" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import BarCharts from '@/components/Bar/BarCharts.vue';
import BarCharts2 from '@/components/Bar/BarCharts2.vue';
import BarCharts3 from '@/components/Bar/BarCharts3.vue';
const LineData = ref([
  { value: 0, name: '20/3', sy: 666 },
  { value: -110, name: '21/3', sy: 333 },
  { value: 204, name: '22/3', sy: 22 },
  { value: 135, name: '23/3', sy: 111 },
  { value: 248, name: '24/3', sy: 88 }
]);
</script>
<style lang="scss" scoped>
.BarView {
  display: flex;
  flex-direction: column;
  align-items: center;
  .charts1 {
    width: 60%;
    height: 280px;
  }
}
</style>
