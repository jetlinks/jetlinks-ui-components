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
    <a-slider v-model:value="size" />
    <br />
    <br />
    <j-space :size="size">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="link">Link</a-button>
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
