<docs>
---
order: 0
title: 基本
---

## zh-CN

头像有三种尺寸，两种形状可选。

</docs>

<template>
  <j-avatar :size="64">
    <template #icon><UserOutlined /></template>
  </j-avatar>
  <j-avatar size="large">
    <template #icon><UserOutlined /></template>
  </j-avatar>
  <j-avatar>
    <template #icon><UserOutlined /></template>
  </j-avatar>
  <j-avatar size="small">
    <template #icon><UserOutlined /></template>
  </j-avatar>
  <br />
  <j-avatar shape="square" :size="64">
    <template #icon><UserOutlined /></template>
  </j-avatar>
  <j-avatar shape="square" size="large">
    <template #icon><UserOutlined /></template>
  </j-avatar>
  <j-avatar shape="square">
    <template #icon><UserOutlined /></template>
  </j-avatar>
  <j-avatar shape="square" size="small">
    <template #icon><UserOutlined /></template>
  </j-avatar>
</template>

<script lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
});
</script>
