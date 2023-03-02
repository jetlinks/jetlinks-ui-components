<docs>
---
order: 7
title: Flex 填充
---

## zh-CN

Col 提供 `flex` 属性以支持填充。

</docs>

<template>
  <a-divider orientation="left">Percentage columns</a-divider>
  <j-row type="flex">
    <j-col :flex="2">2 / 5</j-col>
    <j-col :flex="3">3 / 5</j-col>
  </j-row>
  <a-divider orientation="left">Fill rest</a-divider>
  <j-row type="flex">
    <j-col flex="100px">100px</j-col>
    <j-col flex="auto">auto</j-col>
  </j-row>
  <a-divider orientation="left">Raw flex style</a-divider>
  <j-row type="flex">
    <j-col flex="1 1 200px">1 1 200px</j-col>
    <j-col flex="0 1 300px">0 1 300px</j-col>
  </j-row>
</template>
