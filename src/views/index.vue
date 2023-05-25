<template>
  <div class="title">{{ title }}</div>
  <router-link to="/doc/report">格式检测</router-link>
</template>
<script setup>
import { ref } from 'vue'

const title = ref('首页')
</script>
<style lang="less">
.title {
  margin: 20px auto;
  text-align: center;
}
</style>
