<docs>
---
order: 24
title: 校验其他组件
---

## zh-CN

以上演示没有出现的表单控件对应的校验演示。

</docs>
<template>
  <j-form
    :model="formState"
    name="validate_other"
    v-bind="formItemLayout"
    @finishFailed="onFinishFailed"
    @finish="onFinish"
  >
    <j-form-item label="Plain Text">
      <span class="ant-form-text">China</span>
    </j-form-item>
    <j-form-item
      name="select"
      label="Select"
      has-feedback
      :rules="[{ required: true, message: 'Please select your country!' }]"
    >
      <j-select v-model:value="formState.select" placeholder="Please select a country">
        <j-select-option value="china">China</j-select-option>
        <j-select-option value="usa">U.S.A</j-select-option>
      </j-select>
    </j-form-item>

    <j-form-item
      name="select-multiple"
      label="Select[multiple]"
      :rules="[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]"
    >
      <j-select
        v-model:value="formState['select-multiple']"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <j-select-option value="red">Red</j-select-option>
        <j-select-option value="green">Green</j-select-option>
        <j-select-option value="blue">Blue</j-select-option>
      </j-select>
    </j-form-item>

    <j-form-item label="InputNumber">
      <j-form-item name="input-number" no-style>
        <j-input-number v-model:value="formState['input-number']" :min="1" :max="10" />
      </j-form-item>
      <span class="ant-form-text">machines</span>
    </j-form-item>

    <j-form-item name="switch" label="Switch">
      <j-switch v-model:checked="formState.switch" />
    </j-form-item>

    <j-form-item name="slider" label="Slider">
      <j-slider
        v-model:value="formState.slider"
        :marks="{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }"
      />
    </j-form-item>

    <j-form-item name="radio-group" label="Radio.Group">
      <j-radio-group v-model:value="formState['radio-group']">
        <j-radio value="a">item 1</j-radio>
        <j-radio value="b">item 2</j-radio>
        <j-radio value="c">item 3</j-radio>
      </j-radio-group>
    </j-form-item>

    <j-form-item
      name="radio-button"
      label="Radio.Button"
      :rules="[{ required: true, message: 'Please pick an item!' }]"
    >
      <j-radio-group v-model:value="formState['radio-button']">
        <j-radio-button value="a">item 1</j-radio-button>
        <j-radio-button value="b">item 2</j-radio-button>
        <j-radio-button value="c">item 3</j-radio-button>
      </j-radio-group>
    </j-form-item>

    <j-form-item name="checkbox-group" label="Checkbox.Group">
      <j-checkbox-group v-model:value="formState['checkbox-group']">
        <j-row>
          <j-col :span="8">
            <j-checkbox value="A" style="line-height: 32px">A</j-checkbox>
          </j-col>
          <j-col :span="8">
            <j-checkbox value="B" style="line-height: 32px" disabled>B</j-checkbox>
          </j-col>
          <j-col :span="8">
            <j-checkbox value="C" style="line-height: 32px">C</j-checkbox>
          </j-col>
          <j-col :span="8">
            <j-checkbox value="D" style="line-height: 32px">D</j-checkbox>
          </j-col>
          <j-col :span="8">
            <j-checkbox value="E" style="line-height: 32px">E</j-checkbox>
          </j-col>
          <j-col :span="8">
            <j-checkbox value="F" style="line-height: 32px">F</j-checkbox>
          </j-col>
        </j-row>
      </j-checkbox-group>
    </j-form-item>

    <j-form-item name="rate" label="Rate">
      <j-rate v-model:value="formState.rate" allow-half />
    </j-form-item>

    <j-form-item name="upload" label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <j-upload
        v-model:fileList="formState.upload"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <j-button>
          <template #icon><UploadOutlined /></template>
          Click to upload
        </j-button>
      </j-upload>
    </j-form-item>

    <j-form-item label="Dragger">
      <j-form-item name="dragger" no-style>
        <j-upload-dragger v-model:fileList="formState.dragger" name="files" action="/upload.do">
          <p class="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </j-upload-dragger>
      </j-form-item>
    </j-form-item>

    <j-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <j-button type="primary" html-type="submit">Submit</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UploadOutlined,
    InboxOutlined,
  },
  setup() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const formState = reactive<Record<string, any>>({
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
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
      formItemLayout,
    };
  },
});
</script>
