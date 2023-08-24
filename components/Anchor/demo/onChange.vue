<docs>
---
order: 5
title: 监听锚点链接改变
---

## zh-CN

监听锚点链接改变。

</docs>

<template>
  <j-anchor :affix="false" @change="onChange">
    <j-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <j-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <j-anchor-link href="#API" title="API">
      <j-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <j-anchor-link href="#Link-Props" title="Link Props" />
    </j-anchor-link>
  </j-anchor>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link);
    };
    return {
      onChange,
    };
  },
});
</script>
