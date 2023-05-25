<template>
  <div class="doc-renderer">
    <div class="page-container">
      <DocPage :page="pages[activePageOne]"></DocPage>
    </div>
    <div class="page-container">
      <DocPage :page="pages[activePageTwo]"></DocPage>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import DocPage from './doc-page.vue'

const pages = ref([
  {
    elementList: [
      {}
    ]
  }
])
const activePageOne = ref(0)
const activePageTwo = ref(0)
</script>
<style lang="less">
.doc-renderer {
  position: relative;
}
.page-container {
  margin-bottom: 20px;
  // position: absolute;
  background: rgb(255, 255, 255);
  box-shadow: rgba(158, 161, 165, 0.4) 0px 2px 12px 0px;
  // left: 292px;
  // top: 3444px;
  width: 794px;
  height: 1124px;
}
</style>