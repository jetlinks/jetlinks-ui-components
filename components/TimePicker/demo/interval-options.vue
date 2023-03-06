<docs>
---
order: 5
title: 步长选项
---

## zh-CN

可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。

</docs>

<template>
  <j-time-picker v-model:value="value" :minute-step="15" :second-step="10" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref();
    return {
      value,
    };
  },
});
</script>
