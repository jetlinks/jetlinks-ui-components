<docs>
---
order: 0
title: 选择器
---

从已有条目中选择，可筛选
  
</docs>
<template>
    <j-select width="200px" filterable :options="options" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Option {
    label: string;
    value: string;
}

export default defineComponent({
    setup() {
        return {
            options: ref<Option[]>([
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'tom', label: 'Tom' },
            ]),
        };
    },
});
</script>
