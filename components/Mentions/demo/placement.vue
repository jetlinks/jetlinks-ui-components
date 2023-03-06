<docs>
---
order: 4
title: 向上展开
---

## zh-CN

向上展开建议。

</docs>
<template>
  <j-mentions v-model:value="value" placement="top">
    <j-mentions-option value="afc163">afc163</j-mentions-option>
    <j-mentions-option value="zombieJ">zombieJ</j-mentions-option>
    <j-mentions-option value="yesmeck">yesmeck</j-mentions-option>
  </j-mentions>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
</script>
