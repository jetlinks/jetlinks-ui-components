<docs>
---
order: 1
title: 带输入框的滑块
---

## zh-CN

和 [数字输入框](/components/input-number/) 组件保持同步。

</docs>

<template>
  <div>
    <j-row>
      <j-col :span="12">
        <j-slider v-model:value="inputValue1" :min="1" :max="20" />
      </j-col>
      <j-col :span="4">
        <j-input-number v-model:value="inputValue1" :min="1" :max="20" style="margin-left: 16px" />
      </j-col>
    </j-row>
    <j-row>
      <j-col :span="12">
        <j-slider v-model:value="inputValue" :min="0" :max="1" :step="0.01" />
      </j-col>
      <j-col :span="4">
        <j-input-number
          v-model:value="inputValue"
          :min="0"
          :max="1"
          :step="0.01"
          style="margin-left: 16px"
        />
      </j-col>
    </j-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref<number>(0);
    const inputValue1 = ref<number>(1);
    return {
      inputValue,
      inputValue1,
    };
  },
});
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
