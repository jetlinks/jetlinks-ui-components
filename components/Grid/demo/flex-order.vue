<docs>
---
order: 6
title: 排序
---

通过 `order` 来改变元素的排序。

</docs>

<template>
  <a-divider orientation="left">Normal</a-divider>
  <a-row type="flex">
    <j-col :span="6" :order="4">1 col-order-4</j-col>
    <j-col :span="6" :order="3">2 col-order-3</j-col>
    <j-col :span="6" :order="2">3 col-order-2</j-col>
    <j-col :span="6" :order="1">4 col-order-1</j-col>
  </a-row>
  <a-divider orientation="left">Responsive</a-divider>
  <a-row type="flex">
    <j-col :span="6" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 4 }">
      1 col-order-responsive
    </j-col>
    <j-col :span="6" :xs="{ order: 2 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }">
      2 col-order-responsive
    </j-col>
    <j-col :span="6" :xs="{ order: 3 }" :sm="{ order: 4 }" :md="{ order: 2 }" :lg="{ order: 2 }">
      3 col-order-responsive
    </j-col>
    <j-col :span="6" :xs="{ order: 4 }" :sm="{ order: 3 }" :md="{ order: 1 }" :lg="{ order: 1 }">
      4 col-order-responsive
    </j-col>
  </a-row>
</template>
