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
import ResultProps from 'ant-design-vue/es/result';
import NoFound from './noFound.vue';

const slots = useSlots();

const props = defineProps({
    ...ResultProps.props,
});

const status = props.status;
</script>

<style lang="less" scoped>
:deep(.ant-btn-primary) {
    background: #315efb;
    border-color: #315efb;
}
.info {
    :deep(svg) {
        color: #4293ff;
    }
}
.success {
    :deep(svg) {
        color: #32d4a4;
    }
}
.warning {
    :deep(svg) {
        color: #e7ad56;
    }
}
.error {
    :deep(svg) {
        color: #f76f5d;
    }
}
</style>
