<docs>
---
order: 0
title: 自动完成
---

通过 options 设置自动完成的数据源。
  
</docs>
<template>
    <j-auto-complete width="200px" :options="options" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Option {
    value: string;
}

export default defineComponent({
    setup() {
        return {
            options: ref<Option[]>([
                { value: 'Burns Bay Road' },
                { value: 'Downing Street' },
                { value: 'Wall Street' },
            ]),
        };
    },
});
</script>
