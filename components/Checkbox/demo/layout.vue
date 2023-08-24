<docs>
---
order: 5
title:
  zh-CN: 布局
  en-US: Use with grid
---

## zh-CN

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局

## en-US

We can use Checkbox and Grid Checkbox.group, to implement complex layout

</docs>

<template>
  <j-checkbox-group v-model:value="value" style="width: 100%">
    <j-row>
      <j-col :span="8">
        <j-checkbox value="A">A</j-checkbox>
      </j-col>
      <j-col :span="8">
        <j-checkbox value="B">B</j-checkbox>
      </j-col>
      <j-col :span="8">
        <j-checkbox value="C">C</j-checkbox>
      </j-col>
      <j-col :span="8">
        <j-checkbox value="D">D</j-checkbox>
      </j-col>
      <j-col :span="8">
        <j-checkbox value="E">E</j-checkbox>
      </j-col>
    </j-row>
  </j-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref([]);
    return {
      value,
    };
  },
});
</script>
