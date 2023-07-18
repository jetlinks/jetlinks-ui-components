<template>
    <Select v-bind="props" v-model:value="myValue" @select="select">
        <SelectOption key="true" :value="trueValue">
            {{ trueText }}</SelectOption
        >
        <SelectOption key="false" :value="falseValue">
            {{ falseText }}</SelectOption
        >
    </Select>
</template>

<script setup lang="ts" name="JSelectBoolean">
import { Select, SelectOption } from 'ant-design-vue';
import { selectProps } from 'ant-design-vue/lib/select';
import { defineProps, watch, ref } from 'vue';
import { isBoolean } from 'lodash-es';

const props = defineProps({
    ...selectProps(),
    trueText: {
        type: String,
        default: '是',
    },
    falseText: {
        type: String,
        default: '否',
    },
    trueValue: {
        type: [String, Boolean, Number],
        default: true,
    },
    falseValue: {
        type: [String, Boolean, Number],
        default: false,
    },
});

const myValue = ref();

watch(
    () => props.value,
    () => {
        if (isBoolean(props.value)) {
            myValue.value = `${props.value}`;
        } else {
            myValue.value = props.value;
        }
    },
    { immediate: true },
);
</script>

<style scoped></style>
