import { defineStore } from 'pinia'

const EditorMode = {
  READONLY: 'readonly',
  EDIT: 'edit'
}

export const useEditorStore = defineStore({
  id: 'editor',
  state: () => {
    return {
      editorMode: EditorMode.READONLY
    }
  },
  actions: {
    setEditorMode(editorMode) {
      this.editorMode = editorMode
    }
  }
})
