<docs>
---
order: 2
title: 封顶数字
---

## zh-CN

超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。

</docs>

<template>
  <j-badge :count="99">
    <j-avatar shape="square" size="large" />
  </j-badge>
  <j-badge :count="100">
    <j-avatar shape="square" size="large" />
  </j-badge>
  <j-badge :count="99" :overflow-count="10">
    <j-avatar shape="square" size="large" />
  </j-badge>
  <j-badge :count="1000" :overflow-count="999">
    <j-avatar shape="square" size="large" />
  </j-badge>
</template>
