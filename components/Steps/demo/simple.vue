<docs>
---
order: 0
title: 基本用法
---

## zh-CN

简单的步骤条。

</docs>
<template>
  <j-steps :current="1">
    <j-step>
      <!-- <span slot="title">Finished</span> -->
      <template #title>Finished</template>
      <template #description>
        <span>This is a description.</span>
      </template>
    </j-step>
    <j-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <j-step title="Waiting" description="This is a description." />
  </j-steps>
</template>
