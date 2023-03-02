<docs>
---
order: 0
title: 基本
---

## zh-CN

最简单的下拉菜单。

</docs>

<template>
  <j-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <j-menu>
        <j-menu-item>
          <a href="javascript:;">1st menu item</a>
        </j-menu-item>
        <j-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </j-menu-item>
        <j-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </j-menu-item>
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
