<docs>
---
order: 16
title: 时间类控件
---

## zh-CN

时间类组件的 `value` 类型为 `dayjs` 对象，所以在提交服务器前需要预处理。

或者使用 `valueFormat` 组件内部会自动处理。

</docs>
<template>
  <j-form
    :model="formState"
    name="time_related_controls"
    v-bind="formItemLayout"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <j-form-item name="date-picker" label="DatePicker" v-bind="config">
      <j-date-picker v-model:value="formState['date-picker']" value-format="YYYY-MM-DD" />
    </j-form-item>
    <j-form-item name="date-time-picker" label="DatePicker[showTime]" v-bind="config">
      <j-date-picker
        v-model:value="formState['date-time-picker']"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
    </j-form-item>
    <j-form-item name="month-picker" label="MonthPicker" v-bind="config">
      <j-date-picker
        v-model:value="formState['month-picker']"
        value-format="YYYY-MM"
        picker="month"
      />
    </j-form-item>
    <j-form-item name="range-picker" label="RangePicker" v-bind="rangeConfig">
      <j-range-picker v-model:value="formState['range-picker']" value-format="YYYY-MM-DD" />
    </j-form-item>
    <j-form-item name="range-time-picker" label="RangePicker[showTime]" v-bind="rangeConfig">
      <j-range-picker
        v-model:value="formState['range-time-picker']"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
    </j-form-item>
    <j-form-item name="time-picker" label="TimePicker" v-bind="config">
      <j-time-picker v-model:value="formState['time-picker']" format="HH:mm:ss" value-format="HH:mm:ss" />
    </j-form-item>
    <j-form-item
      :wrapper-col="{
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      }"
    >
      <j-button type="primary" html-type="submit">Submit</j-button>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface FormState {
  'date-picker': string;
  'date-time-picker': string;
  'month-picker': string;
  'range-picker': [string, string];
  'range-time-picker': [string, string];
  'time-picker': string;
}
export default defineComponent({
  setup() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config = {
      rules: [{ type: 'string' as const, required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
    };
    const formState = reactive({} as FormState);
    const onFinish = (values: any) => {
      console.log('Success:', values, formState);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
      config,
      rangeConfig,
    };
  },
});
</script>
