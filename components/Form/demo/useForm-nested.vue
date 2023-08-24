<docs>
---
order: 9
title: useForm 嵌套表单
---

## zh-CN

通过 [`Form.useForm`](#useForm)  使用点字符串拼接进行嵌套数据校验。

</docs>

<template>
  <j-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <j-form-item label="Activity name" v-bind="validateInfos.name">
      <j-input v-model:value="modelRef.name" />
    </j-form-item>
    <j-form-item label="Sub name" v-bind="validateInfos['sub.name']">
      <j-input v-model:value="modelRef.sub.name" />
    </j-form-item>
    <j-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <j-button type="primary" @click.prevent="onSubmit">Create</j-button>
      <j-button style="margin-left: 10px" @click="reset">Reset</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { Form } from 'ant-design-vue';

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      sub: {
        name: '',
      },
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: 'Please input name',
          },
        ],
        'sub.name': [
          {
            required: true,
            message: 'Please input sub name',
          },
        ],
      }),
    );
    const onSubmit = () => {
      validate()
        .then(res => {
          console.log(res, toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const reset = () => {
      resetFields();
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
    };
  },
});
</script>
