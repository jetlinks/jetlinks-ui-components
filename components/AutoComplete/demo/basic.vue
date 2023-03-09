<docs>
---
order: 0
title: 自动完成
---

通过 options 设置自动完成的数据源。
  
</docs>
<template>
    <j-auto-complete
        style="width: 200px"
        :options="options"
        v-model:value="value"
    />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Option {
    value: string;
    label: string;
}

export default defineComponent({
    setup() {
        const value = ref();
        return {
            value,
            options: ref<Option[]>([
                { label: 'Burns Bay Road-label', value: 'Burns Bay Road' },
                { label: 'Downing Street-label', value: 'Downing Street' },
                { label: 'Wall Street-label', value: 'Wall Street' },
            ]),
        };
    },
});
</script>
