<docs>
---
order: 9
title: 动态加载选项
---

## zh-CN

使用 `loadData` 实现动态加载选项。
> 注意：`loadData` 与 `showSearch` 无法一起使用。

</docs>
<template>
  <j-cascader
    v-model:value="value"
    :options="options"
    :load-data="loadData"
    placeholder="Please select"
    change-on-select
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { CascaderProps } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const options = ref<CascaderProps['options']>([
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        isLeaf: false,
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        isLeaf: false,
      },
    ]);

    const loadData: CascaderProps['loadData'] = selectedOptions => {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;

      // load options lazily
      setTimeout(() => {
        targetOption.loading = false;
        targetOption.children = [
          {
            label: `${targetOption.label} Dynamic 1`,
            value: 'dynamic1',
          },
          {
            label: `${targetOption.label} Dynamic 2`,
            value: 'dynamic2',
          },
        ];
        options.value = [...options.value];
      }, 1000);
    };

    return {
      value: ref<string[]>([]),
      options,
      loadData,
    };
  },
});
</script>
