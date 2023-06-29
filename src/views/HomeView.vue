<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-06-29 12:36:51
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-echarts-demo/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <h1>This is an home page</h1>
    <LineCharts />
    <PieCharts />
    <div class="charts2">
      <PieCharts2 />
    </div>
    <div class="charts2">
      <PieCharts3 />
    </div>
  </div>
</template>

<script setup>
import LineCharts from "@/components/lineCharts.vue";
import PieCharts from "@/components/pieCharts.vue";
import PieCharts2 from "@/components/pieCharts2.vue";
import PieCharts3 from "@/components/pieCharts3.vue";
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