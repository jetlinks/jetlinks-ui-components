<docs>
---
order: 6
title: 分隔符
---

## zh-CN

使用 `Breadcrumb.Separator` 可以自定义分隔符。

</docs>

<template>
  <j-breadcrumb separator="">
    <j-breadcrumb-item>Location</j-breadcrumb-item>
    <j-breadcrumb-separator>:</j-breadcrumb-separator>
    <j-breadcrumb-item href="">Application Center</j-breadcrumb-item>
    <j-breadcrumb-separator />
    <j-breadcrumb-item href="">Application List</j-breadcrumb-item>
    <j-breadcrumb-separator />
    <j-breadcrumb-item>An Application</j-breadcrumb-item>
  </j-breadcrumb>
</template>
