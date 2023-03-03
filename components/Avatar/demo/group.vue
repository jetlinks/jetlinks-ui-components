<docs>
---
order: 4
title: Avatar.Group
---

## zh-CN

头像组合展现。

</docs>

<template>
  <j-avatar-group>
    <j-avatar src="https://joeschmoe.io/api/v1/random" />
    <j-avatar style="background-color: #f56a00">K</j-avatar>
    <j-tooltip title="Ant User" placement="top">
      <j-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </j-avatar>
    </j-tooltip>
    <j-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </j-avatar>
  </j-avatar-group>
  <j-divider />
  <j-avatar-group :max-count="2" :max-style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">
    <j-avatar src="https://joeschmoe.io/api/v1/random" />
    <j-avatar style="background-color: #1890ff">K</j-avatar>
    <j-tooltip title="Ant User" placement="top">
      <j-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </j-avatar>
    </j-tooltip>
    <j-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </j-avatar>
  </j-avatar-group>
  <j-divider />
  <j-avatar-group
    :max-count="2"
    size="large"
    :max-style="{
      color: '#f56a00',
      backgroundColor: '#fde3cf',
    }"
  >
    <j-avatar src="https://joeschmoe.io/api/v1/random" />
    <j-avatar style="background-color: #1890ff">K</j-avatar>
    <j-tooltip title="Ant User" placement="top">
      <j-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </j-avatar>
    </j-tooltip>
    <j-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </j-avatar>
  </j-avatar-group>
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
