<docs>
---
order: 0
title: 基本用法
---

## zh-CN

基础列表。

</docs>

<template>
  <j-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <j-list-item>
        <j-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="http://demo.jetlinks.cn:11000/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <j-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </j-list-item-meta>
      </j-list-item>
    </template>
  </j-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script>
