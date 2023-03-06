<docs>
---
order: 4
title: 加载中
---

## zh-CN

标识开关操作仍在执行中。

</docs>
<template>
  <div>
    <j-switch v-model:checked="checked1" loading />
    <br />
    <j-switch v-model:checked="checked2" size="small" loading />
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
