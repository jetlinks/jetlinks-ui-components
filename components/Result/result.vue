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
import { resultProps } from 'ant-design-vue/es/result';
import NoFound from './noFound.vue';

const slots = useSlots();

const props = defineProps({
    ...resultProps(),
});
</script>

<style lang="less" scoped>
@import '../style/variable.less';

:deep(.ant-btn-primary) {
    background: @primary-color;
    border-color: @primary-color;
}
.info {
    :deep(svg) {
        color: @info-color;
    }
}
.success {
    :deep(svg) {
        color: @success-color;
    }
}
.warning {
    :deep(svg) {
        color: @warning-color;
    }
}
.error {
    :deep(svg) {
        color: @error-color;
    }
}
</style>
