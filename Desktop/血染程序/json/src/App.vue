<template>
  <Layout></Layout>
</template>
<script setup lang="ts">
import Layout from "./layout/layout.vue";
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body::before {
  content: "";
  background-image: url("https://picgogogogo.oss-cn-guangzhou.aliyuncs.com/imgxiaogong/1682908105373.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  
  opacity: 0.2;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
body {
  height: 100vh;
}
</style>
