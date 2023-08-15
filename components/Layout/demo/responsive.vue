<docs>
---
order: 6
title: 响应式布局
---

Layout.Sider 支持响应式布局。
> 说明：配置 `breakpoint` 属性即生效，视窗宽度小于 `breakpoint` 时 Sider 缩小为 `collapsedWidth` 宽度，若将 `collapsedWidth` 设置为零，会出现特殊 trigger。

</docs>
<template>
  <j-layout>
    <j-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <j-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <j-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </j-menu-item>
        <j-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </j-menu-item>
        <j-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </j-menu-item>
        <j-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </j-menu-item>
      </j-menu>
    </j-layout-sider>
    <j-layout>
      <j-layout-header :style="{ background: '#fff', padding: 0 }" />
      <j-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">content</div>
      </j-layout-content>
      <j-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </j-layout-footer>
    </j-layout>
  </j-layout>
</template>
<script lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref<string[]>(['4']),
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
