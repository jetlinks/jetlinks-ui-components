<docs>
---
order: 23
title: 动态校验规则
---

## zh-CN

根据不同情况执行不同的校验规则。

</docs>
<template>
  <j-form ref="formRef" :model="formState" name="dynamic_rule" v-bind="formItemLayout">
    <j-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <j-input v-model:value="formState.username" />
    </j-form-item>

    <j-form-item
      label="Nickname"
      name="nickname"
      :rules="[{ required: formState.checkNick, message: 'Please input your nickname!' }]"
    >
      <j-input v-model:value="formState.nickname" />
    </j-form-item>

    <j-form-item name="checkNick" v-bind="formTailLayout">
      <j-checkbox v-model:checked="formState.checkNick">Nickname is required</j-checkbox>
    </j-form-item>

    <j-form-item v-bind="formTailLayout">
      <j-button type="primary" @click="onCheck">Check</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';
import type { FormInstance } from 'ant-design-vue';

interface FormState {
  username: string;
  nickname: string;
  checkNick: boolean;
}
export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>();
    const formState = reactive<FormState>({
      username: '',
      nickname: '',
      checkNick: false,
    });
    watch(
      () => formState.checkNick,
      () => {
        formRef.value.validateFields(['nickname']);
      },
      { flush: 'post' },
    );
    const onCheck = async () => {
      try {
        const values = await formRef.value.validateFields();
        console.log('Success:', values);
      } catch (errorInfo) {
        console.log('Failed:', errorInfo);
      }
    };
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8, offset: 4 },
    };
    return {
      formState,
      formItemLayout,
      formTailLayout,
      onCheck,
      formRef,
    };
  },
});
</script>
