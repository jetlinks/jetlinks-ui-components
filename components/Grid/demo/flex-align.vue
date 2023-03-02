<docs>
---
order: 5
title: 对齐Alignment
---

子元素垂直对齐。

</docs>

<template>
  <p>Align Top</p>
  <j-row type="flex" justify="center" align="top">
    <j-col :span="4">
      <p class="height-100">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-50">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-120">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-80">col-4</p>
    </j-col>
  </j-row>

  <p>Align Center</p>
  <j-row type="flex" justify="space-around" align="middle">
    <j-col :span="4">
      <p class="height-100">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-50">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-120">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-80">col-4</p>
    </j-col>
  </j-row>

  <p>Align Bottom</p>
  <j-row type="flex" justify="space-between" align="bottom">
    <j-col :span="4">
      <p class="height-100">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-50">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-120">col-4</p>
    </j-col>
    <j-col :span="4">
      <p class="height-80">col-4</p>
    </j-col>
  </j-row>
</template>
