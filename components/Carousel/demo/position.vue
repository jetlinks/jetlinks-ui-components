<docs>
---
order: 1
title: 位置
---

## zh-CN

位置有 4 个方向。

## en-US

There are 4 position options available.
</docs>

<template>
  <j-radio-group v-model:value="dotPosition" style="margin-bottom: 8px">
    <j-radio-button value="top">Top</j-radio-button>
    <j-radio-button value="bottom">Bottom</j-radio-button>
    <j-radio-button value="left">Left</j-radio-button>
    <j-radio-button value="right">Right</j-radio-button>
  </j-radio-group>
  <j-carousel :dot-position="dotPosition">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </j-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { CarouselProps } from 'ant-design-vue';

export default defineComponent({
  setup() {
    return {
      dotPosition: ref<CarouselProps['dotPosition']>('top'),
    };
  },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
