<template>
  <div>
    <div class="doc-header">
      report
    </div>
  </div>
</template>

<script setup>
import { getSchoolList } from '@/api/report'
import { onMounted } from 'vue'

onMounted(() => {
  // getSchoolList().then(res => {
  //   console.log(res)
  // })
})
</script>

<style lang="less" scoped>
.doc-header {
    height: 60px;
}
</style>
