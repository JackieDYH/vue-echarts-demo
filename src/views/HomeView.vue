<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-06-29 20:37:21
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-echarts-demo/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <h1>This is an home page</h1>
    <LineCharts />
    <div class="charts2">
      <LineCharts2 />
    </div>
    <PieCharts />
    <div class="charts2">
      <PieCharts2 />
    </div>
    <div class="charts2">
      <PieCharts22 />
    </div>
    <div class="charts2">
      <PieCharts3 />
    </div>
    <div class="charts2">
      <PieCharts4 />
    </div>
    <div class="charts2">
      <PieCharts5 />
    </div>
  </div>
</template>

<script setup>
import LineCharts from '@/components/lineCharts.vue';
import LineCharts2 from '@/components/lineCharts2.vue';
import PieCharts from '@/components/pieCharts.vue';
import PieCharts2 from '@/components/pieCharts2.vue';
import PieCharts22 from '@/components/pieCharts2-2.vue';
import PieCharts3 from '@/components/pieCharts3.vue';
import PieCharts4 from '@/components/pieCharts4.vue';
import PieCharts5 from '@/components/pieCharts5.vue';
</script>
<style lang="scss" scoped>
.home {
  margin: 0 auto;
  .charts2 {
    width: 600px;
    height: 500px;
    border: 1px solid #000;
  }
}
</style>
