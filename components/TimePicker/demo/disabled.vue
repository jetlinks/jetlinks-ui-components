<docs>
---
order: 3
title: 禁用
---

## zh-CN

禁用时间选择。

</docs>

<template>
  <j-time-picker :value="dayjs('12:08:23', 'HH:mm:ss')" disabled />
</template>
<script lang="ts">
import dayjs from 'dayjs';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      dayjs,
    };
  },
});
</script>
