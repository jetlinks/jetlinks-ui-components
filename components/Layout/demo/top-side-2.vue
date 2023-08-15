<docs>
---
order: 2
title: 顶部-侧边布局-通栏
---

同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。

</docs>
<template>
  <j-layout>
    <j-layout-header class="header">
      <div class="logo" />
      <j-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <j-menu-item key="1">nav 1</j-menu-item>
        <j-menu-item key="2">nav 2</j-menu-item>
        <j-menu-item key="3">nav 3</j-menu-item>
      </j-menu>
    </j-layout-header>
    <j-layout>
      <j-layout-sider width="200" style="background: #fff">
        <j-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <j-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <j-menu-item key="1">option1</j-menu-item>
            <j-menu-item key="2">option2</j-menu-item>
            <j-menu-item key="3">option3</j-menu-item>
            <j-menu-item key="4">option4</j-menu-item>
          </j-sub-menu>
          <j-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <j-menu-item key="5">option5</j-menu-item>
            <j-menu-item key="6">option6</j-menu-item>
            <j-menu-item key="7">option7</j-menu-item>
            <j-menu-item key="8">option8</j-menu-item>
          </j-sub-menu>
          <j-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <j-menu-item key="9">option9</j-menu-item>
            <j-menu-item key="10">option10</j-menu-item>
            <j-menu-item key="11">option11</j-menu-item>
            <j-menu-item key="12">option12</j-menu-item>
          </j-sub-menu>
        </j-menu>
      </j-layout-sider>
      <j-layout style="padding: 0 24px 24px">
        <j-breadcrumb style="margin: 16px 0">
          <j-breadcrumb-item>Home</j-breadcrumb-item>
          <j-breadcrumb-item>List</j-breadcrumb-item>
          <j-breadcrumb-item>App</j-breadcrumb-item>
        </j-breadcrumb>
        <j-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </j-layout-content>
      </j-layout>
    </j-layout>
  </j-layout>
</template>
<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1']),
    };
  },
});
</script>

<style>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
