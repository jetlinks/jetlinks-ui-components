<docs>
---
order: 0
title: 基本用法
---

## zh-CN

最简单的用法。

</docs>
<template>
  <j-radio v-model:checked="checked">Radio</j-radio>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref<boolean>(false);
    return {
      checked,
    };
  },
});
</script>
