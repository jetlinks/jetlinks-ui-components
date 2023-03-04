<template>
    <NoFound v-if="status === '404'" v-bind="props">
        <template #extra>
            <slot name="extra"></slot>
        </template>
    </NoFound>
    <Result v-else v-bind="props" :class="['info', status]">
        <template v-for="item in Object.keys(slots)" :key="item">
            <slot v-if="item !== 'extra'" :name="item"></slot>
        </template>
        <template #extra>
            <slot name="extra"></slot>
        </template>
    </Result>
</template>

<script lang="ts" setup>
import { Result } from 'ant-design-vue';
import { useSlots } from 'vue';
import { resultProps } from 'ant-design-vue/lib/result';
import NoFound from './noFound.vue';

const slots = useSlots();

const props = defineProps({
    ...resultProps(),
});
</script>
