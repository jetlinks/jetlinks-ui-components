<docs>
---
order: 2
title: 其他元素
---

## zh-CN

分割线和不可用菜单项。

</docs>

<template>
  <j-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <j-menu>
        <j-menu-item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </j-menu-item>
        <j-menu-item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </j-menu-item>
        <j-menu-divider />
        <j-menu-item key="3" disabled>3rd menu item（disabled）</j-menu-item>
      </j-menu>
    </template>
  </j-dropdown>
</template>
<script lant="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>
