<docs>
---
order: 13
title: 带有进度的步骤
---

## zh-CN

带有进度的步骤。

</docs>

<template>
  <j-steps :percent="60" :current="1">
    <j-step title="Finished" description="This is a description." />
    <j-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <j-step title="Waiting" description="This is a description." />
  </j-steps>
</template>
