<docs>
---
order: 0
title: 选择器
---

从已有条目中选择，可筛选

</docs>
<template>
    <j-select
        style="width: 200px"
        v-model:value="value"
        showSearch
        :filterOption="filterOption"
        :options="options"
    >
    </j-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Option {
    label: string;
    value: string;
}

export default defineComponent({
    setup() {
        const value = ref('Jack');

        const filterOption = (input: string, option: any) => {
            const str = option.label || option.value;
            return String(str).toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };

        return {
            value,
            filterOption,
            options: ref<Option[]>([
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'tom', label: 'Tom' },
                { value: 'tom2', label: '测试2' },
            ]),
        };
    },
});
</script>
