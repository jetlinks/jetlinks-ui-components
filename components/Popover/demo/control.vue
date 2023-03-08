<docs>
---
order: 3
title: 从浮层内关闭
---

## zh-CN

使用 `visible` 属性控制浮层显示。

</docs>
<template>
  <j-popover v-model:visible="visible" title="Title" trigger="click">
    <template #content>
      <a @click="hide">Close</a>
    </template>
    <j-button type="primary">Click me</j-button>
  </j-popover>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const hide = () => {
      visible.value = false;
    };

    return {
      visible,
      hide,
    };
  },
});
</script>
