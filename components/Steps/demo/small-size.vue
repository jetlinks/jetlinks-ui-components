<docs>
---
order: 1
title: 迷你版
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用.

</docs>
<template>
  <j-steps :current="1" size="small">
    <j-step title="Finished" />
    <j-step title="In Progress" />
    <j-step title="Waiting" />
  </j-steps>
</template>
