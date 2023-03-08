<docs>
---
order: 3
title: 高精度小数
---

## zh-CN

通过 `stringMode` 开启高精度小数支持，`change` 事件将返回 string 类型。
对于旧版浏览器，你需要 BigInt polyfill。

</docs>

<template>
    <j-input-number
        v-model:value="value"
        style="width: 200px"
        :min="0"
        :max="10"
        :step="0.00000000000001"
        string-mode
    />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const value = ref<string>('1');

        return {
            value,
        };
    },
});
</script>
