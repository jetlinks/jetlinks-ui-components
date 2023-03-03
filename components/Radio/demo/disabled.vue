<docs>
---
order: 1
title: 不可用
---

## zh-CN

Radio 不可用。

</docs>
<template>
  <div>
    <j-radio v-model:checked="checked1" :disabled="disabled">Disabled</j-radio>
    <br />
    <j-radio v-model:checked="checked2" :disabled="disabled">Disabled</j-radio>
    <div :style="{ marginTop: 20 }">
      <j-button type="primary" @click="toggleDisabled">Toggle disabled</j-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const disabled = ref<boolean>(true);
    const checked1 = ref<boolean>(false);
    const checked2 = ref<boolean>(false);

    const toggleDisabled = () => {
      disabled.value = !disabled.value;
    };

    return {
      disabled,
      checked1,
      checked2,
      toggleDisabled,
    };
  },
});
</script>
