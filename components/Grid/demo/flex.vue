<docs>
---
order: 4
title: 排版
---

## zh-CN

布局基础。

子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

</docs>

<template>
  <div id="components-grid-demo-flex">
    <p>sub-element align left</p>
    <j-row justify="start">
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
    </j-row>

    <p>sub-element align center</p>
    <j-row justify="center">
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
    </j-row>

    <p>sub-element align right</p>
    <j-row justify="end">
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
    </j-row>

    <p>sub-element monospaced arrangement</p>
    <j-row justify="space-between">
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
    </j-row>

    <p>sub-element align full</p>
    <j-row justify="space-around">
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
      <j-col :span="4">col-4</j-col>
    </j-row>
  </div>
</template>

<style lang="less" scoped>
#components-grid-demo-flex :deep(.ant-row) {
  background: rgba(128, 128, 128, 0.08);
}
</style>
