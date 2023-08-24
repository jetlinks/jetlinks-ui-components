<docs>
---
order: 5
title: 表单布局
---

## zh-CN

表单有三种布局。

</docs>

<template>
  <j-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <j-form-item label="Form Layout">
      <j-radio-group v-model:value="formState.layout">
        <j-radio-button value="horizontal">Horizontal</j-radio-button>
        <j-radio-button value="vertical">Vertical</j-radio-button>
        <j-radio-button value="inline">Inline</j-radio-button>
      </j-radio-group>
    </j-form-item>
    <j-form-item label="Field A">
      <j-input v-model:value="formState.fieldA" placeholder="input placeholder" />
    </j-form-item>
    <j-form-item label="Field B">
      <j-input v-model:value="formState.fieldB" placeholder="input placeholder" />
    </j-form-item>
    <j-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <j-button type="primary">Submit</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline';
  fieldA: string;
  fieldB: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      fieldA: '',
      fieldB: '',
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    });
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
    };
  },
});
</script>
