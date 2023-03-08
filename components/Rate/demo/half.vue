<docs>
---
order: 1
title: 半星
---

## zh-CN

支持选中半星。

</docs>
<template>
  <j-rate v-model:value="value" allow-half />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(2.5);
    return {
      value,
    };
  },
});
</script>
