<!--
 * @Author: Jackie
 * @Date: 2023-09-25 09:56:52
 * @LastEditTime: 2023-09-25 10:25:38
 * @LastEditors: Jackie
 * @Description: 图表集合
 * @FilePath: /vue-echarts-demo/src/views/ChartView.vue
 * @version: 
-->
<template>
  <div class="example">
    <div class="chart-container">
      <TreeMapChart :id="treeMapID" :data="treeMapData" />
    </div>
    <div class="line-bar-container">
      <h2>{{ coinName }}资金费率历史图表</h2>
      <LineBarChart
        :id="LineBarID"
        :name="coinName"
        :data="LineBarData"
        :period="period"
      />
    </div>
    <div class="line-bar-container">
      <h2>交易所{{ coinNameVloume }}合约持仓量({{ unit }})</h2>
      <LineVolumeChart
        :id="LineVolumeID"
        :name="coinNameVloume"
        :period="periodVolume"
        :unit="unit"
      />
    </div>
    <div class="line-bar-container">
      <h2>{{ exchange }} {{ coinNameVloume }}合约持仓量({{ unitExchange }})</h2>
      <LineExchangeChart
        :id="LineExchangeID"
        :name="coinNameExchange"
        :period="periodExchange"
        :unit="unitExchange"
        :exchange="exchange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TreeMapChart from '@/components/TreeMapChart';
import LineBarChart from '@/components/LineBarChart';
import LineVolumeChart from '@/components/LineVolumeChart';
import LineExchangeChart from '@/components/LineExchangeChart';

/**
 * treeMapID为ui图上的热力图ID treeMapVolume为成交量的id，涨跌幅、爆仓、持仓给不同id
 * 需要在TreeMapChart->chartOption.js中做下id的判断给不同的文案（在该js中搜索treeMapVolume）
 * 组件上可通过data传入相关数据
 */
const treeMapID = ref('treeMapVolume');
const treeMapData = ref(null);

/**
 * LineBarID为资金费率图表ID
 * coinName为币种名称
 * period为x轴周期，相关值：1m 5m 8h
 * 组件上可通过data传入相关数据，数据格式见mock.js
 */
const LineBarID = ref('fundingRates');
const LineBarData = ref(null);
const coinName = ref('ETH'); //币种名称
const period = ref('1m'); //时间周期

/**
 * LineVolumeID为合约持仓量图表ID
 * LineVolumeID为币种名称
 * periodVolume为x轴周期，相关值：1m 5m 15m 1h 4h 12h 1d
 * 组件上可通过data传入相关数据，数据格式见mock.js
 */
const LineVolumeID = ref('volumeBTC');
const coinNameVloume = ref('BTC');
const unit = ref('USD');
const periodVolume = ref('1m');

/**
 * LineExchangeID为交易所合约持仓量图表ID
 * coinNameExchange为币种名称
 * periodExchange为x轴周期，相关值：1m 5m 15m 1h 4h 12h 1d
 * exchange为交易所名称，相关值：Binance OKX Bitget
 * 组件上可通过data传入相关数据，数据格式见mock.js
 */
const LineExchangeID = ref('exchangeBinance');
const coinNameExchange = ref('BTC');
const unitExchange = ref('USD');
const periodExchange = ref('1m');
const exchange = ref('Binance');
</script>

<style lang="scss" scoped>
.example {
  width: 100%;
  .chart-container {
    width: 70%;
    height: 500px;
  }
  .line-bar-container {
    padding: 50px;
    width: 100%;
    height: 600px;
    h2 {
      font-size: 30px;
    }
  }
}
</style>
