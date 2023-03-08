<docs>
---
order: 6
title: 表单验证
---

## zh-CN

Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `FormItem` 的 `name` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)

</docs>

<template>
  <j-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <j-form-item ref="name" label="Activity name" name="name">
      <j-input v-model:value="formState.name" />
    </j-form-item>
    <j-form-item label="Activity zone" name="region">
      <j-select v-model:value="formState.region" placeholder="please select your zone">
        <j-select-option value="shanghai">Zone one</j-select-option>
        <j-select-option value="beijing">Zone two</j-select-option>
      </j-select>
    </j-form-item>
    <j-form-item label="Activity time" required name="date1">
      <j-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </j-form-item>
    <j-form-item label="Instant delivery" name="delivery">
      <j-switch v-model:checked="formState.delivery" />
    </j-form-item>
    <j-form-item label="Activity type" name="type">
      <j-checkbox-group v-model:value="formState.type">
        <j-checkbox value="1" name="type">Online</j-checkbox>
        <j-checkbox value="2" name="type">Promotion</j-checkbox>
        <j-checkbox value="3" name="type">Offline</j-checkbox>
      </j-checkbox-group>
    </j-form-item>
    <j-form-item label="Resources" name="resource">
      <j-radio-group v-model:value="formState.resource">
        <j-radio value="1">Sponsor</j-radio>
        <j-radio value="2">Venue</j-radio>
      </j-radio-group>
    </j-form-item>
    <j-form-item label="Activity form" name="desc">
      <j-textarea v-model:value="formState.desc" />
    </j-form-item>
    <j-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <j-button type="primary" @click="onSubmit">Create</j-button>
      <j-button style="margin-left: 10px" @click="resetForm">Reset</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, reactive, ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';

interface FormState {
  name: string;
  region: string | undefined;
  date1: Dayjs | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const rules: Record<string, Rule[]> = {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
      type: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        },
      ],
      resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
      desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch(error => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
