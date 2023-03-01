<docs>
---
order: 7
title: 菜单隐藏方式
---

## zh-CN

默认是点击关闭菜单，可以关闭此功能。

</docs>

<template>
  <j-dropdown v-model:visible="visible">
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <j-menu @click="handleMenuClick">
        <j-menu-item key="1">Clicking me will not close the menu.</j-menu-item>
        <j-menu-item key="2">Clicking me will not close the menu also.</j-menu-item>
        <j-menu-item key="3">Clicking me will close the menu</j-menu-item>
      </j-menu>
    </template>
  </j-dropdown>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const visible = ref(false);
    const handleMenuClick: MenuProps['onClick'] = e => {
      if (e.key === '3') {
        visible.value = false;
      }
    };
    return {
      visible,
      handleMenuClick,
    };
  },
});
</script>
