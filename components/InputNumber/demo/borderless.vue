<docs>
---
order: 6
title: 无边框
---

## zh-CN

没有边框。

</docs>

<template>
    <div>
        <j-input-number
            id="inputNumber"
            v-model:value="value"
            :bordered="false"
            :min="1"
            :max="10"
        />
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
