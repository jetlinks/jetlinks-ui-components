<docs>
---
order: 3
title: 栅格排序
---

## zh-CN

列排序。

通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

</docs>

<template>
  <j-row>
    <j-col :span="18" :push="6">col-18 col-push-6</j-col>
    <j-col :span="6" :pull="18">col-6 col-pull-18</j-col>
  </j-row>
</template>
