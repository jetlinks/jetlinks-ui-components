<docs>
---
order: 0
title: 三种大小
---

## zh-CN

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

</docs>

<template>
    <j-space>
        <j-input-number
            v-model:value="value1"
            size="large"
            :min="1"
            :max="100000"
        />
        <j-input-number v-model:value="value2" :min="1" :max="100000" />
        <j-input-number
            v-model:value="value3"
            size="small"
            :min="1"
            :max="100000"
        />
    </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const value1 = ref<number>(3);
        const value2 = ref<number>(3);
        const value3 = ref<number>(3);

        return {
            value1,
            value2,
            value3,
        };
    },
});
</script>
