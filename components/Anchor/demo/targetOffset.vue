<docs>
---
order: 4
title: 设置锚点滚动偏移量
---

## zh-CN

锚点目标滚动到屏幕正中间。

</docs>

<template>
  <j-anchor :target-offset="targetOffset">
    <j-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <j-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <j-anchor-link href="#API" title="API">
      <j-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <j-anchor-link href="#Link-Props" title="Link Props" />
    </j-anchor-link>
  </j-anchor>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const targetOffset = ref<number | undefined>(undefined);
    onMounted(() => {
      targetOffset.value = window.innerHeight / 2;
    });
    return {
      targetOffset,
    };
  },
});
</script>
