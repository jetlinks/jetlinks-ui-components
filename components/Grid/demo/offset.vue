<docs>
---
order: 2
title: 左右偏移
---

## zh-CN

列偏移。

使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。

</docs>

<template>
  <j-row>
    <j-col :span="8">col-8</j-col>
    <j-col :span="8" :offset="8">col-8</j-col>
  </j-row>
  <j-row>
    <j-col :span="6" :offset="6">col-6 col-offset-6</j-col>
    <j-col :span="6" :offset="6">col-6 col-offset-6</j-col>
  </j-row>
  <j-row>
    <j-col :span="12" :offset="6">col-12 col-offset-6</j-col>
  </j-row>
</template>
