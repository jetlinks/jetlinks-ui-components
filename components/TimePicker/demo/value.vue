<docs>
---
order: 8
debugger: true
title: 受控组件
---

## zh-CN

value 和 onChange 需要配合使用。也可以直接使用v-model。

</docs>

<template>
  <j-space direction="vertical">
    <p>use value and @change</p>
    <j-time-picker :value="value" @change="onChange" />
    <p>v-model</p>
    <j-time-picker v-model:value="value" />
    <p>Do not change</p>
    <j-time-picker :value="value2" />
  </j-space>
</template>
<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref<Dayjs>();

    const onChange = (time: Dayjs) => {
      console.log(time);
      value.value = time;
    };

    return {
      value,
      value2: ref(dayjs()),
      onChange,
    };
  },
});
</script>
