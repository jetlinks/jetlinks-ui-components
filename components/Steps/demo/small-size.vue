<docs>
---
order: 1
title: 迷你版
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用.

</docs>
<template>
  <a-steps :current="1" size="small">
    <a-step title="Finished" />
    <a-step title="In Progress" />
    <a-step title="Waiting" />
  </a-steps>
</template>
