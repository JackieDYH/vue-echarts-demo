<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-07-06 19:44:22
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-echarts-demo/src/views/AboutView.vue
 * @version: 
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="charts1">
      <LineCharts />
    </div>
    <div class="charts1">
      <LineCharts2 />
    </div>
    <div class="charts1">
      <LineCharts3 :data="LineData" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import LineCharts from '@/components/Line/lineCharts.vue';
import LineCharts2 from '@/components/Line/lineCharts2.vue';
import LineCharts3 from '@/components/Line/lineCharts3.vue';
const LineData = ref([
  { value: 0, name: '20/3', sy: 666 },
  { value: 110, name: '21/3', sy: 333 },
  { value: 204, name: '22/3', sy: 22 },
  { value: 135, name: '23/3', sy: 111 },
  { value: 248, name: '24/3', sy: 88 }
]);
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  .charts1 {
    width: 60%;
    height: 280px;
  }
}
</style>
