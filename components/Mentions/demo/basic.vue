<docs>
---
order: 0
title: 基本用法
---

## zh-CN

基本用法

</docs>
<template>
  <j-mentions v-model:value="value" autofocus @select="onSelect">
    <j-mentions-option value="afc163">afc163</j-mentions-option>
    <j-mentions-option value="zombieJ">zombieJ</j-mentions-option>
    <j-mentions-option value="yesmeck">yesmeck</j-mentions-option>
  </j-mentions>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('@afc163');
    watch(value, () => {
      console.log('value', value);
    });
    const onSelect = (option: { value: string }) => {
      console.log('select', option);
    };

    return {
      value,
      onSelect,
    };
  },
});
</script>
