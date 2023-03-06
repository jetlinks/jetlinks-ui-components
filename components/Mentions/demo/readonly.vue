<docs>
---
order: 3
title: 无效或只读
---

## zh-CN

通过 `disabled` 属性设置是否生效。通过 `readonly` 属性设置是否只读。

</docs>
<template>
  <div>
    <div style="margin-bottom: 10px">
      <j-mentions v-model:value="value1" placeholder="this is disabled Mentions" disabled>
        <j-mentions-option v-for="value in options" :key="value" :value="value">
          {{ value }}
        </j-mentions-option>
      </j-mentions>
    </div>
    <j-mentions v-model:value="value2" placeholder="this is readOnly j-mentions" readonly>
      <j-mentions-option v-for="value in options" :key="value" :value="value">
        {{ value }}
      </j-mentions-option>
    </j-mentions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('');
    const value2 = ref<string>('');
    const options = ref<string[]>(['afc163', 'zombieJ', 'yesmeck']);
    return {
      value1,
      value2,
      options,
    };
  },
});
</script>
