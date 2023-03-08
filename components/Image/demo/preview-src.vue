<docs>
---
order: 4
title: 自定义预览图片
---

## zh-CN

可以设置不同的预览图片。

</docs>

<template>
  <j-image
    :width="200"
    src="https://aliyuncdn.antdv.com/logo.png"
    :preview="{
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
