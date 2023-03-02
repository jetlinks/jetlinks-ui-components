<docs>
---
order: 8
title:  响应式布局
---

## zh-CN

参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设七个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl` `xxxl`。

</docs>

<template>
  <j-row>
    <j-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</j-col>
    <j-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</j-col>
    <j-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</j-col>
  </j-row>
</template>
