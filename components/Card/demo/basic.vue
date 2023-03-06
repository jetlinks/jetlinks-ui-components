<docs>
---
order: 0
title: 典型卡片
---

## zh-CN

包含标题、内容、操作区域。
可通过设置size为`default`或者`small`，控制尺寸

</docs>

<template>
  <j-card title="Default size card" style="width: 300px">
    <template #extra><a href="#">more</a></template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </j-card>
  <br />
  <j-card size="small" title="Small size card" style="width: 300px">
    <template #extra><a href="#">more</a></template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </j-card>
</template>
