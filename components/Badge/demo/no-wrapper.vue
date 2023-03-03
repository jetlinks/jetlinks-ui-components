<docs>
---
order: 1
title: 独立使用
---

## zh-CN

不包裹任何元素即是独立使用，可自定样式展现。
在右上角的 badge 则限定为红色。

</docs>

<template>
  <j-badge count="25" />
  <j-badge
    count="4"
    :number-style="{
      backgroundColor: '#fff',
      color: '#999',
      boxShadow: '0 0 0 1px #d9d9d9 inset',
    }"
  />
  <j-badge count="109" :number-style="{ backgroundColor: '#52c41a' }" />
</template>
