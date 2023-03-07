<docs>
---
order: 0
title: 格式化展示
---

## zh-CN

通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。

</docs>

<template>
    <j-space>
        <j-input-number
            v-model:value="value1"
            :formatter="
                (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
            :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
        />
        <j-input-number
            v-model:value="value2"
            :min="0"
            :max="100"
            :formatter="(value) => `${value}%`"
            :parser="(value) => value.replace('%', '')"
        />
    </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const value1 = ref<number>(1000);
        const value2 = ref<number>(100);

        return {
            value1,
            value2,
        };
    },
});
</script>
