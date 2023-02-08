<template>
    <a-spin :spinning="loading">
        <div class="jtable-body">
            <div class="jtable-body-header">
                <div class="jtable-body-header-left">
                    <slot></slot>
                </div>
                <div class="jtable-body-header-right">
                    <slot name="rightExtraRender"></slot>
                    <div
                        class="jtable-body-header-right-button"
                        v-if="!props.model"
                    >
                        <div
                            class="jtable-setting-item"
                            :class="['CARD' === _model ? 'active' : '']"
                            @click="modelChange('CARD')"
                        >
                            <AppstoreOutlined />
                        </div>
                        <div
                            class="jtable-setting-item"
                            :class="['TABLE' === _model ? 'active' : '']"
                            @click="modelChange('TABLE')"
                        >
                            <UnorderedListOutlined />
                        </div>
                    </div>
                </div>
            </div>
            <div class="jtable-content">
                <div
                    class="jtable-alert"
                    v-if="
                        props.alertRender &&
                        props.rowSelection &&
                        props.rowSelection.selectedRowKeys &&
                        props.rowSelection.selectedRowKeys?.length
                    "
                >
                    <a-alert
                        :message="
                            '已选择' +
                            props.rowSelection.selectedRowKeys?.length +
                            '项'
                        "
                        type="info"
                        @close="handleAlertClose"
                    >
                        <template #closeText>
                            <a>取消选择</a>
                        </template>
                    </a-alert>
                </div>
                <div v-if="_model === 'CARD'" class="jtable-card">
                    <div
                        v-if="props.dataSource?.length"
                        class="jtable-card-items"
                        :style="{
                            gridTemplateColumns: `repeat(${column}, 1fr)`,
                        }"
                    >
                        <div
                            class="jtable-card-item"
                            v-for="(item, index) in props.dataSource"
                            :key="index"
                        >
                            <slot
                                name="card"
                                v-bind="item"
                                :index="index"
                            ></slot>
                        </div>
                    </div>
                    <div v-else>
                        <a-empty :image="Empty.PRESENTED_IMAGE_SIMPLE" />
                    </div>
                </div>
                <div v-else>
                    <a-table
                        rowKey="id"
                        :rowSelection="props.rowSelection"
                        :columns="props.columns || []"
                        :dataSource="props.dataSource"
                        :pagination="false"
                    >
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.scopedSlots">
                                <slot :name="column.key" :row="record"></slot>
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>
            <div
                v-if="
                    props?.dataSource?.length &&
                    !noPagination &&
                    type === 'PAGE'
                "
                class="jtable-pagination"
            >
                <slot name="paginationRender">
                    <a-pagination
                        size="small"
                        :total="total"
                        :showQuickJumper="false"
                        :showSizeChanger="true"
                        :current="pageIndex"
                        :page-size="pageSize"
                        :show-total="
                            (total, range) =>
                                `第 ${range[0]} - ${range[1]} 条/总共 ${total} 条`
                        "
                        @change="pageChange"
                        :page-size-options="[12, 24, 48, 60, 100]"
                    />
                </slot>
            </div>
        </div>
    </a-spin>
</template>

<script setup lang="ts">
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import { Empty } from 'ant-design-vue';
import {
    defineEmits,
    onMounted,
    onUnmounted,
    ref,
    watch,
    watchEffect,
} from 'vue';
import type { CommonProps, ModelType } from '../proTableTypes';
// import { defaultProps } from './default';

interface ProTableProps extends CommonProps {
    loading?: boolean;
    pageSize?: number;
    pageIndex?: number;
    total?: number;
}

// props
// const props = defaultProps;
const props = withDefaults(defineProps<ProTableProps>(), {
    loading: false,
    pageSize: 15,
    pageIndex: 0,
    total: 0,
});
// emit
const emit = defineEmits<{
    (e: 'cancelSelect'): void;
}>();

const _model = ref<ModelType>(props.model || 'CARD'); // 模式切换

const column = ref<number>(props?.gridColumn || 4);

// 方法
/**
 * 监听宽度，计算显示卡片个数
 */
const windowChange = () => {
    if (window.innerWidth <= 1440) {
        const _column =
            props?.gridColumn && props.gridColumn < 2 ? props.gridColumn : 2;
        column.value = props.gridColumns ? props.gridColumns[0] : _column;
    } else if (window.innerWidth > 1440 && window.innerWidth <= 1600) {
        const _column =
            props?.gridColumn && props.gridColumn < 3 ? props.gridColumn : 3;
        column.value = props.gridColumns ? props.gridColumns[1] : _column;
    } else if (window.innerWidth > 1600) {
        const _column =
            props?.gridColumn && props.gridColumn < 4 ? props.gridColumn : 4;
        column.value = props.gridColumns ? props.gridColumns[2] : _column;
    }
};

const modelChange = (type: ModelType) => {
    _model.value = type;
};

const handleAlertClose = () => {
    emit('cancelSelect');
};

onMounted(() => {
    window.onresize = () => {
        windowChange();
    };
});

onUnmounted(() => {
    window.onresize = null;
});

watchEffect(() => {
    console.log(props.loading);
});

watch(
    () => props.model,
    (newVal) => {
        if (newVal && ['TABLE', 'CARD'].includes(newVal)) {
            _model.value = newVal;
        }
    },
);
</script>

<style lang="less" scoped>
// @import '~ant-design-vue/es/style/themes/default.less';
.jtable-body {
    width: 100%;
    padding: 0 24px 24px;
    background-color: white;
    .jtable-body-header {
        padding-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .jtable-body-header-right {
            display: flex;
            gap: 8px;
            align-items: center;
            .jtable-body-header-right-button {
                display: flex;
                margin-left: 10px;
                gap: 8px;
                .jtable-setting-item {
                    color: rgba(0, 0, 0, 0.75);
                    font-size: 16px;
                    cursor: pointer;

                    // &:hover {
                    //     color: @primary-color-hover;
                    // }

                    // &.active {
                    //     color: @primary-color-active;
                    // }
                }
            }
        }
    }
    .jtable-content {
        .jtable-alert {
            margin-bottom: 16px;
        }
        .jtable-card {
            .jtable-card-items {
                display: grid;
                grid-gap: 26px;
                .jtable-card-item {
                    display: flex;
                }
            }
        }
    }
    .jtable-pagination {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        /deep/ .ant-pagination-item {
            display: none !important;
        }
    }
}
</style>
