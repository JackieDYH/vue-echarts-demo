<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-25 10:06:29
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-echarts-demo/src/App.vue
 * @version: 
-->
<template>
  <nav>
    <router-link to="/">PIE</router-link> |
    <router-link to="/about">LINE</router-link> |
    <router-link to="/bar">BAR</router-link> |
    <router-link to="/chart">chart</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
@import '@/assets/styles/reset.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
