<docs>
---
order: 4
title:
  zh-CN: 控制关闭状态
  en-US: Controlled
---

## zh-CN

通过 `visible` 属性控制关闭状态。

## en-US

By using the `visible` prop, you can control the close state of Tag.

</docs>

<template>
  <j-tag v-model:visible="visible" closable>Movies</j-tag>
  <br />
  <j-button size="small" @click="visible = !visible">Toggle</j-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      visible: ref(false),
    };
  },
});
</script>
