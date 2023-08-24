<docs>
---
order: 3
title: 垂直菜单
---

## zh-CN

子菜单是弹出的形式。

</docs>

<template>
  <j-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <j-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      Navigation One
    </j-menu-item>
    <j-menu-item key="2">
      <template #icon>
        <CalendarOutlined />
      </template>
      Navigation Two
    </j-menu-item>
    <j-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Three</template>
      <j-menu-item key="3">Option 3</j-menu-item>
      <j-menu-item key="4">Option 4</j-menu-item>
      <j-sub-menu key="sub1-2" title="Submenu">
        <j-menu-item key="5">Option 5</j-menu-item>
        <j-menu-item key="6">Option 6</j-menu-item>
      </j-sub-menu>
    </j-sub-menu>
    <j-sub-menu key="sub2">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Four</template>
      <j-menu-item key="7">Option 7</j-menu-item>
      <j-menu-item key="8">Option 8</j-menu-item>
      <j-menu-item key="9">Option 9</j-menu-item>
      <j-menu-item key="10">Option 10</j-menu-item>
    </j-sub-menu>
  </j-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick: MenuProps['onClick'] = menuInfo => {
      console.log('click ', menuInfo);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>
