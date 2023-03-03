<docs>
---
order: 3
title: 禁用
---

## zh-CN

选择框的不可用状态。

</docs>

<template>
  <j-space direction="vertical">
    <j-date-picker v-model:value="value1" />
    <j-date-picker v-model:value="value2" disabled picker="month" />
    <j-range-picker v-model:value="value3" disabled />
    <j-range-picker v-model:value="value4" :disabled="[false, true]" />
  </j-space>
</template>
<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const dateFormat = 'YYYY-MM-DD';
    return {
      value1: ref<Dayjs>(dayjs('2015-06-06', dateFormat)),
      value2: ref<Dayjs>(dayjs('2015-06', 'YYYY-MM')),
      value3: ref<[Dayjs, Dayjs]>([
        dayjs('2015-06-06', dateFormat),
        dayjs('2015-06-06', dateFormat),
      ]),
      value4: ref<[Dayjs, Dayjs]>([
        dayjs('2019-09-03', dateFormat),
        dayjs('2019-11-22', dateFormat),
      ]),
    };
  },
});
</script>
