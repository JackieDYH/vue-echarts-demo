# vue3-echarts-demo 数据可视化图表组件测试库

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```js

theme = {
   // 全图默认背景
   // backgroundColor: 'rgba(0,0,0,0)',

   // 默认色板
   color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
           '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
           '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',
           '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'],

   // 图表标题
   title: {
       x: 'left',                 // 水平安放位置，默认为左对齐，可选为：
                                  // 'center' ¦ 'left' ¦ 'right'
                                  // ¦ {number}（x坐标，单位px）
       y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                  // 'top' ¦ 'bottom' ¦ 'center'
                                  // ¦ {number}（y坐标，单位px）
       textAlign: null          // 水平对齐方式，默认根据x设置自动调整
       backgroundColor: 'rgba(0,0,0,0)',
       borderColor: '#ccc',       // 标题边框颜色
       borderWidth: 0,            // 标题边框线宽，单位px，默认为0（无边框）
       padding: 5,                // 标题内边距，单位px，默认各方向内边距为5，
                                  // 接受数组分别设定上右下左边距，同css
       itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10，
       textStyle: {
           fontSize: 18,
           fontWeight: 'bolder',
           color: '#333'          // 主标题文字颜色
       },
       subtextStyle: {
           color: '#aaa'          // 副标题文字颜色
       }
   },

   title : {
            show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
            text: '主标题',//主标题文本，'\n'指定换行
            link:'',//主标题文本超链接,默认值true
            target: null,//指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
            subtext: '副标题',//副标题文本，'\n'指定换行
            sublink: '',//副标题文本超链接
            subtarget: null,//指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
            x:'center'//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'top',//垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
            textAlign: null,//水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
            backgroundColor: 'rgba(0,0,0,0)',//标题背景颜色，默认'rgba(0,0,0,0)'透明
            borderColor: '#ccc',//标题边框颜色,默认'#ccc'
            borderWidth: 0,//标题边框线宽，单位px，默认为0（无边框）
            padding: 5,//标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
            itemGap: 10,//主副标题纵向间隔，单位px，默认为10
            textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontFamily: 'Arial, Verdana, sans...',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
            subtextStyle: {//副标题文本样式{"color": "#aaa"}
                fontFamily: 'Arial, Verdana, sans...',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
            zlevel: 0,//一级层叠控制。默认0,每一个不同的zlevel将产生一个独立的canvas，相同zlevel的组件或图标将在同一个canvas上渲染。zlevel越高越靠顶层，canvas对象增多会消耗更多的内存和性能，并不建议设置过多的zlevel，大部分情况可以通过二级层叠控制z实现层叠控制。
            z: 6,//二级层叠控制，默认6,同一个canvas（相同zlevel）上z越高约靠顶层。
        },

   // 图例
   legend: {
       top:"30%",
       bottom: '5%',//图例距离整个容器底部的距离
       right: '5%',//图例距离整个容器底部的距离
       left: 'center',//图例距离整个容器左边
       orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                  // 'horizontal' ¦ 'vertical'
       x: 'center',               // 水平安放位置，默认为全图居中，可选为：
                                  // 'center' ¦ 'left' ¦ 'right'
                                  // ¦ {number}（x坐标，单位px）
       y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                  // 'top' ¦ 'bottom' ¦ 'center'
                                  // ¦ {number}（y坐标，单位px）
       backgroundColor: 'rgba(0,0,0,0)',
       borderColor: '#ccc',       // 图例边框颜色
       borderWidth: 0,            // 图例边框线宽，单位px，默认为0（无边框）
       padding: 5,                // 图例内边距，单位px，默认各方向内边距为5，
                                  // 接受数组分别设定上右下左边距，同css
       itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                  // 横向布局时为水平间隔，纵向布局时为纵向间隔
       con: "circle",//设置图例图标的形状为实心圆，这个不填，默认是矩形
       itemWidth: 20,             // 图例图形宽度
       itemHeight: 14,            // 图例图形高度
       textStyle: {
           color: '#333'          // 图例文字颜色
       },
        // data: ['完成', '较好', '一般', '较差', '无进展'],//图例文字内容
        // show: true, //是否显示
        // icon: "circle",//图例样式
        // top: "55%", // 组件离容器的距离
        // bottom:"20%", // 组件离容器的距离
        // left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
        // right: "5%",
        // left:"10%" // // 组件离容器的距离
        // padding: 5, // 图例内边距
        // itemWidth: 6, // 图例标记的图形宽度。
        // itemGap: 20, // 图例每项之间的间隔。
        // itemHeight: 14, // 图例标记的图形高度。
        // selectedMode: false, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
        // inactiveColor: "#fffddd", // 图例关闭时的颜色。
        // textStyle: {//图例的公用文本样式。
          // color: "#aabbcc", // 文字的颜色。
          // fontStyle: "normal", // 文字字体的风格。'italic'
          // fontWeight: "normal", // 文字字体的粗细。 'normal' 'bold' 'bolder' 'lighter' 100 | 200 | 300 | 400...
          // fontFamily: "sans-serif", // 文字的字体系列。
          // fontSize: 12, // 文字的字体大小。
          // lineHeight: 20, // 行高。
          // backgroundColor: "transparent", // 文字块背景色。
          // borderColor: "transparent", // 文字块边框颜色。
          // borderWidth: 0, // 文字块边框宽度。
          // borderRadius: 0, // 文字块的圆角。
          // padding: 0, // 文字块的内边距
          // shadowColor: "transparent", // 文字块的背景阴影颜色
          // shadowBlur: 0, // 文字块的背景阴影长度。
          // shadowOffsetX: 0, // 文字块的背景阴影 X 偏移。
          // shadowOffsetY: 0, // 文字块的背景阴影 Y 偏移。
          // // width: 50, // 文字块的宽度。 默认
          // // height: 40, // 文字块的高度 默认
          // textBorderColor: "transparent", // 文字本身的描边颜色。
          // textBorderWidth: 0, // 文字本身的描边宽度。
          // textShadowColor: "transparent", // 文字本身的阴影颜色。
          // textShadowBlur: 0, // 文字本身的阴影长度。
          // textShadowOffsetX: 0, // 文字本身的阴影 X 偏移。
          // textShadowOffsetY: 0, // 文字本身的阴影 Y 偏移。
        // }

   },

   // 值域
   dataRange: {
       orient: 'vertical',        // 布局方式，默认为垂直布局，可选为：
                                  // 'horizontal' ¦ 'vertical'
       x: 'left',                 // 水平安放位置，默认为全图左对齐，可选为：
                                  // 'center' ¦ 'left' ¦ 'right'
                                  // ¦ {number}（x坐标，单位px）
       y: 'bottom',               // 垂直安放位置，默认为全图底部，可选为：
                                  // 'top' ¦ 'bottom' ¦ 'center'
                                  // ¦ {number}（y坐标，单位px）
       backgroundColor: 'rgba(0,0,0,0)',
       borderColor: '#ccc',       // 值域边框颜色
       borderWidth: 0,            // 值域边框线宽，单位px，默认为0（无边框）
       padding: 5,                // 值域内边距，单位px，默认各方向内边距为5，
                                  // 接受数组分别设定上右下左边距，同css
       itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                  // 横向布局时为水平间隔，纵向布局时为纵向间隔
       itemWidth: 20,             // 值域图形宽度，线性渐变水平布局宽度为该值 * 10
       itemHeight: 14,            // 值域图形高度，线性渐变垂直布局高度为该值 * 10
       splitNumber: 5,            // 分割段数，默认为5，为0时为线性渐变
       color:['#1e90ff','#f0ffff'],//颜色
       //text:['高','低'],         // 文本，默认为数值文本
       textStyle: {
           color: '#333'          // 值域文字颜色
       }
   },

   toolbox: {
       orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                  // 'horizontal' ¦ 'vertical'
       x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
                                  // 'center' ¦ 'left' ¦ 'right'
                                  // ¦ {number}（x坐标，单位px）
       y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                  // 'top' ¦ 'bottom' ¦ 'center'
                                  // ¦ {number}（y坐标，单位px）
       color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
       backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
       borderColor: '#ccc',       // 工具箱边框颜色
       borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
       padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
                                  // 接受数组分别设定上右下左边距，同css
       itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                  // 横向布局时为水平间隔，纵向布局时为纵向间隔
       itemSize: 16,              // 工具箱图形宽度
       featureImageIcon : {},     // 自定义图片icon
       featureTitle : {
           mark : '辅助线开关',
           markUndo : '删除辅助线',
           markClear : '清空辅助线',
           dataZoom : '区域缩放',
           dataZoomReset : '区域缩放后退',
           dataView : '数据视图',
           lineChart : '折线图切换',
           barChart : '柱形图切换',
           restore : '还原',
           saveAsImage : '保存为图片'
       }
   },

   // 提示框
   tooltip: {
       trigger: 'item',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
       showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
       hideDelay: 100,            // 隐藏延迟，单位ms
       transitionDuration : 0.4,  // 动画变换时间，单位s
       backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
       borderColor: '#333',       // 提示边框颜色
       borderRadius: 4,           // 提示边框圆角，单位px，默认为4
       borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
       padding: 5,                // 提示内边距，单位px，默认各方向内边距为5，
                                  // 接受数组分别设定上右下左边距，同css
       axisPointer : {            // 坐标轴指示器，坐标轴触发有效
           type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
           lineStyle : {          // 直线指示器样式设置
               color: '#48b',
               width: 2,
               type: 'solid'
           },
           shadowStyle : {                       // 阴影指示器样式设置
               width: 'auto',                   // 阴影大小
               color: 'rgba(150,150,150,0.3)'  // 阴影颜色
           }
       },
       textStyle: {
           color: '#fff'
       }
   },

   // 区域缩放控制器
   dataZoom: {
       orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                  // 'horizontal' ¦ 'vertical'
       // x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：
                                  // {number}（x坐标，单位px）
       // y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：
                                  // {number}（y坐标，单位px）
       // width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配
       // height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配
       backgroundColor: 'rgba(0,0,0,0)',       // 背景颜色
       dataBackgroundColor: '#eee',            // 数据背景颜色
       fillerColor: 'rgba(144,197,237,0.2)',   // 填充颜色
       handleColor: 'rgba(70,130,180,0.8)'     // 手柄颜色
   },

   // 网格
   grid: {
       x: 80,
       y: 60,
       x2: 80,
       y2: 60,
       // width: {totalWidth} - x - x2,
       // height: {totalHeight} - y - y2,
       backgroundColor: 'rgba(0,0,0,0)',
       borderWidth: 1,
       borderColor: '#ccc'
   },

   // 类目轴
   categoryAxis: {
       position: 'bottom',    // 位置
       nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
       boundaryGap: true,     // 类目起始和结束两端空白策略
       axisLine: {            // 坐标轴线
           show: true,        // 默认显示，属性show控制显示与否
           lineStyle: {       // 属性lineStyle控制线条样式
               color: '#48b',
               width: 2,
               type: 'solid'
           }
       },
       axisTick: {            // 坐标轴小标记
           show: true,       // 属性show控制显示与否，默认不显示
           interval: 'auto',
           // onGap: null,
           inside : false,    // 控制小标记是否在grid里
           length :5,         // 属性length控制线长
           lineStyle: {       // 属性lineStyle控制线条样式
               color: '#333',
               width: 1
           }
       },
       axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
           show: true,
           interval: 'auto',
           rotate: 0,
           margin: 8,
           // formatter: null,
           textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
               color: '#333'
           }
       },
       splitLine: {           // 分隔线
           show: true,        // 默认显示，属性show控制显示与否
           // onGap: null,
           lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
               color: ['#ccc'],
               width: 1,
               type: 'solid'
           }
       },
       splitArea: {           // 分隔区域
           show: false,       // 默认不显示，属性show控制显示与否
           // onGap: null,
           areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
               color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
           }
       }
   },

   // 数值型坐标轴默认参数
   valueAxis: {
       position: 'left',      // 位置
       nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
       nameTextStyle: {},     // 坐标轴文字样式，默认取全局样式
       boundaryGap: [0, 0],   // 数值起始和结束两端空白策略
       splitNumber: 5,        // 分割段数，默认为5
       axisLine: {            // 坐标轴线
           show: true,        // 默认显示，属性show控制显示与否
           lineStyle: {       // 属性lineStyle控制线条样式
               color: '#48b',
               width: 2,
               type: 'solid'
           }
       },
       axisTick: {            // 坐标轴小标记
           show: false,       // 属性show控制显示与否，默认不显示
           inside : false,    // 控制小标记是否在grid里
           length :5,         // 属性length控制线长
           lineStyle: {       // 属性lineStyle控制线条样式
               color: '#333',
               width: 1
           }
       },
       axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
           show: true,
           rotate: 0,
           margin: 8,
           // formatter: null,
           textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
               color: '#333'
           }
       },
       splitLine: {           // 分隔线
           show: true,        // 默认显示，属性show控制显示与否
           lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
               color: ['#ccc'],
               width: 1,
               type: 'solid'
           }
       },
       splitArea: {           // 分隔区域
           show: false,       // 默认不显示，属性show控制显示与否
           areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
               color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
           }
       }
   },

   polar : {
       center : ['50%', '50%'],    // 默认全局居中
       radius : '75%',
       startAngle : 90,
       splitNumber : 5,
       name : {
           show: true,
           textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
               color: '#333'
           }
       },
       axisLine: {            // 坐标轴线
           show: true,        // 默认显示，属性show控制显示与否
           lineStyle: {       // 属性lineStyle控制线条样式
               color: '#ccc',
               width: 1,
               type: 'solid'
           }
       },
       axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
           show: false,
           textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
               color: '#333'
           }
       },
       splitArea : {
           show : true,
           areaStyle : {
               color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
           }
       },
       splitLine : {
           show : true,
           lineStyle : {
               width : 1,
               color : '#ccc'
           }
       }
   },

   // 柱形图默认参数
   bar: {
       barMinHeight: 0,          // 最小高度改为0
       // barWidth: null,        // 默认自适应
       barGap: '30%',            // 柱间距离，默认为柱形宽度的30%，可设固定值
       barCategoryGap : '20%',   // 类目间柱形距离，默认为类目间距的20%，可设固定值
       itemStyle: {
           normal: {
               // color: '各异',
               barBorderColor: '#fff',       // 柱条边线
               barBorderRadius: 0,           // 柱条边线圆角，单位px，默认为0
               barBorderWidth: 1,            // 柱条边线线宽，单位px，默认为1
               label: {
                   show: false
                   // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                   //           'inside'|'left'|'right'|'top'|'bottom'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               }
           },
           emphasis: {
               // color: '各异',
               barBorderColor: 'rgba(0,0,0,0)',   // 柱条边线
               barBorderRadius: 0,                // 柱条边线圆角，单位px，默认为0
               barBorderWidth: 1,                 // 柱条边线线宽，单位px，默认为1
               label: {
                   show: false
                   // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                   //           'inside'|'left'|'right'|'top'|'bottom'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               }
           }
       }
   },

   // 折线图默认参数
   line: {
       itemStyle: {
           normal: {
               // color: 各异,
               label: {
                   show: false
                   // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                   //           'inside'|'left'|'right'|'top'|'bottom'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               },
               lineStyle: {
                   width: 2,
                   type: 'solid',
                   shadowColor : 'rgba(0,0,0,0)', //默认透明
                   shadowBlur: 5,
                   shadowOffsetX: 3,
                   shadowOffsetY: 3
               }
           },
           emphasis: {
               // color: 各异,
               label: {
                   show: false
                   // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                   //           'inside'|'left'|'right'|'top'|'bottom'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               }
           }
       },
       //smooth : false,
       //symbol: null,         // 拐点图形类型
       symbolSize: 2,          // 拐点图形大小
       //symbolRotate : null,  // 拐点图形旋转控制
       showAllSymbol: false    // 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）
   },

   // K线图默认参数
   k: {
       // barWidth : null          // 默认自适应
       // barMaxWidth : null       // 默认自适应
       itemStyle: {
           normal: {
               color: '#fff',          // 阳线填充颜色
               color0: '#00aa11',      // 阴线填充颜色
               lineStyle: {
                   width: 1,
                   color: '#ff3200',   // 阳线边框颜色
                   color0: '#00aa11'   // 阴线边框颜色
               }
           },
           emphasis: {
               // color: 各异,
               // color0: 各异
           }
       }
   },

   // 散点图默认参数
   scatter: {
       //symbol: null,      // 图形类型
       symbolSize: 4,       // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
       //symbolRotate : null,  // 图形旋转控制
       large: false,        // 大规模散点图
       largeThreshold: 2000,// 大规模阀值，large为true且数据量>largeThreshold才启用大规模模式
       itemStyle: {
           normal: {
               // color: 各异,
               label: {
                   show: false
                   // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                   //           'inside'|'left'|'right'|'top'|'bottom'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               }
           },
           emphasis: {
               // color: '各异'
               label: {
                   show: false
                   // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                   //           'inside'|'left'|'right'|'top'|'bottom'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               }
           }
       }
   },

   // 雷达图默认参数
   radar : {
       itemStyle: {
           normal: {
               // color: 各异,
               label: {
                   show: false
               },
               lineStyle: {
                   width: 2,
                   type: 'solid'
               }
           },
           emphasis: {
               // color: 各异,
               label: {
                   show: false
               }
           }
       },
       //symbol: null,         // 拐点图形类型
       symbolSize: 2           // 可计算特性参数，空数据拖拽提示图形大小
       //symbolRotate : null,  // 图形旋转控制
   },

   // 饼图默认参数
   pie: {
       center : ['50%', '50%'],    // 默认全局居中
       radius : [0, '75%'],
       clockWise : false,          // 默认逆时针
       startAngle: 90,
       minAngle: 0,                // 最小角度改为0
       selectedOffset: 10,         // 选中是扇区偏移量
       itemStyle: {
           normal: {
               // color: 各异,
               borderColor: '#fff',
               borderWidth: 1,
               label: {
                   show: true,
                   position: 'outer'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               },
               labelLine: {
                   show: true,
                   length: 20,
                   lineStyle: {
                       // color: 各异,
                       width: 1,
                       type: 'solid'
                   }
               }
           },
           emphasis: {
               // color: 各异,
               borderColor: 'rgba(0,0,0,0)',
               borderWidth: 1,
               label: {
                   show: false
                   // position: 'outer'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               },
               labelLine: {
                   show: false,
                   length: 20,
                   lineStyle: {
                       // color: 各异,
                       width: 1,
                       type: 'solid'
                   }
               }
           }
       }
   },

   map: {
       mapType: 'china',   // 各省的mapType暂时都用中文
       mapLocation: {
           x : 'center',
           y : 'center'
           // width    // 自适应
           // height   // 自适应
       },
       showLegendSymbol : true,       // 显示图例颜色标识（系列标识的小圆点），存在legend时生效
       itemStyle: {
           normal: {
               // color: 各异,
               borderColor: '#fff',
               borderWidth: 1,
               areaStyle: {
                   color: '#ccc'//rgba(135,206,250,0.8)
               },
               label: {
                   show: false,
                   textStyle: {
                       color: 'rgba(139,69,19,1)'
                   }
               }
           },
           emphasis: {                 // 也是选中样式
               // color: 各异,
               borderColor: 'rgba(0,0,0,0)',
               borderWidth: 1,
               areaStyle: {
                   color: 'rgba(255,215,0,0.8)'
               },
               label: {
                   show: false,
                   textStyle: {
                       color: 'rgba(139,69,19,1)'
                   }
               }
           }
       }
   },

   force : {
       // 数据map到圆的半径的最小值和最大值
       minRadius : 10,
       maxRadius : 20,
       density : 1.0,
       attractiveness : 1.0,
       // 初始化的随机大小位置
       initSize : 300,
       // 向心力因子，越大向心力越大
       centripetal : 1,
       // 冷却因子
       coolDown : 0.99,
       // 分类里如果有样式会覆盖节点默认样式
       itemStyle: {
           normal: {
               // color: 各异,
               label: {
                   show: false
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               },
               nodeStyle : {
                   brushType : 'both',
                   color : '#f08c2e',
                   strokeColor : '#5182ab'
               },
               linkStyle : {
                   strokeColor : '#5182ab'
               }
           },
           emphasis: {
               // color: 各异,
               label: {
                   show: false
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               },
               nodeStyle : {},
               linkStyle : {}
           }
       }
   },

   chord : {
       radius : ['65%', '75%'],
       center : ['50%', '50%'],
       padding : 2,
       sort : 'none', // can be 'none', 'ascending', 'descending'
       sortSub : 'none', // can be 'none', 'ascending', 'descending'
       startAngle : 90,
       clockWise : false,
       showScale : false,
       showScaleText : false,
       itemStyle : {
           normal : {
               label : {
                   show : true
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               },
               lineStyle : {
                   width : 0,
                   color : '#000'
               },
               chordStyle : {
                   lineStyle : {
                       width : 1,
                       color : '#666'
                   }
               }
           },
           emphasis : {
               lineStyle : {
                   width : 0,
                   color : '#000'
               },
               chordStyle : {
                   lineStyle : {
                       width : 2,
                       color : '#333'
                   }
               }
           }
       }
   },

   island: {
       r: 15,
       calculateStep: 0.1  // 滚轮可计算步长 0.1 = 10%
   },

   markPoint : {
       symbol: 'pin',         // 标注类型
       symbolSize: 10,        // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
       //symbolRotate : null, // 标注旋转控制
       itemStyle: {
           normal: {
               // color: 各异，
               // borderColor: 各异,     // 标注边线颜色，优先于color
               borderWidth: 2,            // 标注边线线宽，单位px，默认为1
               label: {
                   show: true,
                   position: 'inside' // 可选为'left'|'right'|'top'|'bottom'
                   // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
               }
           },
           emphasis: {
               // color: 各异
               label: {
                   show: true
                   // position: 'inside'  // 'left'|'right'|'top'|'bottom'
                   // textStyle: null     // 默认使用全局文本样式，详见TEXTSTYLE
               }
           }
       }
   },

   markLine : {
       // 标线起始和结束的symbol介绍类型，如果都一样，可以直接传string
       symbol: ['circle', 'arrow'],
       // 标线起始和结束的symbol大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
       symbolSize: [2, 4],
       // 标线起始和结束的symbol旋转控制
       //symbolRotate : null,
       itemStyle: {
           normal: {
               // color: 各异,           // 标线主色，线色，symbol主色
               // borderColor: 随color,     // 标线symbol边框颜色，优先于color
               borderWidth: 2,          // 标线symbol边框线宽，单位px，默认为2
               label: {
                   show: false,
                   // 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'
                   position: 'inside',
                   textStyle: {         // 默认使用全局文本样式，详见TEXTSTYLE
                       color: '#333'
                   }
               },
               lineStyle: {
                   // color: 随borderColor, // 主色，线色，优先级高于borderColor和color
                   // width: 随borderWidth, // 优先于borderWidth
                   type: 'solid',
                   shadowColor : 'rgba(0,0,0,0)', //默认透明
                   shadowBlur: 5,
                   shadowOffsetX: 3,
                   shadowOffsetY: 3
               }
           },
           emphasis: {
               // color: 各异
               label: {
                   show: false
                   // position: 'inside' // 'left'|'right'|'top'|'bottom'
                   // textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE
               },
               lineStyle : {}
           }
       }
   },

   textStyle: {
       decoration: 'none',
       fontFamily: 'Arial, Verdana, sans-serif',
       fontFamily2: '微软雅黑',    // IE8- 字体模糊并且不支持不同字体混排，额外指定一份
       fontSize: 12,
       fontStyle: 'normal',
       fontWeight: 'normal'
   },

   // 默认标志图形类型列表
   symbolList : [
     'circle', 'rectangle', 'triangle', 'diamond',
     'emptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond'
   ],
   loadingText : 'Loading...',
   // 可计算特性配置，孤岛，提示颜色
   calculable: false,              // 默认关闭可计算特性
   calculableColor: 'rgba(255,165,0,0.6)',       // 拖拽提示边框颜色
   calculableHolderColor: '#ccc', // 可计算占位提示颜色
   nameConnector: ' & ',
   valueConnector: ' : ',
   animation: true,
   animationThreshold: 2500,       // 动画元素阀值，产生的图形原素超过2500不出动画
   addDataAnimation: true,         // 动态数据接口是否开启动画效果
   animationDuration: 2000,
   animationEasing: 'ExponentialOut'    //BounceOut
}
```
