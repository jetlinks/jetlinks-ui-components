<docs>
---
order: 0
title: 基本用法
---

## zh-CN

数字输入框。

</docs>

<template>
    <div>
        <j-input-number
            id="inputNumber"
            v-model:value="value"
            :min="1"
            :max="10"
        />
        当前值：{{ value }}
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const value = ref<number>(3);

        return {
            value,
        };
    },
});
</script>
