<template>
    <j-dropdown-button
        type="primary"
        placement="bottomLeft"
        :visible="historyVisible"
        @click="click"
        @visibleChange="visibleChange"
    >
        搜索
        <template #overlay>
            <j-menu>
                <template v-if="!showEmpty">
                    <j-menu-item v-for="item in historyList" :key="item.id">
                        <div class="history-item">
                            <span @click.stop="itemClick(item.content)">{{
                                item.name
                            }}</span>
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
                </template>
                <template v-else>
                    <div class="history-empty">
                        <j-empty />
                    </div>
                </template>
            </j-menu>
        </template>
        <template #icon>
            <AIcon type="SearchOutlined" />
        </template>
    </j-dropdown-button>
</template>

<script setup lang="ts" name="SearchHistory">
import type { SearchHistoryList } from '../typing';
import { ref } from 'vue';
import { isFunction } from 'lodash-es';
import {
    Menu as JMenu,
    Button as JButton,
    JMenuItem,
    AIcon,
    Empty as JEmpty,
    Popconfirm as JPopconfirm,
    JDropdownButton,
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
        type: Function,
        default: null,
    },
    deleteRequest: {
        type: Function,
        default: null,
    },
});

const historyList = ref<SearchHistoryList[]>([]);
const historyVisible = ref(false);
const deleteLoading = ref(false);
const showEmpty = ref(false);

const visibleChange = async (visible: boolean) => {
    historyVisible.value = visible;
    if (visible && props.request) {
        const resp = await props.request(props.target);
        if (resp.success && resp.result.length) {
            historyList.value = resp.result.filter((item) => item.content);
            showEmpty.value = false;
        } else {
            showEmpty.value = true;
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

<style scoped lang="less">
@import '../../style/variable.less';

.history-empty {
    width: 200px;
    background-color: #fff;
    box-shadow: @box-shadow-base;
    border-radius: 2px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 200px;
}

.history-item {
    width: 200px;
    display: flex;

    > span {
        flex: 1 1 auto;
    }

    .delete {
        padding: 0 6px;
        flex: 0 0 28px;
    }
}
</style>
