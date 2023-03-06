<docs>
---
order: 5
title: RadioGroup 组合 - 配置方式
---

## zh-CN

通过配置 `options` 参数来渲染单选框。

</docs>
<template>
  <j-space direction="vertical">
    <j-radio-group v-model:value="value1" :options="plainOptions" />
    <j-radio-group v-model:value="value2" :options="optionsWithDisabled" />
    <j-radio-group v-model:value="value3" :options="plainOptions" disabled />
    <j-radio-group v-model:value="value1" option-type="button" :options="plainOptions" />
    <j-radio-group v-model:value="value2" option-type="button" :options="optionsWithDisabled" />
    <j-radio-group v-model:value="value3" option-type="button" :options="plainOptions" disabled />
  </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RadioGroupProps } from 'ant-design-vue';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled: RadioGroupProps['options'] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
export default defineComponent({
  data() {
    const value1 = ref<string>('Apple');
    const value2 = ref<string>('Apple');
    const value3 = ref<string>('Apple');

    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1,
      value2,
      value3,
    };
  },
});
</script>
