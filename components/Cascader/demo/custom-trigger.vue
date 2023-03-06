<docs>
---
order: 2
title: 可以自定义显示
---

## zh-CN

切换按钮和结果分开。


</docs>
<template>
  <span>
    {{ text }} &nbsp;
    <j-cascader
      v-model:value="value"
      placeholder="Please select"
      :options="options"
      @change="onChange"
    >
      <a href="#">Change city</a>
    </j-cascader>
  </span>
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
    const value = ref<string[]>([]);
    const text = ref<string>('Unselect');

    const onChange: CascaderProps['onChange'] = (_value, selectedOptions) => {
      text.value = selectedOptions.map(o => o.label).join(', ');
    };

    return {
      value,
      text,
      options,
      onChange,
    };
  },
});
</script>
