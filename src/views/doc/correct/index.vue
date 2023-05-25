<template>
  <div class="correct-container">
    <div class="doc-container">
      <div class="doc-editor">
        <DocRenderer></DocRenderer>
      </div>
    </div>
    <div class="doc-side-right">
      <SideRight/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DocRenderer from '@/components/doc-renderer/index.vue'
import SideRight from './side-right.vue'
import { useEditorStore } from '@/store/modules/editor'

const editorStore = useEditorStore()

onMounted(() => {
  // 初始化
})
</script>

<style lang="less">
.correct-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 80px);
    background: #f5f6f7;
    display: flex;
    &.is-editing {
      padding-top: 60px;
      height: calc(100vh - 140px);
    }
    ::-webkit-scrollbar {
        height: 16px;
        width: 16px;
        overflow: visible;
    }

    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ddd;
        background-clip: padding-box;
        border: 4px solid #f2f4f7;
        border-radius: 8px;
        min-height: 24px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #c9c9c9;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        background-clip: padding-box;
    }
}
.doc-container {
    position: relative;
    margin: 20px auto;
    width: 810px;
    height: calc(100vh - 120px);
    overflow-y: auto;
    &.is-editing {
        height: calc(100vh - 180px);
    }
}
.doc-side-right {
    flex: 1;
    max-width: 500px;
    margin: 20px 0;
    height: calc(100vh - 120px);
    overflow-y: auto;
    &.is-editing {
        height: calc(100vh - 180px);
    }
}
.doc-editor {
    position: relative;
}
.ce-page-container canvas {
    box-shadow: rgb(158 161 165 / 40%) 0px 2px 12px 0px;
}
.ce-contextmenu-signature {
    background-image: url('~@/assets/editor/signature.svg');
}
</style>
