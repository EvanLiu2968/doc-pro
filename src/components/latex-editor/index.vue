<template>
  <el-dialog
    title="编辑LaTeX公式"
    v-model="dialogVisible"
  >
  <div>
    <div class="latex-title">LaTeX表达式：</div>
    <el-input type="textarea" class="latex-input" v-model="latexStr" :rows="6" maxlength="600" show-word-limit/>
    <div class="latex-title">公式渲染结果：</div>
    <div class="latex-preview">
      <LatexRender :latex="latexStr"></LatexRender>
    </div>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </template>
</el-dialog>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import LatexRender from './latex-render.vue'

const emit = defineEmits(['confirm']);

const dialogVisible = ref(false)
const latexStr = ref('f(x) = {{{a_0}} \over 2} + \sum\limits_{n = 1}^\infty {({a_n}\cos {nx} + {b_n}\sin {nx})}')


const show = () => {
  dialogVisible.value = true
}
const hide = () => {
  dialogVisible.value = false
}

const handleConfirm = () => {
  emit('confirm', '')
}

defineExpose({
  show,
  hide
})
</script>
<style lang="less">
.latex-title {
  margin-top: 20px;
  margin-bottom: 10px;
}
.latex-preview {
  width: 100%;
  height: 120px;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>
