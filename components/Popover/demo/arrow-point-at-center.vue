<docs>
---
order: 4
title: 箭头指向
---

## zh-CN

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

</docs>
<template>
  <j-space>
    <j-popover placement="topLeft">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <template #title>
        <span>Title</span>
      </template>
      <j-button>Align edge / 边缘对齐</j-button>
    </j-popover>
    <j-popover placement="topLeft" arrow-point-at-center>
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <template #title>
        <span>Title</span>
      </template>
      <j-button>Arrow points to center / 箭头指向中心</j-button>
    </j-popover>
  </j-space>
</template>
