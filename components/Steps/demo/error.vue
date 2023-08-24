<docs>
---
order: 6
title: 步骤运行错误
---

## zh-CN

使用 Steps 的 `status` 属性来指定当前步骤的状态。

</docs>
<template>
  <j-steps :current="1" status="error">
    <j-step title="Finished" description="This is a description." />
    <j-step title="In Progress" description="This is a description." />
    <j-step title="Waiting" description="This is a description." />
  </j-steps>
</template>
