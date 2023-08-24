<docs>
---
order: 4
title: RadioGroup 垂直
---

## zh-CN

垂直的 RadioGroup，配合更多输入框选项。

</docs>
<template>
  <j-radio-group v-model:value="value">
    <j-radio :style="radioStyle" :value="1">Option A</j-radio>
    <j-radio :style="radioStyle" :value="2">Option B</j-radio>
    <j-radio :style="radioStyle" :value="3">Option C</j-radio>
    <j-radio :style="radioStyle" :value="4">
      More...
      <j-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
    </j-radio>
  </j-radio-group>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    const radioStyle = reactive({
      display: 'flex',
      height: '30px',
      lineHeight: '30px',
    });

    return {
      value,
      radioStyle,
    };
  },
});
</script>
