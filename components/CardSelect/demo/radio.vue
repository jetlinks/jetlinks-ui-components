<docs>
---
order: 4
title: 单选
---

</docs>

<template>
    <j-card-select
        v-model:value="value"
        float="right"
        :options="options"
        :column="2"
        :showImage="false"
        :multiple="true"
    >
    </j-card-select>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';

const value = ref<any>();
const state = reactive({
    options: [
        {
            value: '1',
            label: '识别性识别性识别性识别性识别性识别性识别性识别性识别性识别性识别性识别性识别性识别性识别性',
        },
        {
            value: '2',
            label: '独特性',
        },
    ],
});

const { options } = toRefs(state);
</script>
