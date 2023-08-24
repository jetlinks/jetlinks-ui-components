<docs>
---
order: 5
title: 带下拉菜单的面包屑
---

## zh-CN

面包屑支持下拉菜单。

</docs>

<template>
  <j-breadcrumb>
    <j-breadcrumb-item>Ant Design Vue</j-breadcrumb-item>
    <j-breadcrumb-item><a href="">Component</a></j-breadcrumb-item>
    <j-breadcrumb-item>
      <a href="">General</a>
      <template #overlay>
        <j-menu>
          <j-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a>
          </j-menu-item>
          <j-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a>
          </j-menu-item>
          <j-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a>
          </j-menu-item>
        </j-menu>
      </template>
    </j-breadcrumb-item>
    <j-breadcrumb-item>Button</j-breadcrumb-item>
  </j-breadcrumb>
</template>
