<docs>
---
order: 6
title: 多级菜单
---

## zh-CN

传入的菜单里有多个层级。

</docs>

<template>
  <j-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Cascading menu
      <DownOutlined />
    </a>
    <template #overlay>
      <j-menu>
        <j-menu-item>1st menu item</j-menu-item>
        <j-menu-item>2nd menu item</j-menu-item>
        <j-sub-menu key="sub1" title="sub menu">
          <j-menu-item>3rd menu item</j-menu-item>
          <j-menu-item>4th menu item</j-menu-item>
        </j-sub-menu>
        <j-sub-menu key="sub2" title="disabled sub menu" disabled>
          <j-menu-item>5d menu item</j-menu-item>
          <j-menu-item>6th menu item</j-menu-item>
        </j-sub-menu>
      </j-menu>
    </template>
  </j-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>
