<docs>
---
order: 7
title: 点状步骤条
---

## zh-CN

包含步骤点的进度条。

</docs>

<template>
  <div>
    <j-steps progress-dot :current="1">
      <j-step title="Finished" description="This is a description." />
      <j-step title="In Progress" description="This is a description." />
      <j-step title="Waiting" description="This is a description." />
    </j-steps>
    <j-divider />
    <j-steps progress-dot :current="1" direction="vertical">
      <j-step title="Finished" description="This is a description. This is a description." />
      <j-step title="Finished" description="This is a description. This is a description." />
      <j-step title="In Progress" description="This is a description. This is a description." />
      <j-step title="Waiting" description="This is a description." />
      <j-step title="Waiting" description="This is a description." />
    </j-steps>
  </div>
</template>
