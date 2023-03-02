<docs>
---
order: 1
title: 内嵌菜单
---

## zh-CN

垂直菜单，子菜单内嵌在菜单区域。

</docs>
<template>
  <j-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    @click="handleClick"
  >
    <j-sub-menu key="sub1" @titleClick="titleClick">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
      <j-menu-item-group key="g1">
        <template #icon>
          <QqOutlined />
        </template>
        <template #title>Item 1</template>
        <j-menu-item key="1">Option 1</j-menu-item>
        <j-menu-item key="2">Option 2</j-menu-item>
      </j-menu-item-group>
      <j-menu-item-group key="g2" title="Item 2">
        <j-menu-item key="3">Option 3</j-menu-item>
        <j-menu-item key="4">Option 4</j-menu-item>
      </j-menu-item-group>
    </j-sub-menu>
    <j-sub-menu key="sub2" @titleClick="titleClick">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Two</template>
      <j-menu-item key="5">Option 5</j-menu-item>
      <j-menu-item key="6">Option 6</j-menu-item>
      <j-sub-menu key="sub3" title="Submenu">
        <j-menu-item key="7">Option 7</j-menu-item>
        <j-menu-item key="8">Option 8</j-menu-item>
      </j-sub-menu>
    </j-sub-menu>
    <j-sub-menu key="sub4">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Three</template>
      <j-menu-item key="9">Option 9</j-menu-item>
      <j-menu-item key="10">Option 10</j-menu-item>
      <j-menu-item key="11">Option 11</j-menu-item>
      <j-menu-item key="12">Option 12</j-menu-item>
    </j-sub-menu>
  </j-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1']);
    const handleClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };
    const titleClick = (e: Event) => {
      console.log('titleClick', e);
    };
    watch(
      () => openKeys,
      val => {
        console.log('openKeys', val);
      },
    );
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
});
</script>
