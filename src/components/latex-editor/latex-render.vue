<template>
  <div class="latex-container" ref="latexNode"></div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import 'mathjax/es5/tex-svg'
// import loadScript from '@/utils/load-script'

const props = defineProps({
  latex: {
    type: String,
    default: '', // pre | add
  },
  options: {
    type: Object,
    default: {}
  }
})

const latexNode = ref()

const renderLatex = (latex) => {
  if (!MathJax) return
  if (!latex) {
    return
  }
  latexNode.value.innerHTML = ''
  MathJax.texReset();
  const options = Object.assign({
    containerWidth: 560,
    display: false,
    em: 14,
    ex: 7.566666666666666,
    family: "",
    format: "TeX",
    lineWidth: 1000000,
    scale: 1
  }, props.options)
  MathJax.tex2svgPromise(latex, options).then((node) => {
    //
    //  The promise returns the typeset node, which we add to the output
    //  Then update the document to include the adjusted CSS for the
    //    content of the new equation.
    //
    latexNode.value.appendChild(node)
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  }).catch((err) => {
    //
    //  If there was an error, put the message into the output instead
    //
    // latexNode.value.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
  })
}

watch(
  () => props.latex,
  () => {
    renderLatex(props.latex)
  },
  {
    // immediate: true
  }
)

onMounted(() => {
  // loadScript('https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-svg.js', {}, () => {
  //   console.log(MathJax)
  //   renderLatex()
  // })
  console.log(MathJax)
  renderLatex(props.latex)
})
</script>
<style lang="less">
.latex-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
