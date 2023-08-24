<docs>
---
order: 2
title: 更灵活的内容展示
---

## zh-CN

可以利用 `Card.Meta` 支持更灵活的内容

</docs>

<template>
  <j-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </template>
    <j-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </j-card-meta>
  </j-card>
</template>
