<docs>
---
order: 0
title: 是否显示透明度控制块
---

是否显示透明度控制块

</docs>
<template>
    <a-switch v-model:checked="showOpacity" size="small" />
    <br />
    <br />
    <j-color-picker v-model:rgba="rgba" :show-opacity="showOpacity" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const rgba = ref<string>(`rgba(0,0,0,0.5)`);
        const showOpacity = ref(false);

        return {
            rgba,
            showOpacity,
        };
    },
});
</script>
