<docs>
---
order: 6
title: 相册模式
---

## zh-CN

从一张图片点开相册。

</docs>

<template>
  <j-image
    :preview="{ visible: false }"
    :width="200"
    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
    @click="visible = true"
  />
  <div style="display: none">
    <j-image-preview-group :preview="{ visible, onVisibleChange: vis => (visible = vis) }">
      <j-image
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
      />
      <j-image
        src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
      />
      <j-image
        src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
      />
    </j-image-preview-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      visible: ref(false),
    };
  },
});
</script>
