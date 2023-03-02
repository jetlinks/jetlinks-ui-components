<template>
    <Select
        v-bind="props"
        :show-search="props.filterable"
        :filter-option="filterOption"
        :style="{ width: props.width }"
    >
        <slot name="default" />
        <slot name="dropdownRender" />
    </Select>
</template>

<script lang="ts" setup>
import { Select } from 'ant-design-vue';
import { defineProps } from 'vue';
import { SelectProps } from './selectTypes';

const props = defineProps(SelectProps);

const filterOption = (input: string, option: any) => {
    const str = option.label || option.value;
    return String(str).toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
