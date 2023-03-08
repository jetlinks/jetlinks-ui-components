<docs>
---
order: 6
title: 单选组合 - 配合 name 使用
---

## zh-CN

可以为 Radio.Group 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

</docs>
<template>
  <j-radio-group v-model:value="value" name="radioGroup">
    <j-radio value="1">A</j-radio>
    <j-radio value="2">B</j-radio>
    <j-radio value="3">C</j-radio>
    <j-radio value="4">D</j-radio>
  </j-radio-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('1');
    return {
      value,
    };
  },
});
</script>
