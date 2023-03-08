<docs>
---
order: 7
title: 控制 ToolTip 的显示
---

## zh-CN

当 `tooltipVisible` 为 `true` 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。

</docs>

<template>
  <j-slider v-model:value="value" :tooltip-visible="true" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref<number>(30);

    return {
      value,
    };
  },
});
</script>
