<docs>
---
order: 3
title: 网格型内嵌卡片
---

## zh-CN

一种常见的卡片内容区隔模式。

</docs>

<template>
  <j-card title="Card Title">
    <j-card-grid style="width: 25%; text-align: center">Content</j-card-grid>
    <j-card-grid style="width: 25%; text-align: center" :hoverable="false">Content</j-card-grid>
    <j-card-grid style="width: 25%; text-align: center">Content</j-card-grid>
    <j-card-grid style="width: 25%; text-align: center">Content</j-card-grid>
    <j-card-grid style="width: 25%; text-align: center">Content</j-card-grid>
    <j-card-grid style="width: 25%; text-align: center">Content</j-card-grid>
    <j-card-grid style="width: 25%; text-align: center">Content</j-card-grid>
    <j-card-grid style="width: 25%; text-align: center">Content</j-card-grid>
  </j-card>
</template>
