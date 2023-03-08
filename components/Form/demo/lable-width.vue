<docs>
---
order: 0
title: 固定 Label 宽度
---

## zh-CN

通过 labelCol.style 设置固定宽度

</docs>
<template>
  <j-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <j-form-item label="Activity name">
      <j-input v-model:value="formState.name" />
    </j-form-item>
    <j-form-item label="Instant delivery">
      <j-switch v-model:checked="formState.delivery" />
    </j-form-item>
    <j-form-item label="Activity type">
      <j-checkbox-group v-model:value="formState.type">
        <j-checkbox value="1" name="type">Online</j-checkbox>
        <j-checkbox value="2" name="type">Promotion</j-checkbox>
        <j-checkbox value="3" name="type">Offline</j-checkbox>
      </j-checkbox-group>
    </j-form-item>
    <j-form-item label="Resources">
      <j-radio-group v-model:value="formState.resource">
        <j-radio value="1">Sponsor</j-radio>
        <j-radio value="2">Venue</j-radio>
      </j-radio-group>
    </j-form-item>
    <j-form-item label="Activity form">
      <j-input v-model:value="formState.desc" type="textarea" />
    </j-form-item>
    <j-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <j-button type="primary" @click="onSubmit">Create</j-button>
      <j-button style="margin-left: 10px">Cancel</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };
    return {
      labelCol: { style: { width: '150px' } },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    };
  },
});
</script>
