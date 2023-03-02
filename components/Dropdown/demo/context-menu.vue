<docs>
---
order: 8
title: 右键菜单
---

## zh-CN

默认是移入触发菜单，可以点击鼠标右键触发。

</docs>

<template>
  <a-dropdown :trigger="['contextmenu']">
    <div
      :style="{
        textAlign: 'center',
        background: '#f7f7f7',
        height: '200px',
        lineHeight: '200px',
        color: '#777',
      }"
    >
      Right Click on here
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item key="1">1st menu item</a-menu-item>
        <a-menu-item key="2">2nd menu item</a-menu-item>
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
