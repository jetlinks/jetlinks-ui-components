<docs>
---
order: 6
title: 大小
---

## zh-CN

不同大小的级联选择器。

</docs>
<template>
  <j-cascader v-model:value="value" placeholder="Please select" size="large" :options="options" />
  <br />
  <br />
  <j-cascader v-model:value="value" placeholder="Please select" :options="options" />
  <br />
  <br />
  <j-cascader v-model:value="value" placeholder="Please select" size="small" :options="options" />
  <br />
  <br />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { CascaderProps } from 'ant-design-vue';
const options: CascaderProps['options'] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    return {
      value: ref<string[]>([]),
      options,
    };
  },
});
</script>
