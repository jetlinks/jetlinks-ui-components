<docs>
---
order: 4
iframe: 360
title: 侧边布局
---

侧边两列式布局。页面横向空间有限时，侧边导航可收起。<br>
侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。

</docs>
<template>
  <j-layout style="min-height: 600px">
    <j-layout-sider v-model:collapsed="collapsed">
      <div class="logo" />
      <j-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <j-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </j-menu-item>
        <j-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </j-menu-item>
        <j-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <j-menu-item key="3">Tom</j-menu-item>
          <j-menu-item key="4">Bill</j-menu-item>
          <j-menu-item key="5">Alex</j-menu-item>
        </j-sub-menu>
        <j-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <j-menu-item key="6">Team 1</j-menu-item>
          <j-menu-item key="8">Team 2</j-menu-item>
        </j-sub-menu>
        <j-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </j-menu-item>
      </j-menu>
    </j-layout-sider>
    <j-layout>
      <j-layout-header style="background: #fff; padding: 0" />
      <j-layout-content style="margin: 0 16px">
        <j-breadcrumb style="margin: 16px 0">
          <j-breadcrumb-item>User</j-breadcrumb-item>
          <j-breadcrumb-item>Bill</j-breadcrumb-item>
        </j-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>
      </j-layout-content>
      <j-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </j-layout-footer>
    </j-layout>
  </j-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),
    };
  },
});
</script>

<style>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
