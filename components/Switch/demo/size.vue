<docs>
---
order: 3
title: 两种大小
---

## zh-CN

`size="small"` 表示小号开关。

</docs>

<template>
  <div>
    <j-switch v-model:checked="checked1" />
    <br />
    <j-switch v-model:checked="checked2" size="small" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
    });
    return { ...toRefs(state) };
  },
});
</script>
