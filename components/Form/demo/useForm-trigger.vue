<docs>
---
order: 10
title: useForm 自定义触发时机
---

## zh-CN

通过 [`Form.useForm`](#useForm) 自定义触发校验时机

</docs>

<template>
  <j-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <j-form-item label="Activity name" v-bind="validateInfos.name">
      <j-input
        v-model:value="modelRef.name"
        @blur="validate('name', { trigger: 'blur' }).catch(() => {})"
      />
    </j-form-item>
    <j-form-item label="Activity zone" v-bind="validateInfos.region">
      <j-select v-model:value="modelRef.region" placeholder="please select your zone">
        <j-select-option value="shanghai">Zone one</j-select-option>
        <j-select-option value="beijing">Zone two</j-select-option>
      </j-select>
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
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input Activity name',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
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
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
