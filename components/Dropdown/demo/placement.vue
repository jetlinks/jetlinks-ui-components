<docs>
---
order: 1
title: 弹出位置
---

## zh-CN

支持 6 个弹出位置。

</docs>

<template>
  <div id="components-dropdown-demo-placement">
    <template v-for="(placement, index) in placements" :key="placement">
      <j-dropdown :placement="placement">
        <j-button>{{ placement }}</j-button>
        <template #overlay>
          <j-menu>
            <j-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
              </a>
            </j-menu-item>
            <j-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
              </a>
            </j-menu-item>
            <j-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
              </a>
            </j-menu-item>
          </j-menu>
        </template>
      </j-dropdown>
      <br v-if="index === 2" />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { DropdownProps } from 'ant-design-vue';
export default defineComponent({
  setup() {
    return {
      placements: [
        'bottomLeft',
        'bottom',
        'bottomRight',
        'topLeft',
        'top',
        'topRight',
      ] as DropdownProps['placement'][],
    };
  },
});
</script>
<style>
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
