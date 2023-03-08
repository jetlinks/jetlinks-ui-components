<docs>
---
order: 8
title: 自定义点状步骤条
---

## zh-CN

为点状步骤条增加自定义展示。

</docs>

<template>
  <div>
    <j-steps :current="1">
      <template #progressDot="{ index, status, prefixCls }">
        <j-popover>
          <template #content>
            <span>step {{ index }} status: {{ status }}</span>
          </template>
          <span :class="`${prefixCls}-icon-dot`" />
        </j-popover>
      </template>
      <j-step title="Finished" description="You can hover on the dot." />
      <j-step title="In Progress" description="You can hover on the dot." />
      <j-step title="Waiting" description="You can hover on the dot." />
      <j-step title="Waiting" description="You can hover on the dot." />
    </j-steps>
  </div>
</template>
