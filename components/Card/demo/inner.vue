<docs>
---
order: 5
title: 内部卡片
---

## zh-CN

可以放在普通卡片内部，展示多层级结构的信息

</docs>

<template>
  <j-card title="Card title">
    <p style="font-size: 14px; color: rgba(0, 0, 0, 0.85); margin-bottom: 16px; font-weight: 500">
      Group title
    </p>
    <j-card title="Inner card title">
      <template #extra>
        <a href="#">More</a>
      </template>
      Inner Card content
    </j-card>
    <j-card title="Inner card title" :style="{ marginTop: '16px' }">
      <template #extra>
        <a href="#">More</a>
      </template>
      Inner Card content
    </j-card>
  </j-card>
</template>
