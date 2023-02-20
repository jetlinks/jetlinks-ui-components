<docs>
---
order: 0
title: 基本用法
---

基本用法

</docs>
<template>
    <j-color-picker
        default-color="#000000"
        @change="colorChange"
        @finish="colorFinish"
    />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const hex = ref<string>(`#000`);

        /**
         * 颜色值改变
         * @param e
         */
        const colorChange = (e) => {
            console.log('basic change', e);
        };
        /**
         * 完成
         * @param e
         */
        const colorFinish = (e) => {
            console.log('basic finish', e);
        };

        return {
            hex,
            colorChange,
            colorFinish,
        };
    },
});
</script>
