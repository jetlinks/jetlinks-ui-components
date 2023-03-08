<template>
    <Pagination v-bind="props" :class="className" />
</template>

<script lang="ts" setup name="JPagination">
import { Pagination } from 'ant-design-vue';
import { computed, defineProps, reactive } from 'vue';
import { paginationProps } from 'ant-design-vue/lib/pagination';
import { omit } from 'lodash';

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

const { isShowContent } = reactive(props);

const className = computed(() => {
    return {
        'show-content': !isShowContent,
    };
});
</script>
