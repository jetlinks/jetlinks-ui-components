<docs>
---
order: 6
title: 三种大小
---

## zh-CN

三种大小的输入框，大的用在表单中，中的为默认。

</docs>

<template>
  <j-space direction="vertical">
    <j-time-picker v-model:value="value1" size="large" />
    <j-time-picker v-model:value="value2" />
    <j-time-picker v-model:value="value3" size="small" />
  </j-space>
</template>
<script lang="ts">
import dayjs from 'dayjs';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      value1: ref(dayjs('12:08:23', 'HH:mm')),
      value2: ref(dayjs('12:08:23', 'HH:mm')),
      value3: ref(dayjs('12:08:23', 'HH:mm')),
    };
  },
});
</script>
