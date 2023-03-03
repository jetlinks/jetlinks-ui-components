<docs>
---
order: 4
title: 选择时分
---

## zh-CN

TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。

</docs>

<template>
  <j-time-picker v-model:value="value" format="HH:mm" />
</template>
<script lang="ts">
import dayjs from 'dayjs';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref(dayjs('12:08', 'HH:mm'));

    return {
      value,
      dayjs,
    };
  },
});
</script>
