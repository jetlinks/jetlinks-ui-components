<docs>
---
order: 13
title: 后缀图标
---

## zh-CN

通过 `suffixIcon` 自定义后缀图标

## en-US

Customize the suffix icon through `suffixIcon`

</docs>

<template>
  <j-space direction="vertical">
    <j-date-picker @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </j-date-picker>
    <j-date-picker placeholder="Select month" picker="month" @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </j-date-picker>
    <j-range-picker @change="onRangeChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </j-range-picker>
    <j-date-picker placeholder="Select week" picker="week" @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </j-date-picker>
    <j-date-picker suffix-icon="ab" @change="onChange" />
    <j-date-picker suffix-icon="ab" placeholder="Select month" picker="month" @change="onChange" />
    <j-range-picker suffix-icon="ab" @change="onRangeChange" />
    <j-date-picker suffix-icon="ab" placeholder="Select week" picker="week" @change="onChange" />
  </j-space>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { Dayjs } from 'dayjs';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    const onChange = (date: Dayjs | string, dateString: string) => {
      console.log(date, dateString);
    };

    const onRangeChange = (date: [Dayjs, Dayjs], dateString: [string, string]) => {
      console.log(date, dateString);
    };
    return {
      onChange,
      onRangeChange,
    };
  },
});
</script>
