<template>
  <div>
    <div class="doc-header">
      <div
        v-for="item in menus"
        :key="item.path"
        class="menu-item"
        :class="{ active: item.path === route.path }"
        @click="gotoMenuPage(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const menus = ref([
  {
    title: '格式检测简报',
    path: '/doc/report'
  },
  {
    title: '批注与校正',
    path: '/doc/correct'
  }
])
const router = useRouter()
const route = useRoute()
onMounted(() => {
  //
})
const gotoMenuPage = (item) => {
  router.push({
    path: item.path
  })
}
</script>

<style lang="less" scoped>
.doc-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: #005ce5;
    z-index: 999;
}
.menu-item {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    min-width: 100px;
    text-align: center;
    margin: 0 20px;
    padding: 10px 0;
    height: auto;
    cursor: pointer;
    &.active {
        color: #f8f8f8;
        font-size: 20px;
        border-bottom: 3px solid #f8f8f8;
    }
}
</style>
