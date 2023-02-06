<template>
  <thumb :move="moveX" :ratio="ratioX" :size="width" :always="always" />
  <thumb
      :move="moveY"
      :ratio="ratioY"
      :size="height"
      vertical
      :always="always"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { GAP } from '../util/scrollbar'
import Thumb from './thumb.vue'
import { barProps } from './barUtil'
const props = defineProps(barProps)
const moveX = ref(0)
const moveY = ref(0)
const handleScroll = (wrap: HTMLDivElement) => {
  if (wrap) {
    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP
    moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY
    moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX
  }
}
defineExpose({
  handleScroll,
})
</script>
<style>
::v-deep(.el-scrollbar) {
  overflow: hidden;
  position: relative;
  height: 100%;
}
::v-deep(.el-scrollbar__wrap) {
  overflow: auto;
  height: 100%;
}
::v-deep(.el-scrollbar__bar) {
  position: absolute;
  right: 2px;
  bottom: 2px;
  z-index: 1;
  border-radius: 4px;
}
::v-deep(.el-scrollbar__bar.is-horizontal) {
  height: 6px;
  left: 2px;
}
::v-deep(.el-scrollbar__bar.is-vertical) {
  width: 6px;
  top: 2px;
}

::v-deep(.el-scrollbar__thumb) {
  position: relative;
  display: block;
  width: 0;
  height: 0;
  cursor: pointer;
  border-radius: inherit;
  background-color: #000;
  /*transition: #000;*/
  /*opacity: var(--el-scrollbar-opacity,.3);*/
}
</style>