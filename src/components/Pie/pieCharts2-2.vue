<!--
 * @Author: Jackie
 * @Date: 2023-06-29 14:01:58
 * @LastEditTime: 2023-07-07 13:59:22
 * @LastEditors: Jackie
 * @Description: pie圆形图标-中间显示对应数据-鼠标
 * @FilePath: /vue-echarts-demo/src/components/Pie/pieCharts2-2.vue
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
  myChart.setOption({
    title: {
      text: '',
      subtext: ''
    }
  });
};
//显示title
const showTitle = (e) => {
  myChart.setOption({
    title: {
      text: '总数量',
      // "总数量\n" +
      // String(
      //   myData.data.reduce((sum, item, index, array) => {
      //     return sum + item.value;
      //   }, 0)
      // ),
      subtext: myData.data.reduce((sum, item, index, array) => {
        return sum + item.value;
      }, 0)
      // left: "center",
      // top: "center",
    }
  });
};

let myChart = '';
const myEcharts = ref(null);
// 把配置和数据
const myData = {
  data: [
    { value: 335, name: '访问' },
    { value: 310, name: '营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '广告' },
    { value: 1548, name: '搜索引擎' }
  ]
};

const initChart = () => {
  echarts.init(myEcharts.value).dispose();
  myChart = echarts.init(myEcharts.value);

  // 查找最长字符串
  // const maxLength = data.reduce(
  //   (max, str) => Math.max(max, str.name.length),
  //   0
  // );

  // 给饼图添加事件
  // 当区域高亮时隐藏title，比如当鼠标移动到legend上时
  myChart.on('highlight', hideTitle);
  // 当鼠标悬浮到区域时隐藏title
  myChart.on('mouseover', hideTitle);
  // 当鼠标离开区域时显示title
  myChart.on('mouseout', showTitle);
  // 当区域取消高亮时显示title，比如当鼠标从legend上离开时
  myChart.on('downplay', showTitle);

  // 设置option
  const conf = {
    title: {
      text: '总数量',
      // "总数量\n" +
      // String(
      //   myData.data.reduce((sum, item, index, array) => {
      //     return sum + item.value;
      //   }, 0)
      // ),
      subtext: myData.data.reduce((sum, item, index, array) => {
        return sum + item.value;
      }, 0),
      // left: "center",
      // top: "center",
      // top: "180px",
      // left: "295px",
      x: '34%',
      y: '43%',
      textAlign: 'center',
      textStyle: {
        color: '#000',
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: 30
      },
      subtextStyle: {
        color: '#000',
        fontSize: '24px',
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {d}%'
    },
    // graphic: {
    //   type: "text",
    //   left: "center",
    //   //left: '37%',
    //   top: "center",
    //   style: {
    //     text:
    //       "合计数据" + //圆饼中心显示数据，这里是显示得总数
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
    //     fontSize: 24,
    //     fontWeight: "bold",
    //   },
    // },
    legend: {
      // type: "scroll",
      show: true,
      // top: "28%",
      y: 'center',
      left: 'right',
      icon: 'circle', //控制形状类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
      // selectedMode: false, // 控制是否可以通过点击图例改变系列的显示状态
      orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
      // x: "right", // 水平安放位置，默认为全图居中，可选为：
      // 'center' ¦ 'left' ¦ 'right'
      // ¦ {number}（x坐标，单位px）
      // y: "center", // 垂直安放位置，默认为全图顶端，可选为：
      // 'top' ¦ 'bottom' ¦ 'center'
      // ¦ {number}（y坐标，单位px）
      padding: [0, 20, 0, 10],
      align: 'left', //图例文字在右边
      itemGap: 20, // 图例间隙
      // itemWidth: 10, // 设置宽度
      // itemHeight: 10, // 设置高度

      textStyle: {
        //图例文字的样式
        fontWeight: '700',
        color: '#000',
        fontSize: '16px',
        // 文字块背景色，一定要加上，否则对齐不会生效
        backgroundColor: 'transparent',
        rich: {
          // 下方数据配置部分要 {a|name}
          orgname: {
            fontSize: '16px',
            width: 70,
            color: '#000',
            fontWeight: '700'
          },
          count: {
            fontSize: '16px',
            verticalAlign: 'top', //top、middle、bottom
            align: 'center',
            color: '#000',
            padding: [0, 0, 0, 15],
            fontWeight: '500'
          }
        }
        // lineHeight: 14,
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
        return `{orgname|${name}}{count|${num}}`;
        // return `${name.padEnd(maxLength + 2, ' ')}: ${num}`;
      }
    },
    series: [
      {
        name: '分类统计',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['35%', '50%'], //偏移
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        // 鼠标悬浮时中心位置显示对应区域的信息
        emphasis: {
          label: {
            show: true,
            formatter: `{b}\n{c}`,
            fontSize: '24px', //24 直接写有放大的效果
            fontWeight: 'bold',
            // color: () => {},
            lineHeight: 30
          }
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
