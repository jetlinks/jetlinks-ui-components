<docs>
---
order: 3
title: 动态增减表单项
---

## zh-CN

动态增加、减少表单项。

## en-US

Add or remove form items dynamically.
</docs>
<template>
  <j-form
    ref="formRef"
    name="dynamic_form_item"
    :model="dynamicValidateForm"
    v-bind="formItemLayoutWithOutLabel"
  >
    <j-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      v-bind="index === 0 ? formItemLayout : {}"
      :label="index === 0 ? 'Domains' : ''"
      :name="['domains', index, 'value']"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'change',
      }"
    >
      <j-input
        v-model:value="domain.value"
        placeholder="please input domain"
        style="width: 60%; margin-right: 8px"
      />
      <MinusCircleOutlined
        v-if="dynamicValidateForm.domains.length > 1"
        class="dynamic-delete-button"
        :disabled="dynamicValidateForm.domains.length === 1"
        @click="removeDomain(domain)"
      />
    </j-form-item>
    <j-form-item v-bind="formItemLayoutWithOutLabel">
      <j-button type="dashed" style="width: 60%" @click="addDomain">
        <PlusOutlined />
        Add field
      </j-button>
    </j-form-item>
    <j-form-item v-bind="formItemLayoutWithOutLabel">
      <j-button type="primary" html-type="submit" @click="submitForm">Submit</j-button>
      <j-button style="margin-left: 10px" @click="resetForm">Reset</j-button>
    </j-form-item>
  </j-form>
</template>

<script lang="ts">
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
import type { FormInstance } from 'ant-design-vue';

interface Domain {
  value: string;
  key: number;
}
export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
  },
  setup() {
    const formRef = ref<FormInstance>();
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    const dynamicValidateForm = reactive<{ domains: Domain[] }>({
      domains: [],
    });
    const submitForm = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', dynamicValidateForm.domains);
        })
        .catch(error => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    const removeDomain = (item: Domain) => {
      let index = dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1);
      }
    };
    const addDomain = () => {
      dynamicValidateForm.domains.push({
        value: '',
        key: Date.now(),
      });
    };
    return {
      formRef,
      formItemLayout,
      formItemLayoutWithOutLabel,
      dynamicValidateForm,
      submitForm,
      resetForm,
      removeDomain,
      addDomain,
    };
  },
});
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
