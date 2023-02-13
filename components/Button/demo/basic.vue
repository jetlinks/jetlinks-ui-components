<docs>
---
order: 0
title: 按钮类型
---

按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
  
</docs>
<template>
  <Space>
    <j-button type="primary">主按钮</j-button>
    <j-button type="stroke">描边按钮</j-button>
    <j-button>默认按钮</j-button>
    <j-button type="dashed">虚线按钮</j-button>
    <j-button type="text">文本按钮</j-button>
    <j-button type="link">链接按钮</j-button>
  </Space>
</template>

<script lang="ts" setup>
import { Space } from 'ant-design-vue'
</script>
<style lang="less" scoped></style>
