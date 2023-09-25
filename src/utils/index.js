/*
 * @Author: Jackie
 * @Date: 2023-09-15 20:45:23
 * @LastEditTime: 2023-09-25 10:29:16
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-echarts-demo/src/utils/index.js
 * @version:
 */
export function getMax(list) {
  if (list.length === 0) return 0;
  return Math.max(...list);
}

export function getMin(list) {
  if (list.length === 0) return 0;
  return Math.min(...list);
}

export function division(a, b) {
  if (b === 0) {
    return 0;
  }
  return a / b;
}

export function toPrecision(num, len) {
  let str = (+num).toFixed(len);
  if (!/^[\-0-9.]+$/g.test(str)) return '0';
  return str;
}
