<!--
 * @Author: Jackie
 * @Date: 2023-06-28 21:19:51
 * @LastEditTime: 2023-06-29 20:35:09
 * @LastEditors: Jackie
 * @Description: pie圆形图标
 * @FilePath: /vue-echarts-demo/src/components/pieCharts2.vue
 * @version: 
-->
<template>
  <div ref="myEcharts" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted } from 'vue';

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  myChart.dispose();
  window.removeEventListener('resize', myChart.resize);
});

// 重点代码
//隐藏title
const hideTitle = (e) => {
  console.log(222);
  myChart.setOption({
    title: {
      text: ''
    }
  });
};
//显示title
const showTitle = (e) => {
  console.log(111);
  myChart.setOption({
    title: {
      text: '总数量\n2323'
      // top: "215px",
      // left: "295px",
      // textAlign: "center",
    }
  });
};

let myChart = '';
const myEcharts = ref(null);

const initChart = () => {
  // echarts.init(document.getElementById("myEcharts2")).dispose();
  // let chartDom = document.getElementById("myEcharts2");
  echarts.init(myEcharts.value).dispose();
  myChart = echarts.init(myEcharts.value);

  // 给饼图添加事件
  // 当区域高亮时隐藏title，比如当鼠标移动到legend上时
  myChart.on('highlight', hideTitle);
  // 当鼠标悬浮到区域时隐藏title
  myChart.on('mouseover', hideTitle);
  // 当鼠标离开区域时显示title
  myChart.on('mouseout', showTitle);
  // 当区域取消高亮时显示title，比如当鼠标从legend上离开时
  myChart.on('downplay', showTitle);

  // 把配置和数据
  const myData = {
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ]
  };

  // 设置option
  const conf = {
    // color: ["#00d1d1", "#529fcf", "#71d0aa", "#c5ff7d"],
    title: {
      text:
        '总数量\n' +
        String(
          myData.data.reduce((sum, item, index, array) => {
            return sum + item.value;
          }, 0)
        ),
      top: '180px',
      left: '295px',
      // x: "center",
      // y: "center",
      textAlign: 'center',
      textStyle: {
        color: '#000',
        fontSize: '20px'
        // lineHeight: 30,
      }
    },
    // title: [
    //   {
    //     text: "交易总数",
    //     x: "center",
    //     top: "35%",
    //     textStyle: {
    //       color: "#000",
    //       fontSize: 20,
    //       fontWeight: "bold",
    //     },
    //   },
    //   {
    //     text: "1223",
    //     x: "center",
    //     top: "38%",
    //     textStyle: {
    //       fontSize: "26",
    //       color: "#000",
    //       //fontFamily: "siyuanyahei_yingwen_shuzi",
    //     },
    //   },
    // ],
    // legend: {
    //   top: "5%",
    //   left: "center",
    //   textStyle: {
    //     color: "#000",
    //     fontSize: "16px",
    //   },
    // },
    legend: {
      // type: "scroll",
      show: true,
      // top: "28%",
      left: 'right',
      y: 'center',
      // top: "center",
      selectedMode: false, // 控制是否可以通过点击图例改变系列的显示状态
      orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
      // x: "right", // 水平安放位置，默认为全图居中，可选为：
      // 'center' ¦ 'left' ¦ 'right'
      // ¦ {number}（x坐标，单位px）
      // y: "center", // 垂直安放位置，默认为全图顶端，可选为：
      // 'top' ¦ 'bottom' ¦ 'center'
      // ¦ {number}（y坐标，单位px）
      // padding: [0, 0, 0, 10],
      align: 'left', //图例文字在右边
      itemGap: 20, // 图例间隙

      textStyle: {
        //图例文字的样式
        color: '#333',
        fontSize: '16px'
        // lineHeight: 14,
        // rich: {
        //   a: {
        //     verticalAlign: "middle",//top、middle、bottom
        //   },
        // },
        // padding: [0, 0, 0, 20],
      },
      data: myData.data.map((item) => item.name), //图例组件
      formatter: (name) => {
        let num = '';
        myData.data.forEach((item) => {
          //格式化图例文本，支持字符串模板和回调函数两种形式。
          if (item.name === name) {
            num = String(item.value).replace(/(\d)(?=(?:\d{6})+$)/g, '$1.');
            return;
          }
        });
        return name + '：' + num;
      }
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
    // grid: {
    //   top: "6%", //柱状图距离父容器div顶端的距离
    //   left: "2%", //柱状图距离父容器div左端的距离
    //   right: "15%", //柱状图距离父容器div右端的距离
    //   bottom: "0%", //柱状图距离父容器div底端的距离
    //   containLabel: true, //grid 区域是否包含坐标轴的刻度标签
    // },
    series: [
      {
        name: '分类统计',
        type: 'pie',
        radius: [80, 160], //radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        // center: ["50%", "40%"],//偏移
        label: {
          show: false,
          position: 'center'
        },
        // 鼠标悬浮时中心位置显示对应区域的信息
        emphasis: {
          label: {
            formatter: `{b}\n{c}`,
            show: true,
            fontSize: '24px',
            fontWeight: 'bold',
            // color: () => {},
            lineHeight: 30
          }
        },
        itemStyle: {
          borderRadius: 10,
          borderColor: 'rgba(255,255,255,0)',
          borderWidth: 2
        },
        labelLine: {
          show: false
        },
        data: myData.data
      }
    ]
  };
  conf && myChart.setOption(conf);
  window.addEventListener('resize', myChart.resize);
};
</script>

<style></style>
