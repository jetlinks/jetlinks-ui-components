<docs>
---
order: 4
title: 受控的预览
---

## zh-CN

可以使预览受控。

</docs>

<template>
  <div>
    <j-button type="primary" @click="() => setVisible(true)">show image preview</j-button>
    <j-image
      :width="200"
      :style="{ display: 'none' }"
      :preview="{
        visible,
        onVisibleChange: setVisible,
      }"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const setVisible = (value): void => {
      visible.value = value;
    };
    return {
      visible,
      setVisible,
    };
  },
});
</script>
