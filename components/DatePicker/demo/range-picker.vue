<docs>
---
order: 1
title: 范围选择器
---

## zh-CN

通过设置 `picker` 属性，指定范围选择器类型。

</docs>

<template>
  <j-space direction="vertical" :size="12">
    <j-range-picker v-model:value="value1" />
    <j-range-picker v-model:value="value2" show-time />
    <j-range-picker v-model:value="value3" picker="week" />
    <j-range-picker v-model:value="value4" picker="month" />
    <j-range-picker v-model:value="value5" picker="year" />
  </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Dayjs } from 'dayjs';
type RangeValue = [Dayjs, Dayjs];
export default defineComponent({
  setup() {
    return {
      value1: ref<RangeValue>(),
      value2: ref<RangeValue>(),
      value3: ref<RangeValue>(),
      value4: ref<RangeValue>(),
      value5: ref<RangeValue>(),
    };
  },
});
</script>
