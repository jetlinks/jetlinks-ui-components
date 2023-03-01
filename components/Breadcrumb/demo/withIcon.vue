<docs>
---
order: 1
title: 带有图标的
---

## zh-CN

图标放在文字前面。

</docs>

<template>
  <j-breadcrumb>
    <j-breadcrumb-item href="">
      <home-outlined />
    </j-breadcrumb-item>
    <j-breadcrumb-item href="">
      <user-outlined />
      <span>Application List</span>
    </j-breadcrumb-item>
    <j-breadcrumb-item>Application</j-breadcrumb-item>
  </j-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    HomeOutlined,
    UserOutlined,
  },
});
</script>
