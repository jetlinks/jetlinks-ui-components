<docs>
---
order: 3
title: 自定义提示
---

## zh-CN

使用 `tipFormatter` 可以格式化 `Tooltip` 的内容，设置 `tipFormatter={null}`，则隐藏 `Tooltip`。

</docs>

<template>
  <div>
    <j-slider :tip-formatter="formatter" />
    <j-slider :tip-formatter="null" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const disabled = ref<boolean>(false);
    const formatter = (value: number) => {
      return `${value}%`;
    };

    return {
      disabled,
      formatter,
    };
  },
});
</script>
```
