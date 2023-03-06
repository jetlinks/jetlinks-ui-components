<docs>
---
order: 11
title: 后缀图标
---

## zh-CN

自定义后缀图标

</docs>
<template>
  <j-space>
    <j-cascader
      v-model:value="value1"
      style="margin-top: 1rem"
      :options="options"
      placeholder="Please select"
    >
      <template #suffixIcon><smile-outlined class="test" /></template>
    </j-cascader>
    <j-cascader
      v-model:value="value2"
      suffix-icon="ab"
      style="margin-top: 1rem"
      :options="options"
      placeholder="Please select"
    />
  </j-space>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
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
  components: {
    SmileOutlined,
  },
  setup() {
    return {
      value1: ref<string[]>([]),
      value2: ref<string[]>([]),
      options,
    };
  },
});
</script>
