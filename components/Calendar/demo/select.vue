<docs>
---
order: 3
title: 选择功能
---

## zh-CN

一个通用的日历面板，支持年/月切换。

</docs>

<template>
  <j-alert :message="`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`" />
  <j-calendar :value="date" @select="onSelect" @panelChange="onPanelChange" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

export default defineComponent({
  setup() {
    const date = ref(dayjs('2017-01-25'));
    const selectedValue = ref(dayjs('2017-01-25'));

    const onSelect = (value: Dayjs) => {
      date.value = value;
      selectedValue.value = value;
    };
    const onPanelChange = (value: Dayjs) => {
      date.value = value;
    };
    return {
      date,
      selectedValue,
      onSelect,
      onPanelChange,
    };
  },
});
</script>
