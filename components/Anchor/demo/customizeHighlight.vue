<docs>
---
order: 3
title: 自定义锚点高亮
---

## zh-CN

自定义锚点高亮。

</docs>

<template>
  <j-anchor :affix="false" :get-current-anchor="getCurrentAnchor">
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
    const getCurrentAnchor = () => {
      return '#components-anchor-demo-static';
    };
    return {
      getCurrentAnchor,
    };
  },
});
</script>
