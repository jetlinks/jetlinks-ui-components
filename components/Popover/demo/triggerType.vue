<docs>
---
order: 1
title: 三种触发方式
---

## zh-CN

鼠标移入、聚集、点击。

</docs>
<template>
  <div>
    <j-popover title="Title" trigger="hover">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <j-button>Hover me</j-button>
    </j-popover>
    <j-popover title="Title" trigger="focus">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <j-button>Focus me</j-button>
    </j-popover>
    <j-popover title="Title" trigger="click">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <j-button>Click me</j-button>
    </j-popover>
  </div>
</template>
<style>
#components-popover-demo-triggerType .ant-btn {
  margin-right: 8px;
}
</style>
