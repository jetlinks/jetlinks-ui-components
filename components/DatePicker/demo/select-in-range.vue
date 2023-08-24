<docs>
---
order: 5
title: 选择不超过七天的范围
---

## zh-CN

这里举例如何用 `onCalendarChange` 和 `disabledDate` 来限制动态的日期区间选择。

</docs>
<template>
  <j-range-picker
    :value="hackValue || value"
    :disabled-date="disabledDate"
    @change="onChange"
    @openChange="onOpenChange"
    @calendarChange="onCalendarChange"
  />
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';
type RangeValue = [Dayjs, Dayjs];
export default defineComponent({
  setup() {
    const dates = ref<RangeValue>();
    const value = ref<RangeValue>();
    const hackValue = ref<RangeValue>();

    const disabledDate = (current: Dayjs) => {
      if (!dates.value || (dates.value as any).length === 0) {
        return false;
      }
      const tooLate = dates.value[0] && current.diff(dates.value[0], 'days') > 7;
      const tooEarly = dates.value[1] && dates.value[1].diff(current, 'days') > 7;
      return tooEarly || tooLate;
    };

    const onOpenChange = (open: boolean) => {
      if (open) {
        dates.value = [] as any;
        hackValue.value = [] as any;
      } else {
        hackValue.value = undefined;
      }
    };

    const onChange = (val: RangeValue) => {
      value.value = val;
    };

    const onCalendarChange = (val: RangeValue) => {
      dates.value = val;
    };

    return {
      dates,
      value,
      hackValue,
      disabledDate,
      onOpenChange,
      onChange,
      onCalendarChange,
    };
  },
});
</script>
