<docs>
---
order: 5
title: 竖直方向的小型步骤条
---

## zh-CN

简单的竖直方向的小型步骤条。

</docs>
<template>
  <j-steps direction="vertical" size="small" :current="1">
    <j-step title="Finished" description="This is a description." />
    <j-step title="In Progress" description="This is a description." />
    <j-step title="Waiting" description="This is a description." />
  </j-steps>
</template>
