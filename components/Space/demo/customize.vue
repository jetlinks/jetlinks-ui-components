<docs>
---
order: 3
title: 自定义尺寸
---

## zh-CN

自定义间距大小。

</docs>

<template>
  <div>
    <j-slider v-model:value="size" />
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
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      size: ref(8),
    };
  },
});
</script>
