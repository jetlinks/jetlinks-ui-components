<docs>
---
order: 7
title: useForm 基本表单
---

## zh-CN

通过 [`Form.useForm`](#useForm) 更加灵活的使用表单组件。

</docs>

<template>
  <j-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <j-form-item label="Activity name" v-bind="validateInfos.name">
      <j-input v-model:value="modelRef.name" />
    </j-form-item>
    <j-form-item label="Activity zone" v-bind="validateInfos.region">
      <j-select v-model:value="modelRef.region" placeholder="please select your zone">
        <j-select-option value="shanghai">Zone one</j-select-option>
        <j-select-option value="beijing">Zone two</j-select-option>
      </j-select>
    </j-form-item>
    <j-form-item label="Activity type" v-bind="validateInfos.type">
      <j-checkbox-group v-model:value="modelRef.type">
        <j-checkbox value="1" name="type">Online</j-checkbox>
        <j-checkbox value="2" name="type">Promotion</j-checkbox>
        <j-checkbox value="3" name="type">Offline</j-checkbox>
      </j-checkbox-group>
    </j-form-item>
    <j-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <j-button type="primary" @click.prevent="onSubmit">Create</j-button>
      <j-button style="margin-left: 10px" @click="resetFields">Reset</j-button>
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
      region: undefined,
      type: [],
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
      type: [
        {
          required: true,
          message: 'Please select type',
          type: 'array',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef, {
      onValidate: (...args) => console.log(...args),
    });
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
