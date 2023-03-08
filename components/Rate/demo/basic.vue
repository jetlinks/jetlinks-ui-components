<docs>
---
order: 0
title: 基本用法
---

## zh-CN

最简单的用法。

</docs>
<template>
  <j-rate v-model:value="value" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(2);
    return {
      value,
    };
  },
});
</script>
