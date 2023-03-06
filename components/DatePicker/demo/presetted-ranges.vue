<docs>
---
order: 6
title: 预设范围
---

## zh-CN

可以预设常用的日期范围以提高用户体验。

## en-US

We can set presetted ranges to RangePicker to improve user experience.

</docs>

<template>
  <j-space direction="vertical" :size="12">
    <j-range-picker v-model:value="value1" :ranges="ranges" />
    <j-range-picker
      v-model:value="value2"
      style="width: 400px"
      :ranges="ranges"
      show-time
      format="YYYY/MM/DD HH:mm:ss"
    />
  </j-space>
</template>
<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';
type RangeValue = [Dayjs, Dayjs];
export default defineComponent({
  setup() {
    return {
      value1: ref<RangeValue>(),
      value2: ref<RangeValue>(),
      ranges: {
        Today: [dayjs(), dayjs()] as RangeValue,
        'This Month': [dayjs(), dayjs().endOf('month')] as RangeValue,
      },
    };
  },
});
</script>
