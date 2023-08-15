<docs>
---
order: 0
title: 基本结构
---

典型的页面布局。

</docs>
<template>
  <j-layout>
    <j-layout-header>Header</j-layout-header>
    <j-layout-content>Content</j-layout-content>
    <j-layout-footer>Footer</j-layout-footer>
  </j-layout>

  <j-layout>
    <j-layout-header>Header</j-layout-header>
    <j-layout>
      <j-layout-sider>Sider</j-layout-sider>
      <j-layout-content>Content</j-layout-content>
    </j-layout>
    <j-layout-footer>Footer</j-layout-footer>
  </j-layout>

  <j-layout>
    <j-layout-header>Header</j-layout-header>
    <j-layout>
      <j-layout-content>Content</j-layout-content>
      <j-layout-sider>Sider</j-layout-sider>
    </j-layout>
    <j-layout-footer>Footer</j-layout-footer>
  </j-layout>

  <j-layout>
    <j-layout-sider>Sider</j-layout-sider>
    <j-layout>
      <j-layout-header>Header</j-layout-header>
      <j-layout-content>Content</j-layout-content>
      <j-layout-footer>Footer</j-layout-footer>
    </j-layout>
  </j-layout>
</template>

<style scoped>
.code-box-demo {
  text-align: center;
}
.ant-layout-header,
.ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] .ant-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] .ant-layout-footer {
  background: #6aa0c7;
}
.ant-layout-footer {
  line-height: 1.5;
}
.ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] .ant-layout-sider {
  background: #3499ec;
}
.ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] .ant-layout-content {
  background: #107bcb;
}
.code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
