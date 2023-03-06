<docs>
---
order: 0
title: 基本用法
---

## zh-CN

最简单的用法，浮层的大小由内容区域决定。

</docs>
<template>
  <j-popover title="Title">
    <template #content>
      <p>Content</p>
      <p>Content</p>
    </template>
    <j-button type="primary">Hover me</j-button>
  </j-popover>
</template>
