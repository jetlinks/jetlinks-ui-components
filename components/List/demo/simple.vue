<docs>
---
order: 1
title: 简单列表
---

## zh-CN

列表拥有大、中、小三种尺寸。
通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
可通过设置 `header` 和 `footer`，来自定义列表头部和尾部。

</docs>

<template>
  <h3 :style="{ margin: '16px 0' }">Small Size</h3>
  <j-list size="small" bordered :data-source="data">
    <template #renderItem="{ item }">
      <j-list-item>{{ item }}</j-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </j-list>
  <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
  <j-list bordered :data-source="data">
    <template #renderItem="{ item }">
      <j-list-item>{{ item }}</j-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </j-list>
  <h3 :style="{ margin: '16px 0' }">Large Size</h3>
  <j-list size="large" bordered :data-source="data">
    <template #renderItem="{ item }">
      <j-list-item>{{ item }}</j-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </j-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const data: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script>
