<docs>
---
order: 7
title: 额外的页脚
---

## zh-CN

在浮层中加入额外的页脚，以满足某些定制信息的需求。

</docs>

<template>
  <j-space direction="vertical">
    <j-date-picker>
      <template #renderExtraFooter>extra footer</template>
    </j-date-picker>
    <j-date-picker show-time>
      <template #renderExtraFooter>extra footer</template>
    </j-date-picker>
    <j-range-picker>
      <template #renderExtraFooter>extra footer</template>
    </j-range-picker>
    <j-range-picker show-time>
      <template #renderExtraFooter>extra footer</template>
    </j-range-picker>
    <j-date-picker placeholder="Select month" picker="month">
      <template #renderExtraFooter>extra footer</template>
    </j-date-picker>
  </j-space>
</template>
