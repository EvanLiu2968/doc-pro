<template>
  <div>
    <div class="side-box">
      <div class="side-box__title">操作测试</div>
      <el-button type="primary" @click="handleEditLateX">LaTeX公式编辑</el-button>
    </div>
    <div class="side-box" style="height: 1000px">
      <div class="side-box__title">批注说明</div>
    </div>
    <LatexEditor ref="latexEditorDialog"></LatexEditor>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useEditorStore } from '@/store/modules/editor'
import LatexEditor from '@/components/latex-editor/index.vue'

const latexEditorDialog = ref()

const editorStore = useEditorStore()
const editorMode = computed(() => {
  return editorStore.editorMode
})

const handleEditLateX = () => {
  latexEditorDialog.value.show()
}
</script>

<style lang="less" scoped>
.side-box {
  padding: 20px;
  background: #fff;
  margin-bottom: 8px;
  min-height: 100px;
  text-align: left;
  font-size: 14px;
}
.side-box__title {
  border-left: 3px solid #005ce5;
  padding-left: 5px;
  font-size: 16px;
  line-height: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
