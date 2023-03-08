<docs>
---
order: 0
title: 基本
---

## zh-CN

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

</docs>

<template>
  <j-space direction="vertical">
    <j-time-picker v-model:value="value" />
    <j-time-picker v-model:value="strValue" value-format="HH:mm:ss" />
  </j-space>
</template>
<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<Dayjs>(dayjs('08:00:00', 'HH:mm:ss'));
    const strValue = ref<string>('09:00:00');

    watch(value, () => {
      console.log(value.value);
    });
    watch(strValue, () => {
      console.log(strValue.value);
    });
    return {
      value,
      strValue,
    };
  },
});
</script>
