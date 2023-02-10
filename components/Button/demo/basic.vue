<docs>
---
order: 0
title: 按钮类型
---

按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
  
</docs>
<template>
  <Space>
    <j-button type="primary">Primary Button</j-button>
    <j-button>Default Button</j-button>
    <j-button type="dashed">Dashed Button</j-button>
    <j-button type="text">Text Button</j-button>
    <j-button type="link">Link Button</j-button>
    <j-button tag type="primary">tag</j-button>
  </Space>
</template>

<script lang="ts" setup>
import { Space } from 'ant-design-vue'
</script>
<style lang="less" scoped></style>
