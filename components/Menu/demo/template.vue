<docs>
---
order: 99
title: 单文件递归菜单
---

## zh-CN
使用单文件方式递归生成菜单。

</docs>

<template>
  <div style="width: 256px">
    <j-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </j-button>
    <j-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <j-menu-item :key="item.key">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.title }}
          </j-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.key" :menu-info="item" />
        </template>
      </template>
    </j-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';

// you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js
const SubMenu = {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  template: `
    <j-sub-menu :key="menuInfo.key">
      <template #icon><MailOutlined /></template>
      <template #title>{{ menuInfo.title }}</template>
      <template v-for="item in menuInfo.children" :key="item.key">
        <template v-if="!item.children">
          <j-menu-item :key="item.key">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.title }}
          </j-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </j-sub-menu>
  `,
  components: {
    PieChartOutlined,
    MailOutlined,
  },
};
const list = [
  {
    key: '1',
    title: 'Option 1',
  },
  {
    key: '2',
    title: 'Navigation 2',
    children: [
      {
        key: '2.1',
        title: 'Navigation 3',
        children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
      },
    ],
  },
];
export default defineComponent({
  components: {
    'sub-menu': SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  },
  setup() {
    const collapsed = ref<boolean>(false);

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };
    return {
      list,
      collapsed,
      toggleCollapsed,
      selectedKeys: ref(['1']),
      openKeys: ref(['2']),
    };
  },
});
</script>
