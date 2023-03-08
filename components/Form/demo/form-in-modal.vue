<docs>
---
order: 14
title: 弹出层中的新建表单
---

## zh-CN

当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。

</docs>
<template>
  <div>
    <j-button type="primary" @click="visible = true">New Collection</j-button>
    <j-modal
      v-model:visible="visible"
      title="Create a new collection"
      ok-text="Create"
      cancel-text="Cancel"
      @ok="onOk"
    >
      <j-form ref="formRef" :model="formState" layout="vertical" name="form_in_modal">
        <j-form-item
          name="title"
          label="Title"
          :rules="[{ required: true, message: 'Please input the title of collection!' }]"
        >
          <j-input v-model:value="formState.title" />
        </j-form-item>
        <j-form-item name="description" label="Description">
          <j-textarea v-model:value="formState.description" />
        </j-form-item>
        <j-form-item name="modifier" class="collection-create-form_last-form-item">
          <j-radio-group v-model:value="formState.modifier">
            <j-radio value="public">Public</j-radio>
            <j-radio value="private">Private</j-radio>
          </j-radio-group>
        </j-form-item>
      </j-form>
    </j-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue';
import type { FormInstance } from 'ant-design-vue';

interface Values {
  title: string;
  description: string;
  modifier: string;
}

export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>();
    const visible = ref(false);
    const formState = reactive<Values>({
      title: '',
      description: '',
      modifier: 'public',
    });

    const onOk = () => {
      formRef.value
        .validateFields()
        .then(values => {
          console.log('Received values of form: ', values);
          console.log('formState: ', toRaw(formState));
          visible.value = false;
          formRef.value.resetFields();
          console.log('reset formState: ', toRaw(formState));
        })
        .catch(info => {
          console.log('Validate Failed:', info);
        });
    };

    return {
      formState,
      formRef,
      visible,
      onOk,
    };
  },
});
</script>
<style>
.collection-create-form_last-form-item {
  margin-bottom: 0;
}
</style>
