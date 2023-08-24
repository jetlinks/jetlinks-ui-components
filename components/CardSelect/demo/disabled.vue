<docs>
---
order: 2
title: 全部禁用
---

</docs>

<template>
    <j-card-select v-model:value="value" :options="options" disabled multiple>
    </j-card-select>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';

const value = ref<any>();
const state = reactive({
    options: [
        {
            value: '1',
            label: '识别性',
            image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
        {
            value: '2',
            label: '独特性',
            image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
    ],
});

const { options } = toRefs(state);
</script>
