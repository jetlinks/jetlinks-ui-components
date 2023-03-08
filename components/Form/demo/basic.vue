<docs>
---
order: 0
title: 基本使用
---

## zh-CN

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

## en-US

Basic Form data control. Includes layout, initial values, validation and submit.
</docs>
<template>
  <j-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <j-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <j-input v-model:value="formState.username" />
    </j-form-item>

    <j-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <j-input-password v-model:value="formState.password" />
    </j-form-item>

    <j-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <j-checkbox v-model:checked="formState.remember">Remember me</j-checkbox>
    </j-form-item>

    <j-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <j-button type="primary" html-type="submit">Submit</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
