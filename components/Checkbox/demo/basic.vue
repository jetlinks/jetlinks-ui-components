<docs>
---
order: 0
title: 基本用法
---

## zh-CN

简单的 checkbox

</docs>

<template>
    <j-checkbox v-model:checked="checked">Checkbox</j-checkbox>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
    return {
        checked: ref(false),
    };
    },
});
</script>
    