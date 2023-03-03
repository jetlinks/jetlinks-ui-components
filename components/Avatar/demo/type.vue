<docs>
---
order: 1
title: 类型
---

## zh-CN

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

</docs>

<template>
  <j-avatar>
    <template #icon>
      <UserOutlined />
    </template>
  </j-avatar>
  <j-avatar>U</j-avatar>
  <j-avatar>USER</j-avatar>
  <j-avatar src="https://joeschmoe.io/api/v1/random" />
  <j-avatar style="color: #f56a00; background-color: #fde3cf">U</j-avatar>
  <j-avatar style="background-color: #87d068">
    <template #icon>
      <UserOutlined />
    </template>
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
