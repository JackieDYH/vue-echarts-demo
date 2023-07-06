<!--
 * @Author: Jackie
 * @Date: 2023-07-06 12:44:25
 * @LastEditTime: 2023-07-06 20:06:28
 * @LastEditors: Jackie
 * @Description: 曲线图传参
 * @FilePath: /vue-echarts-demo/src/components/Line/lineCharts3.vue
 * @version: 
-->
<template>
  <div class="line-chart" ref="myEcharts"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import {
  ref,
  onMounted,
  onUnmounted,
  defineProps,
  markRow,
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
    // console.log(props.data, 123);
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

const initChart = (data, showShadow = true) => {
  console.log(myChart, myEcharts.value, 777);

  echarts.init(myEcharts.value).dispose();
  // 标记一个对象,使其永远不会再成为响应式对象
  //   myChart.value = markRow(echarts.init(myEcharts.value));
  myChart = echarts.init(myEcharts.value);

  console.log(myChart, myEcharts.value, 888);

  // 把配置和数据
  //   const myData = {
  //     data
  //     // data: [
  //     //   { value: 335, name: '直接访问' },
  //     //   { value: 310, name: '邮件营销' },
  //     //   { value: 234, name: '联盟广告' },
  //     //   { value: 135, name: '视频广告' },
  //     //   { value: 1548, name: '搜索引擎' }
  //     // ]
  //   };

  let color = getColor(data);

  // 设置option
  const option = {
    xAxis: {
      type: 'category', //'time'
      name: '',
      nameTextStyle: {},
      boundaryGap: ['0%', '0%'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false //隐藏x轴刻度
      },
      splitLine: {
        show: false //隐藏x轴线
      },
      boundaryGap: false, //到边界
      // show: false,
      // axisLabel: {
      //   show: false// 显示坐标
      // },
      data: data.map((item) => item.name) //['24/3', '25/3', '26/3', '27/3', '28/3', '29/3', '30/3']
    },
    yAxis: {
      name: '',
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value}%'
      }
      // show: false, //取消显示坐标轴,坐标轴刻度,坐标值(如果是y轴,默认的网格线也会取消显示)
      // splitLine: {
      //   show: false,
      //   lineStyle: {
      //     color: 'rgba(109, 180, 202, 0.3)'
      //   }
      // }
      // axisLine: {
      //   show: false
      // },
      // axisTick: {
      //   show: false //隐藏y轴刻度
      // }
    },
    tooltip: {
      trigger: 'axis',
      show: true,
      // showContent: false,
      backgroundColor: '#333',
      textStyle: {
        color: '#fff',
        fontSize: '12px',
        fontWeight: '600'
      },
      axisPointer: {
        type: 'cross', // 默认为直线，可选为：'line' | 'shadow' 'cross'
        // axis: 'x',
        lineStyle: {
          color: 'rgba(109, 180, 202, 0.3)'
        }
      },
      //   formatter: '{a}: {b}<br />{c}: {d}: {e}'
      formatter: function (params) {
        // <i style="display:inline-block;border-radius:50%;width:4px;height:4px;background-color: #0ECB81;"></i>
        // ${console.log(params[0])}
        return `<div style="width:208px">
              <p>${params[0].name}</p>
              <p style="padding:2px 0;display: flex;justify-content: space-between;align-items: center;">
              <span style="display: flex;align-items: center;"><i style="display:inline-block;border-radius:50%;width:4px;height:4px;background-color: #0ECB81;"></i>
                累计收益率:</span>
              <span>${params[0].data.sy}</span>
              </p>
              <p style="padding:2px 0;display: flex;justify-content: space-between;align-items: center;">
                <span style="display: flex;align-items: center;"><i style="display:inline-block;border-radius:50%;width:4px;height:4px;background-color: #0ECB81;"></i>累计收益额(USDT):</span>
              <span>${params[0].data.value}</span>
              </p>
              <p style="padding:2px 0;display: flex;justify-content: space-between;align-items: center;">
                <span style="display: flex;align-items: center;"><i style="display:inline-block;border-radius:50%;width:4px;height:4px;background-color: #0ECB81;"></i>当日收益率:</span>
              <span>${params[0].data.sy}</span>
              </p>
          </div>`;
      }
    },
    grid: {
      top: '4%',
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true
    },
    series: [
      {
        data: data, //data.map((item) => item.value), //[820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        smooth: true,
        sampling: 'average',
        // label: {
        //   show: true,
        //   position: 'top',
        //   formatter: function (params) {
        //     return params.value + '%';
        //   }
        // },
        itemStyle: {
          color: color,
          borderWidth: 2,
          borderColor: color,
          opacity: 0
        },
        lineStyle: {
          color: color,
          width: 2
        },
        areaStyle: {
          // 渐变颜色
          color: showShadow ? getAreaStyle(data) : 'transparent'
        },
        animation: true
      }
    ]
  };
  option && myChart.setOption(option);
  window.addEventListener('resize', myChart.resize);
};
const getMockData = () => {
  return new Array(20).fill('').map((item, index) => {
    return [`2023-2-${index + 1}`, Math.random().toFixed(4)];
    // new Date(`2023,2,${index+1}`)
    // +new Date(`2023,2,${index+1}`)
    // 这俩都是不行的。得直接喂字符串进去。乐
    // 原因应该是如果不是字符串格式，数字会先转Date，然后Date再转字符串的时候，带上了.0，然后safari就识别不了了。
  });
};
/**
 * 线条颜色
 * @param {*} list
 */
const getColor = (list) => {
  if (typeof list !== 'object') {
    list = list.split(',');
  }
  let length = list.length;
  if (length < 2) {
    return '#11C384';
  }
  if (+list[length - 1].value > +list[length - 2].value) {
    return '#11C384';
  } else {
    return '#D93D57';
  }
};
/**
 * 设置曲线阴影颜色
 * 右/下/左/上
 * @param {*} list
 */
const getAreaStyle = (list) => {
  const upColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(17,195,132,0.6)'
    },
    {
      offset: 1,
      color: 'rgba(17,195,132,0)'
    }
  ]);
  const downColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(217,61,87,0.6)'
    },
    {
      offset: 1,
      color: 'rgba(217,61,87,0)'
    }
  ]);
  if (typeof list !== 'object') {
    list = list.split(',');
  }
  let length = list.length;
  if (length < 2) {
    return upColor;
  }
  // 按照数组的最后2个值来判断趋势上升/下降
  if (+list[length - 1].value > +list[length - 2].value) {
    return upColor;
  } else {
    return downColor;
  }
};
</script>

<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 100%;
}
</style>
