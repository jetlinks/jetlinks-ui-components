<docs>
---
order: 4
title: 触发事件
---

## zh-CN

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

</docs>

<template>
  <j-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me, Click menu item
      <DownOutlined />
    </a>
    <template #overlay>
      <j-menu @click="onClick">
        <j-menu-item key="1">1st menu item</j-menu-item>
        <j-menu-item key="2">2nd menu item</j-menu-item>
        <j-menu-item key="3">3rd menu item</j-menu-item>
      </j-menu>
    </template>
  </j-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const onClick: MenuProps['onClick'] = ({ key }) => {
      console.log(`Click on item ${key}`);
    };
    return {
      onClick,
    };
  },
});
</script>
