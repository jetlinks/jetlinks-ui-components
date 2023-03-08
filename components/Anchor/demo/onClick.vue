<docs>
---
order: 2
title: 自定义 click 事件
---

## zh-CN

点击锚点不记录历史。

</docs>

<template>
  <j-anchor :affix="false" @click="handleClick">
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
import type { AnchorProps } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const handleClick: AnchorProps['onClick'] = (e, link) => {
      e.preventDefault();
      console.log(link);
    };
    return {
      handleClick,
    };
  },
});
</script>
