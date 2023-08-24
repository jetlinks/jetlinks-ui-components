<docs>
---
order: 0
title: 基础栅格
---


从堆叠到水平排列。

使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。

</docs>

<template>
  <j-row>
    <j-col :span="12">col-12</j-col>
    <j-col :span="12">col-12</j-col>
  </j-row>
  <j-row>
    <j-col :span="8">col-8</j-col>
    <j-col :span="8">col-8</j-col>
    <j-col :span="8">col-8</j-col>
  </j-row>
  <j-row>
    <j-col :span="6">col-6</j-col>
    <j-col :span="6">col-6</j-col>
    <j-col :span="6">col-6</j-col>
    <j-col :span="6">col-6</j-col>
  </j-row>
</template>
