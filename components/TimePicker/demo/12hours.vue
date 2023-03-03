<docs>
---
order: 2
title: 12 小时制
---

## zh-CN

12 小时制的时间选择器，默认的 format 为 `h:mm:ss a`。

</docs>

<template>
  <j-space direction="vertical">
    <j-time-picker v-model:value="value" use12-hours />
    <j-time-picker v-model:value="value" use12-hours format="h:mm:ss A" style="width: 140px" />
    <j-time-picker v-model:value="value" use12-hours format="h:mm a" />
  </j-space>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      value: ref<Dayjs>(),
    };
  },
});
</script>
