<docs>
---
order: 8
title: 平滑地卸载
---

## zh-CN

平滑、自然的卸载提示。

</docs>

<template>
  <a-alert
    v-if="visible"
    message="Alert Message Text"
    type="success"
    closable
    :after-close="handleClose"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(true);
    const handleClose = () => {
      visible.value = false;
    };
    return {
      visible,
      handleClose,
    };
  },
});
</script>
