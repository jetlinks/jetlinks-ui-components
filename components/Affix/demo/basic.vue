<docs>
---
order: 0
title: 基本
---

## zh-CN

最简单的用法。

</docs>

<template>
  <j-affix :offset-top="top">
    <j-button type="primary" @click="top += 10">Affix top</j-button>
  </j-affix>
  <br />
  <j-affix :offset-bottom="bottom">
    <j-button type="primary" @click="bottom += 10">Affix bottom</j-button>
  </j-affix>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const top = ref<number>(10);
    const bottom = ref<number>(10);
    return {
      top,
      bottom,
    };
  },
});
</script>
