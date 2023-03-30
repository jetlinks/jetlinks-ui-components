<template>
    <div class="search-history-warp">
        <FormItemRest>
            <Button
                class="search-history-button"
                type="primary"
                html-type="submit"
            >
                搜索
            </Button>
        </FormItemRest>
        <Popover
            placement="bottom"
            trigger="click"
            overlay-class-name="search-history-list-pop"
            :visible="historyVisible"
            @visibleChange="visibleChange"
        >
            <template #content>
                <div v-if="!showEmpty" class="search-history-items">
                    <div
                        v-for="item in historyList"
                        :key="item.id"
                        class="search-history-item"
                    >
                        <div
                            class="history-item--title"
                            @click="itemClick(item.content)"
                        >
                            <Ellipsis style="width: 100%">{{
                                item.name
                            }}</Ellipsis>
                        </div>
                        <j-popconfirm
                            title="确认删除吗？"
                            placement="top"
                            @confirm="deleteHistory(item)"
                        >
                            <span class="delete">
                                <AIcon type="DeleteOutlined" />
                            </span>
                        </j-popconfirm>
                    </div>
                </div>
                <div v-else class="search-history-empty">
                    <j-empty />
                </div>
            </template>
            <div
                class="search-history-button-icon"
                @click.stop="showHistoryList"
            >
                <AIcon type="DownOutlined" />
            </div>
        </Popover>
    </div>
</template>

<script setup lang="ts" name="SearchHistory">
import type { SearchHistoryList } from '../typing';
import { computed, ref } from 'vue';
import type { PropType } from 'vue';
import { isFunction } from 'lodash-es';
import {
    Menu as JMenu,
    MenuItem as JMenuItem,
    AIcon,
    Empty as JEmpty,
    Popconfirm as JPopconfirm,
    Dropdown,
    Button,
    Input,
    FormItemRest,
    Popover,
    Ellipsis,
    message,
} from '../../components';

type Emit = {
    (event: 'click'): void;
    (event: 'itemClick', data: string): void;
};
const emit = defineEmits<Emit>();

const props = defineProps({
    target: {
        type: String,
        default: '',
        required: true,
    },
    request: {
        type: Function as PropType<(target: string) => Promise<any>>,
        default: null,
    },
    deleteRequest: {
        type: Function as PropType<(target: string, item: any) => Promise<any>>,
        default: null,
    },
    deleteKey: {
        type: String,
        default: 'key',
    },
});

const historyList = ref<SearchHistoryList[]>([]);
const historyVisible = ref(false);
const showEmpty = computed(() => {
    return historyList.value.length === 0;
});

const showHistoryList = async () => {
    if (props.request) {
        const resp = await props.request(props.target);
        if (resp.success && resp.result.length) {
            historyList.value = resp.result.filter((item) => item.content);
        } else {
            historyList.value = [];
        }
    }
};

const visibleChange = async (v: boolean) => {
    historyVisible.value = v;
};

const click = () => {
    emit('click');
};

const itemClick = (content: string) => {
    historyVisible.value = false;
    emit('itemClick', content);
};

const deleteHistory = async (item: any) => {
    if (props.deleteRequest && isFunction(props.deleteRequest)) {
        const resp = await props.deleteRequest(
            props.target,
            item[props.deleteKey],
        );
        historyVisible.value = false;
        if (resp.success || resp.status === 200 || resp.code === 200) {
            message.success('操作成功');
        } else {
            message.error('操作失败');
        }
    }
};
</script>

<style scoped lang="less"></style>
