<docs>
---
order: 4
title: 事件
---

## zh-CN

当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `onmouseup` 时，会触发 `onAfterChange` 事件，并把当前值作为参数传入。

</docs>

<template>
  <div class="code-box-demo">
    <j-slider v-model:value="value1" @afterChange="onAfterChange" />
    <j-slider v-model:value="value2" range :step="10" @afterChange="onAfterChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<[number, number]>([20, 50]);

    const onAfterChange = (value: number) => {
      console.log('afterChange: ', value);
    };

    return {
      value1,
      value2,
      onAfterChange,
    };
  },
});
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
