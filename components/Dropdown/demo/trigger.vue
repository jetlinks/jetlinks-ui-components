<docs>
---
order: 3
title: 触发方式
---

## zh-CN

默认是移入触发菜单，可以点击触发。

</docs>

<template>
  <j-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <j-menu>
        <j-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </j-menu-item>
        <j-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </j-menu-item>
        <j-menu-divider />
        <j-menu-item key="3">3rd menu item</j-menu-item>
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
