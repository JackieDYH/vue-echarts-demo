<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="charts1">
      <LineCharts />
    </div>
    <div class="charts1">
      <LineCharts2 />
    </div>
  </div>
</template>
<script setup>
import LineCharts from '@/components/Line/lineCharts.vue';
import LineCharts2 from '@/components/Line/lineCharts2.vue';
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
