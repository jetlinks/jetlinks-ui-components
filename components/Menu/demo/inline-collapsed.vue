<docs>
---
order: 2
title: 缩起内嵌菜单
---

## zh-CN

内嵌菜单可以被缩起/展开。

你可以在 [Layout](/components/layout-cn/#components-layout-demo-side) 里查看侧边布局结合的完整示例。

</docs>

<template>
  <div style="width: 256px">
    <j-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </j-button>
    <j-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <j-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </j-menu-item>
      <j-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Option 2</span>
      </j-menu-item>
      <j-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </j-menu-item>
      <j-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <j-menu-item key="5">Option 5</j-menu-item>
        <j-menu-item key="6">Option 6</j-menu-item>
        <j-menu-item key="7">Option 7</j-menu-item>
        <j-menu-item key="8">Option 8</j-menu-item>
      </j-sub-menu>
      <j-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <j-menu-item key="9">Option 9</j-menu-item>
        <j-menu-item key="10">Option 10</j-menu-item>
        <j-sub-menu key="sub3" title="Submenu">
          <j-menu-item key="11">Option 11</j-menu-item>
          <j-menu-item key="12">Option 12</j-menu-item>
        </j-sub-menu>
      </j-sub-menu>
    </j-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
    };
  },
});
</script>
