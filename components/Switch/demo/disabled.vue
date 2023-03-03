<docs>
---
order: 1
title: 不可用
---

## zh-CN

Switch 失效状态。

</docs>

<template>
  <div>
    <j-switch v-model:checked="checked" :disabled="disabled" style="margin-bottom: 5px" />
    <br />
    <j-button type="primary" @click="onToggle">Toggle disabled</j-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref<boolean>(true);
    const disabled = ref<boolean>(true);

    const onToggle = () => {
      disabled.value = !disabled.value;
    };

    return {
      checked,
      disabled,
      onToggle,
    };
  },
});
</script>
