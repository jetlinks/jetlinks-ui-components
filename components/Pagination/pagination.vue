<template>
    <Pagination v-bind="props" :class="className" />
</template>

<script setup name="JPagination">
import { Pagination } from 'ant-design-vue';
import { computed, defineProps, inject, reactive } from 'vue';
import { paginationProps } from 'ant-design-vue/lib/pagination';
import { omit } from 'lodash-es';

const props = defineProps({
    ...paginationProps(),
    /**
     *  是否显示分页内容
     */
    isShowContent: {
        type: Boolean,
        default: false,
    },
});
const baseProps = omit(props, ['isShowContent']);
const config = inject('pagination', {});

const { isShowContent } = reactive(props);

const className = computed(() => {
    const _isShowContent = config.isShowContent || props.isShowContent;
    console.log('config', config);
    return {
        'show-content': !_isShowContent,
    };
});
</script>
