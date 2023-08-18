<docs>
---
order: 2
title: 间距大小
---

## zh-CN

间距预设大、中、小三种大小。
通过设置 `size` 为 `large` `middle` 分别把间距设为大、中间距。若不设置 `size`，则间距为小。

</docs>

<template>
  <div>
    <j-radio-group v-model:value="size">
      <j-radio value="small">Small</j-radio>
      <j-radio value="middle">Middle</j-radio>
      <j-radio value="large">Large</j-radio>
    </j-radio-group>
    <br />
    <br />
    <j-space :size="size">
      <j-button type="primary">Primary</j-button>
      <j-button>Default</j-button>
      <j-button type="dashed">Dashed</j-button>
      <j-button type="link">Link</j-button>
    </j-space>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref('small'),
    };
  },
});
</script>
