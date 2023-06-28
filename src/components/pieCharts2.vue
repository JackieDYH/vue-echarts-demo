<!--
 * @Author: Jackie
 * @Date: 2023-06-28 21:19:51
 * @LastEditTime: 2023-06-28 21:19:53
 * @LastEditors: Jackie
 * @Description: pie圆形图标
 * @FilePath: /vue-echarts-demo/src/components/pieCharts2.vue
 * @version: 
-->
<template>
  <div id="myEcharts3" :style="{ width: '600px', height: '600px' }"></div>
</template>
  
  <script setup>
import * as echarts from "echarts";
import { ref, onMounted, onUnmounted } from "vue";

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  myChart.value.dispose();
  window.removeEventListener("resize", myChart.value.resize);
});

// 重点代码
//隐藏title
const hideTitle = (e) => {
  console.log(222);
  myChart.value.setOption({
    title: {
      text: "",
    },
  });
};
//显示title
const showTitle = (e) => {
  console.log(111);
  myChart.value.setOption({
    title: {
      text: "总数量\n2323",
      top: "215px",
      left: "295px",
      textAlign: "center",
    },
  });
};

let myChart = ref(null);

const initChart = () => {
  echarts.init(document.getElementById("myEcharts3")).dispose();
  let chartDom = document.getElementById("myEcharts3");
  myChart.value = echarts.init(chartDom);

  // 给饼图添加事件
  // 当区域高亮时隐藏title，比如当鼠标移动到legend上时
  myChart.value.on("highlight", hideTitle);
  // 当鼠标悬浮到区域时隐藏title
  myChart.value.on("mouseover", hideTitle);
  // 当鼠标离开区域时显示title
  myChart.value.on("mouseout", showTitle);
  // 当区域取消高亮时显示title，比如当鼠标从legend上离开时
  myChart.value.on("downplay", showTitle);

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

  // 设置option
  const conf = {
    // color: ["#00d1d1", "#529fcf", "#71d0aa", "#c5ff7d"],
    title: {
      text:
        "总数量\n" +
        String(
          myData.data.reduce((sum, item, index, array) => {
            return sum + item.value;
          }, 0)
        ),
      top: "215px",
      left: "295px",
      textAlign: "center",
      textStyle: {
        color: "#000",
        fontSize: "20px",
        // lineHeight: 30,
      },
    },
    // legend: {
    //   top: "5%",
    //   left: "center",
    //   textStyle: {
    //     color: "#000",
    //     fontSize: "16px",
    //   },
    // },
    legend: {
      // show: true,
      orient: "horizontal", // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
      x: "right", // 水平安放位置，默认为全图居中，可选为：
      // 'center' ¦ 'left' ¦ 'right'
      // ¦ {number}（x坐标，单位px）
      y: "bottom", // 垂直安放位置，默认为全图顶端，可选为：
      // 'top' ¦ 'bottom' ¦ 'center'
      // ¦ {number}（y坐标，单位px）
      // padding: [0, 20, 0, 0],
      textStyle: {
        //图例文字的样式
        color: "#333",
        fontSize: "16px",
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
    //   left: "center",
    //   //left: '37%',
    //   top: "center",
    //   style: {
    //     text:
    //       '显示数据"' + //圆饼中心显示数据，这里是显示得总数
    //       "\n\n" +
    //       String(
    //         //遍历循环计算总和
    //         myData.data.reduce((sum, item, index, array) => {
    //           return sum + item.value;
    //         }, 0)
    //       ).replace(/(\d)(?=(?:\d{6})+$)/g, "$1."),
    //     // String(this.circularGraph.sum.number).replace(/(\d)(?=(?:\d{6})+$)/g, '$1.'),
    //     textAlign: "center",
    //     fill: "#000",
    //     width: 30,
    //     height: 30,
    //     fontSize: 18,
    //   },
    // },
    series: [
      {
        name: "分类统计",
        type: "pie",
        radius: [80, 160],
        avoidLabelOverlap: false,
        center: ["50%", "40%"],
        label: {
          show: false,
          position: "center",
        },
        // 鼠标悬浮时中心位置显示对应区域的信息
        emphasis: {
          label: {
            formatter: `{b}\n{c}`,
            show: true,
            fontSize: "24px",
            fontWeight: "bold",
            // color: () => {},
            lineHeight: 30,
          },
        },
        itemStyle: {
          borderRadius: 10,
          borderColor: "rgba(255,255,255,0)",
          borderWidth: 2,
        },
        labelLine: {
          show: false,
        },
        data: myData.data,
      },
    ],
  };
  conf && myChart.value.setOption(conf);
  window.addEventListener("resize", myChart.value.resize);
};
</script>
  
  <style>
</style>