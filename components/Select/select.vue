<template>
    <Select :filter-option="filterOption" v-bind="props">
        <template v-for="item in slotArr" :key="item" #[item]="scope">
            <slot :name="item" v-bind="scope || {}"></slot>
        </template>
    </Select>
</template>

<script lang="ts" setup>
import { Select } from 'ant-design-vue';
import { defineProps, useSlots } from 'vue';
import { selectProps } from 'ant-design-vue/lib/select';

const slots = useSlots();
const slotArr = Object.keys(slots);

const props = defineProps({ ...selectProps() });

const filterOption = (input: string, option: any) => {
    const str = option.label || option.value;
    return String(str).toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
