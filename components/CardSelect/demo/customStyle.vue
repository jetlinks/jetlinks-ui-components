<docs>
---
order: 5
title: 自定义内容
---

</docs>

<template>
    <div class="select">
        <j-card-select v-model:value="value" multiple :options="options">
            <template #title="{ title, option }">
                <span class="custom-title"
                    >{{ title }} {{ option.subLabel }}</span
                >
            </template>
            <template #subLabel="{ subLabel }">
                <span class="custom-sub-label">{{ subLabel }}</span>
            </template>
        </j-card-select>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';

const value = ref<any>('1');
const value1 = ref<any>();
const state = reactive({
    options: [
        {
            value: '1',
            label: '识别性',
            subLabel: '特殊的label',
            image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
        {
            value: '2',
            label: '独特性',
            subLabel: '特殊的label',
            image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        },
    ],
});

const { options } = toRefs(state);
</script>

<style>
.select {
    width: 50%;
}
.custom-title {
    font-size: 16px;
    color: red;
}
</style>
