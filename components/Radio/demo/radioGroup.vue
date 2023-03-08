<docs>
---
order: 7
title: 单选组合
---

## zh-CN

一组互斥的 Radio 配合使用。

</docs>
<template>
  <div>
    <j-radio-group v-model:value="value">
      <j-radio :value="1">A</j-radio>
      <j-radio :value="2">B</j-radio>
      <j-radio :value="3">C</j-radio>
      <j-radio :value="4">D</j-radio>
    </j-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    return {
      value,
    };
  },
});
</script>
