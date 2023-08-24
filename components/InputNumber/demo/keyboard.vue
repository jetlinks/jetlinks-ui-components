<docs>
---
order: 5
title: 键盘行为
---

## zh-CN

使用 `keyboard` 属性可以控制键盘行为。

</docs>

<template>
    <j-space>
        <j-input-number
            v-model:value="value"
            :keyboard="keyboard"
            :min="1"
            :max="10"
        />
        <j-checkbox v-model:checked="keyboard">Toggle keyboard</j-checkbox>
    </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const value = ref<number>(3);

        return {
            value,
            keyboard: ref(true),
        };
    },
});
</script>
