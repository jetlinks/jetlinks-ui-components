<template>
    <Spin v-bind="props">
        <template v-for="item in Object.keys(slots)" :key="item">
            <slot :name="item"></slot>
        </template>
    </Spin>
</template>

<script lang="ts" setup>
import { Spin } from 'ant-design-vue';
import { useSlots } from 'vue';
import SpinProps from 'ant-design-vue/es/spin';

const slots = useSlots();

const props = defineProps({
    ...SpinProps.props,
});
</script>

<style lang="less" scoped></style>
