<docs>
---
order: 0
title: 不同尺寸
---

通过改变size可设置合适尺寸

</docs>
<template>
    <a-space size="large">
        <j-color-picker v-model:hex="hex" size="large" />
        <j-color-picker v-model:hex="hex" size="small" />
        <j-color-picker v-model:hex="hex" size="mini" />
    </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const hex = ref<string>(`#ffff3a`);

        return {
            hex,
        };
    },
});
</script>
