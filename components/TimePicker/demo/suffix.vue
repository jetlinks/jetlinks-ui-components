<docs>
---
order: 7
title: 后缀图标
---

## zh-CN

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

</docs>

<template>
  <j-time-picker v-model:value="value" :default-value="dayjs('00:00:00', 'HH:mm:ss')">
    <template #suffixIcon><smile-outlined /></template>
  </j-time-picker>
</template>
<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    return {
      dayjs,
      value: ref<Dayjs>(),
    };
  },
});
</script>
