<docs>
---
order: 3
title: 多张图片预览
---

## zh-CN

点击左右切换按钮可以预览多张图片。

</docs>

<template>
  <j-image-preview-group>
    <j-image :width="200" src="https://aliyuncdn.antdv.com/vue.png" />
    <j-image :width="200" src="https://aliyuncdn.antdv.com/logo.png" />
  </j-image-preview-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
