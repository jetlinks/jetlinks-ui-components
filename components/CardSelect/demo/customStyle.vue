<docs>
---
order: 0
title: 自定义内容
---

</docs>

<template>
    <div class="select">
        <j-card-select v-model:value="value" multiple>
            <j-card-select-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :image="item.image"
                :label="item.label"
            >
                <template #label>
                    {{ item.label }}
                </template>
                <template #image>
                    <img :src="item.image" style="width: 100px" />
                </template>
            </j-card-select-option>
        </j-card-select>

        <j-card-select v-model:value="value1">
            <j-card-select-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
            >
                <span>{{ item.label }}</span>
            </j-card-select-option>
        </j-card-select>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';

const value = ref<any>();
const value1 = ref<any>();
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

<style>
.select {
    display: flex;
    justify-content: space-around;
}
</style>
