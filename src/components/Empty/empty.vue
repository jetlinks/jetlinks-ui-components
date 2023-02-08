<template>
    <Empty></Empty>
</template>

<script lang="ts" setup>
import { Empty } from 'ant-design-vue';
import { useSlots } from 'vue';
import NoData from './assets/nodata.svg';
const slots = useSlots();
const renderArr = Object.keys(slots);
</script>

<style lang="less" scoped>
:deep(.ant-empty-description) {
    color: #b3b3b3;
    font-size: 14px;
}
</style>
