<docs>
---
order: 3
title: 带徽标的头像
---

## zh-CN

通常用于消息提示。

</docs>

<template>
  <span style="margin-right: 24px">
    <j-badge :count="1">
      <j-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </j-avatar>
    </j-badge>
  </span>
  <span>
    <j-badge dot>
      <j-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </j-avatar>
    </j-badge>
  </span>
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

<style>
#components-Avatar-demo-badge .ant-avatar {
  margin-top: 0;
  margin-right: 0;
}
</style>
