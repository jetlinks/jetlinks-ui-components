<docs>
---
order: 5
title: 自定义触发器
---

要使用自定义触发器，可以设置 `:trigger="null"` 来隐藏默认设定。

</docs>
<template>
  <j-layout>
    <j-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <j-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <j-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </j-menu-item>
        <j-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </j-menu-item>
        <j-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </j-menu-item>
      </j-menu>
    </j-layout-sider>
    <j-layout>
      <j-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </j-layout-header>
      <j-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </j-layout-content>
    </j-layout>
  </j-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
    };
  },
});
</script>
<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
