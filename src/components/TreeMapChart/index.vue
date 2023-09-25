<!--
 * @Author: Jackie
 * @Date: 2023-09-21 23:02:39
 * @LastEditTime: 2023-09-25 10:26:56
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-echarts-demo/src/components/TreeMapChart/index.vue
 * @version: 
-->
<template>
  <div class="echart-chart" :id="id"></div>
</template>
<script>
import * as echarts from 'echarts';
import { getOption } from './chartOption';
export default {
  name: 'TreeMapChart',
  props: ['id', 'data', 'type'],
  data() {
    return {
      setTimeoutId: null
    };
  },
  watch: {
    data: {
      handler() {
        if (this.chart) {
          this.setOption();
        }
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      // this.chart = window.echarts.init(document.getElementById(this.id))
    },
    setOption() {
      this.chart.setOption(getOption(this.data, this.id), true);
    },
    resize() {
      this.setTimeoutId && clearTimeout(this.setTimeoutId);
      setTimeout(() => {
        this.chart && this.chart.resize();
      }, 500);
    }
  },
  created() {
    window.addEventListener('resize', this.resize);
  },
  async mounted() {
    // setTimeout(() => {
    await this.$nextTick();
    this.initChart();
    this.setOption();
    // }, 300)
  },
  unmounted() {
    this.chart && this.chart.dispose();
    window.removeEventListener('resize', this.resize);
  }
};
</script>
<style lang="scss" scoped>
.echart-chart {
  width: 100%;
  height: 100%;
}
</style>
