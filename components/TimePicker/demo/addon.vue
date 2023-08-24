<docs>
---
order: 1
title: 附加内容
---

## zh-CN

在 TimePicker 选择框底部显示自定义的内容。

</docs>

<template>
  <j-space direction="vertical">
    <j-time-picker v-model:value="value" v-model:open="open" @openChange="handleOpenChange">
      <template #renderExtraFooter="{ prefixCls }">
        <j-button size="small" type="primary" @click="handleClose">OK {{ prefixCls }}</j-button>
      </template>
    </j-time-picker>
    <j-time-picker v-model:value="value" v-model:open="open2">
      <template #renderExtraFooter>
        <j-button size="small" type="primary" @click="handleClose">OK</j-button>
      </template>
    </j-time-picker>
  </j-space>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const open = ref(false);
    const open2 = ref(false);
    const value = ref<Dayjs>();

    const handleOpenChange = (openStatus: boolean) => {
      console.log('open', openStatus);
      open.value = openStatus;
    };

    const handleClose = () => {
      open.value = false;
      open2.value = false;
    };

    return {
      value,
      open,
      open2,
      handleOpenChange,
      handleClose,
    };
  },
});
</script>
