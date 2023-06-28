<!--
 * @Author: Jackie
 * @Date: 2023-06-28 21:19:15
 * @LastEditTime: 2023-06-28 21:20:26
 * @LastEditors: Jackie
 * @Description: pie圆形图标
 * @FilePath: /vue-echarts-demo/src/components/pieCharts.vue
 * @version: 
-->
<template>
  <div id="myEcharts2" :style="{ width: '100%', height: '600px' }"></div>
</template>
  
  <script setup>
import * as echarts from "echarts";
import { ref, onMounted, onUnmounted } from "vue";

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  myChart.dispose();
  window.removeEventListener("resize", myChart.resize);
});

let myChart = null;
const initChart = () => {
  echarts.init(document.getElementById("myEcharts2")).dispose();
  let chartDom = document.getElementById("myEcharts2");
  myChart = echarts.init(chartDom);

  // 把配置和数据
  const myData = {
    data: [
      { value: 335, name: "直接访问" },
      { value: 310, name: "邮件营销" },
      { value: 234, name: "联盟广告" },
      { value: 135, name: "视频广告" },
      { value: 1548, name: "搜索引擎" },
    ],
  };
  // option
  const conf = {
    // title: {
    //   text: "标题", //标题文本
    //   left: "center",
    //   show: true, //是否显示标题组件
    // },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%",
      // formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    // grid: {
    //   left: "3%",
    //   right: "4%",
    //   bottom: "3%",
    //   containLabel: true,
    // },
    legend: {
      show: true,
      orient: "visualMap", //图例水平对齐排列
      x: "right",
      y: "center",
      padding: [0, 20, 0, 0],
      textStyle: {
        //图例文字的样式
        color: "#333",
        fontSize: 12,
      },
      data: myData.data.map((item) => item.name), //图例组件
      formatter: (name) => {
        let num = "";
        myData.data.forEach((item) => {
          //格式化图例文本，支持字符串模板和回调函数两种形式。
          if (item.name === name) {
            num = String(item.value).replace(/(\d)(?=(?:\d{6})+$)/g, "$1.");
            return;
          }
        });
        return name + "：" + num;
      },
    },
    // graphic: {
    //   type: "text",
    //   z: 2,
    //   left: "center",
    //   top: "center",
    //   style: {
    //     text: "总数\n\n1000",
    //     textAlign: "center",
    //     font: "16px Microsoft YaHei",
    //   },
    // },
    graphic: {
      type: "text",
      left: "center",
      //left: '37%',
      top: "center",
      style: {
        text:
          '支付笔数"' + //圆饼中心显示数据，这里是显示得总数
          "\n\n" +
          String(
            //遍历循环计算总和
            myData.data.reduce((sum, item, index, array) => {
              return sum + item.value;
            }, 0)
          ).replace(/(\d)(?=(?:\d{6})+$)/g, "$1."),
        // String(this.circularGraph.sum.number).replace(/(\d)(?=(?:\d{6})+$)/g, '$1.'),
        textAlign: "center",
        fill: "#333",
        width: 30,
        height: 30,
        fontSize: 18,
      },
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: myData.data,
      },
    ],
    // series: [
    //   {
    //     type: "pie",
    //     radius: ["35%", "65%"],
    //     // center: ['34%', '50%'],
    //     // label: {
    //     //   //去除句柄
    //     //   normal: {
    //     //     position: "inner",
    //     //     show: false,
    //     //   },
    //     // },
    //     itemStyle: {
    //       normal: {
    //         label: {
    //           show: true,
    //           textStyle: { color: "#333", fontSize: "14" },
    //           formatter: function (val) {
    //             //让series 中的文字进行换行
    //             return val.name;
    //             // return val.name + "\n(" + val.percent + "%)";
    //           },
    //         },
    //         labelLine: {
    //           show: true,
    //           lineStyle: { color: "#3c4858" },
    //         },
    //       },
    //       emphasis: {
    //         shadowBlur: 10,
    //         shadowOffsetX: 0,
    //         shadowColor: "rgba(0, 0, 0, 0.5)",
    //         textColor: "#000",
    //       },
    //     },
    //     data: myData.data, //数据
    //   },
    // ],
  };
  conf && myChart.setOption(conf);
  window.addEventListener("resize", myChart.resize);
};
</script>
  
  <style>
</style>