<docs>
---
order: 5
title: 切换菜单类型
---

## zh-CN

展示动态切换模式。

</docs>

<template>
  <div>
    <j-switch :checked="mode === 'vertical'" @change="changeMode" />
    Change Mode
    <span class="ant-divider" style="margin: 0 1em" />
    <j-switch :checked="theme === 'dark'" @change="changeTheme" />
    Change Theme
    <br />
    <br />
    <j-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      :mode="mode"
      :theme="theme"
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
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuMode, MenuTheme } from 'ant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      mode: 'inline' as MenuMode,
      theme: 'light' as MenuTheme,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    const changeMode = (checked: boolean) => {
      state.mode = checked ? 'vertical' : 'inline';
    };
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };
    return {
      ...toRefs(state),
      changeMode,
      changeTheme,
    };
  },
});
</script>
