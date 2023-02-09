<template>
    <div style="display: flex; justify-content: center">
        <a-spin size="large" :spinning="loading" />
    </div>
    <FlexListWrapper
        v-show="!loading"
        :list="dataSource"
        @onReachBottom="onReachBottom"
        :more="total > dataSource.length"
    >
        <template #prev v-if="$slots.prev">
            <slot name="prev"></slot>
        </template>
        <template #item="{ itemData, index }">
            <slot name="card" :itemData="itemData" :index="index"></slot>
        </template>
    </FlexListWrapper>
</template>

<script setup lang="ts">
import FlexListWrapper from './FlexListWrapper.vue';

interface ScrollTableProps {
    dataSource: Record<string, any>[];
    total: number;
    loading: boolean;
}

const props = withDefaults(defineProps<ScrollTableProps>(), {
    total: 0,
    loading: false,
});

const emit = defineEmits<{
    (e: 'onReachBottom'): void;
}>();

const onReachBottom = () => {
    emit('onReachBottom');
};
</script>
