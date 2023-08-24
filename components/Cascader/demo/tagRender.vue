<docs>
---
order: 10
title: 自定义 tag 内容
---

</docs>

<template>
  <j-cascader
    v-model:value="value"
    multiple
    :options="options"
    placeholder="Please select"
    suffix-icon="Shopping Around"
  >
    <template #tagRender="data">
      <j-tag :key="data.value" color="blue">{{ data.label }}</j-tag>
    </template>
  </j-cascader>
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
        value: 'freezeKey',
        label: 'freeze',
        children: [
          {
            value: 'key1',
            label: 'salmon',
          },
          {
            value: 'key2',
            label: 'beef',
          },
        ],
      },
      {
        value: 'fruitsKey',
        label: 'fruits',
        children: [
          {
            value: 'key11',
            label: 'apple',
          },
          {
            value: 'key22',
            label: 'banana',
          },
        ],
      },
    ],
  },
  {
    value: 'Chinese delicious food',
    label: '中国美食',
    children: [
      {
        value: 'key3',
        label: '月饼',
        children: [
          {
            value: 'key4',
            label: '蛋黄馅',
          },
          {
            value: 'key5',
            label: '五仁馅',
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
