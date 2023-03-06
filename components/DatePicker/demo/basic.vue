<docs>
---
order: 0
title: 基本用法
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

</docs>

<template>
  <j-space direction="vertical" :size="12">
    <j-date-picker v-model:value="value1" />
    <j-date-picker v-model:value="value2" picker="week" />
    <j-date-picker v-model:value="value3" picker="month" />
    <j-date-picker v-model:value="value4" picker="quarter" />
    <j-date-picker v-model:value="value5" picker="year" />
  </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
export default defineComponent({
  setup() {
    return {
      value1: ref<Dayjs>(),
      value2: ref<Dayjs>(),
      value3: ref<Dayjs>(),
      value4: ref<Dayjs>(),
      value5: ref<Dayjs>(),
    };
  },
});
</script>
