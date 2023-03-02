<docs>
---
order: 0
title: 顶部导航
---

## zh-CN

水平的顶部导航菜单。

</docs>

<template>
  <j-menu v-model:selectedKeys="current" mode="horizontal">
    <j-menu-item key="mail">
      <template #icon>
        <mail-outlined />
      </template>
      Navigation One
    </j-menu-item>
    <j-menu-item key="app" disabled>
      <template #icon>
        <appstore-outlined />
      </template>
      Navigation Two
    </j-menu-item>
    <j-sub-menu key="sub1">
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>Navigation Three - Submenu</template>
      <j-menu-item-group title="Item 1">
        <j-menu-item key="setting:1">Option 1</j-menu-item>
        <j-menu-item key="setting:2">Option 2</j-menu-item>
      </j-menu-item-group>
      <j-menu-item-group title="Item 2">
        <j-menu-item key="setting:3">Option 3</j-menu-item>
        <j-menu-item key="setting:4">Option 4</j-menu-item>
      </j-menu-item-group>
    </j-sub-menu>
    <j-menu-item key="alipay">
      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </j-menu-item>
  </j-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const current = ref<string[]>(['mail']);
    return {
      current,
    };
  },
});
</script>
