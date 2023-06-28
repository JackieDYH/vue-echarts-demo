<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-06-28 21:26:17
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
    <PieCharts2 />
  </div>
</template>

<script setup>
import LineCharts from "@/components/lineCharts.vue";
import PieCharts from "@/components/pieCharts.vue";
import PieCharts2 from "@/components/pieCharts2.vue";
</script>
