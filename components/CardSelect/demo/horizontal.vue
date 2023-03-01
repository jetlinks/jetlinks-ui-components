<docs>
---
order: 4
title: 水平布局
---

</docs>

<template>
    <j-card-select
        v-model:value="value"
        :options="options"
        type="horizontal"
        float="right"
    />
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';

const value = ref<any>();
const state = reactive({
    options: [
        {
            value: '1',
            label: '识别性',
            iconUrl:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
        {
            value: '2',
            label: '独特性',
            iconUrl:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
        {
            value: '3',
            label: '延展性',
            subLabel: '延伸成细丝或展开成薄片而不破裂的性质',
            iconUrl:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
    ],
});

const { options } = toRefs(state);
</script>
