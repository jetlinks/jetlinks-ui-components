<docs>
---
order: 8
title: 三种大小
---

## zh-CN

三种大小的输入框，若不设置，则为 `default`。

## en-US

The input box comes in three sizes. `default` will be used if `size` is omitted.

</docs>

<template>
  <j-space direction="vertical" :size="12">
    <j-radio-group v-model:value="size">
      <j-radio-button value="large">Large</j-radio-button>
      <j-radio-button value="default">Default</j-radio-button>
      <j-radio-button value="small">Small</j-radio-button>
    </j-radio-group>
    <j-date-picker :size="size" />
    <j-date-picker :size="size" placeholder="Select Month" picker="month" />
    <j-range-picker :size="size" />
    <j-date-picker :size="size" placeholder="Select Week" picker="week" />
  </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref<any>('default'),
    };
  },
});
</script>
