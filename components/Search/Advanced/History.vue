<template>
    <Dropdown
        class="search-history-dropdown"
        placement="bottomLeft"
        :visible="historyVisible"
        @visibleChange="visibleChange"
    >
        <Button ghost type="primary" @click.stop="click" @keyup.enter="click">
            搜索
            <AIcon type="DownOutlined" @click.stop="historyVisible = true" />
        </Button>
        <template #overlay>
            <j-menu v-if="!showEmpty" class="search-history-items">
                <j-menu-item v-for="item in historyList" :key="item.id">
                    <div class="search-history-item">
                        <div
                            class="history-item--title"
                            @click.stop="itemClick(item.content)"
                        >
                            <div class="">{{ item.name }}</div>
                        </div>
                        <j-popconfirm
                            title="确认删除吗？"
                            placement="top"
                            :ok-button-props="{
                                loading: deleteLoading,
                            }"
                            @confirm.stop="deleteHistory(item.id)"
                        >
                            <span class="delete">
                                <AIcon type="DeleteOutlined" />
                            </span>
                        </j-popconfirm>
                    </div>
                </j-menu-item>
            </j-menu>
            <div v-else class="search-history-empty">
                <j-empty />
            </div>
        </template>
        <template #icon>
            <AIcon type="SearchOutlined" />
        </template>
    </Dropdown>
</template>

<script setup lang="ts" name="SearchHistory">
import type { SearchHistoryList } from '../typing';
import { computed, ref } from 'vue';
import type { PropType } from 'vue';
import { isFunction } from 'lodash-es';
import {
    Menu as JMenu,
    Menu as JMenuItem,
    AIcon,
    Empty as JEmpty,
    Popconfirm as JPopconfirm,
    Dropdown,
    Button,
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
        type: Function as PropType<(target: string) => Promise<any>>,
        default: null,
    },
});

const historyList = ref<SearchHistoryList[]>([]);
const historyVisible = ref(false);
const deleteLoading = ref(false);
const showEmpty = computed(() => {
    return historyList.value.length === 0;
});

const visibleChange = async (visible: boolean) => {
    historyVisible.value = visible;
    if (visible && props.request) {
        const resp = await props.request(props.target);
        if (resp.success && resp.result.length) {
            historyList.value = resp.result.filter((item) => item.content);
        } else {
            historyList.value = [];
        }
    }
};

const click = () => {
    emit('click');
};

const itemClick = (content: string) => {
    historyVisible.value = false;
    emit('itemClick', content);
};

const deleteHistory = async (id: string) => {
    if (props.deleteRequest && isFunction(props.deleteRequest)) {
        deleteLoading.value = true;
        const resp = await props.deleteRequest(props.target, id);
        deleteLoading.value = false;
        if (resp.success) {
            historyVisible.value = false;
        }
    }
};
</script>

<style scoped lang="less"></style>
