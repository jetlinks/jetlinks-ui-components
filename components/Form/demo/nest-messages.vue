<docs>
---
order: 5
title: 嵌套结构与校验信息
---

## zh-CN

`name` 属性支持嵌套数据结构。通过 `validateMessages` 或 `message` 自定义校验信息模板，模板内容可参考[此处](https://github.com/vueComponent/ant-design-vue/blob/main/components/form/utils/messages.ts)。

</docs>
<template>
  <j-form
    :model="formState"
    v-bind="layout"
    name="nest-messages"
    :validate-messages="validateMessages"
    @finish="onFinish"
  >
    <j-form-item :name="['user', 'name']" label="Name" :rules="[{ required: true }]">
      <j-input v-model:value="formState.user.name" />
    </j-form-item>
    <j-form-item :name="['user', 'email']" label="Email" :rules="[{ type: 'email' }]">
      <j-input v-model:value="formState.user.email" />
    </j-form-item>
    <j-form-item :name="['user', 'age']" label="Age" :rules="[{ type: 'number', min: 0, max: 99 }]">
      <j-input-number v-model:value="formState.user.age" />
    </j-form-item>
    <j-form-item :name="['user', 'website']" label="Website">
      <j-input v-model:value="formState.user.website" />
    </j-form-item>
    <j-form-item :name="['user', 'introduction']" label="Introduction">
      <j-textarea v-model:value="formState.user.introduction" />
    </j-form-item>
    <j-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <j-button type="primary" html-type="submit">Submit</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };

    const formState = reactive({
      user: {
        name: '',
        age: undefined,
        email: '',
        website: '',
        introduction: '',
      },
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    return {
      formState,
      onFinish,
      layout,
      validateMessages,
    };
  },
});
</script>
