<docs>
---
order: 4
title: 分隔符
---

## zh-CN

用` separator=">" `可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符

</docs>

<template>
  <j-breadcrumb separator=">">
    <j-breadcrumb-item>Home</j-breadcrumb-item>
    <j-breadcrumb-item href="">Application Center</j-breadcrumb-item>
    <j-breadcrumb-item href="">Application List</j-breadcrumb-item>
    <j-breadcrumb-item>An Application</j-breadcrumb-item>
  </j-breadcrumb>
  <j-breadcrumb>
    <template #separator><span style="color: red">></span></template>
    <j-breadcrumb-item>Home</j-breadcrumb-item>
    <j-breadcrumb-item href="">Application Center</j-breadcrumb-item>
    <j-breadcrumb-item href="">Application List</j-breadcrumb-item>
    <j-breadcrumb-item>An Application</j-breadcrumb-item>
  </j-breadcrumb>
</template>
