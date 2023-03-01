<docs>
---
order: 5
title: 带下拉框的按钮
---

## zh-CN

左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。

</docs>

<template>
  <div class="demo-dropdown-wrap">
    <j-dropdown-button @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <j-menu @click="handleMenuClick">
          <j-menu-item key="1">
            <UserOutlined />
            1st menu item
          </j-menu-item>
          <j-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </j-menu-item>
          <j-menu-item key="3">
            <UserOutlined />
            3rd item
          </j-menu-item>
        </j-menu>
      </template>
    </j-dropdown-button>
    <j-dropdown-button>
      Dropdown
      <template #overlay>
        <j-menu @click="handleMenuClick">
          <j-menu-item key="1">
            <UserOutlined />
            1st menu item
          </j-menu-item>
          <j-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </j-menu-item>
          <j-menu-item key="3">
            <UserOutlined />
            3rd item
          </j-menu-item>
        </j-menu>
      </template>
      <template #icon><UserOutlined /></template>
    </j-dropdown-button>
    <j-dropdown-button disabled @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <j-menu @click="handleMenuClick">
          <j-menu-item key="1">
            <UserOutlined />
            1st menu item
          </j-menu-item>
          <j-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </j-menu-item>
          <j-menu-item key="3">
            <UserOutlined />
            3rd item
          </j-menu-item>
        </j-menu>
      </template>
    </j-dropdown-button>
    <j-dropdown>
      <template #overlay>
        <j-menu @click="handleMenuClick">
          <j-menu-item key="1">
            <UserOutlined />
            1st menu item
          </j-menu-item>
          <j-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </j-menu-item>
          <j-menu-item key="3">
            <UserOutlined />
            3rd item
          </j-menu-item>
        </j-menu>
      </template>
      <j-button>
        Button
        <DownOutlined />
      </j-button>
    </j-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    UserOutlined,
    DownOutlined,
  },
  setup() {
    const handleButtonClick = (e: Event) => {
      console.log('click left button', e);
    };
    const handleMenuClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };
    return {
      handleButtonClick,
      handleMenuClick,
    };
  },
});
</script>
<style lang="less" scoped>
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
