<docs>
---
order: 6
title: 超出边界
---

## zh-CN

当通过受控将 `value` 超出边界时，提供警告样式。

</docs>

<template>
    <j-space>
        <j-input-number v-model:value="value" :min="1" :max="10" />
        <j-button type="primary" @click="value = 99">Reset</j-button>
    </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const value = ref<number>(99);

        return {
            value,
        };
    },
});
</script>
