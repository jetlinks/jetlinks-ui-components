<template>
    <div ref="searchRef" class="JSearch-warp">
        <!--  高级模式  -->
        <div
            v-if="props.type === 'advanced'"
            :class="[
                'JSearch-content senior',
                expand ? 'senior-expand' : '',
                screenSize ? 'big' : 'small',
            ]"
        >
            <div
                :class="['JSearch-items', expand ? 'items-expand' : '', layout]"
            >
                <div class="left">
                    <SearchItem
                        :expand="expand"
                        :index="1"
                        :columns="searchItems"
                        :terms-item="terms"
                        @change="(v) => itemValueChange(v, 1)"
                    />
                    <SearchItem
                        v-if="expand"
                        :expand="expand"
                        :index="2"
                        :columns="searchItems"
                        :terms-item="terms"
                        @change="(v) => itemValueChange(v, 2)"
                    />
                    <SearchItem
                        v-if="expand"
                        :expand="expand"
                        :index="3"
                        :columns="searchItems"
                        :terms-item="terms"
                        @change="(v) => itemValueChange(v, 3)"
                    />
                </div>
                <div v-if="expand" class="center">
                    <a-select
                        v-model:value="termType"
                        class="center-select"
                        :options="typeOptions"
                    />
                </div>
                <div v-if="expand" class="right">
                    <SearchItem
                        :expand="expand"
                        :index="4"
                        :columns="searchItems"
                        :terms-item="terms"
                        @change="(v) => itemValueChange(v, 4)"
                    />
                    <SearchItem
                        :expand="expand"
                        :index="5"
                        :columns="searchItems"
                        :terms-item="terms"
                        @change="(v) => itemValueChange(v, 5)"
                    />
                    <SearchItem
                        :expand="expand"
                        :index="6"
                        :columns="searchItems"
                        :terms-item="terms"
                        @change="(v) => itemValueChange(v, 6)"
                    />
                </div>
            </div>
            <div :class="['JSearch-footer', expand ? 'expand' : '']">
                <div class="JSearch-footer--btns">
                    <History
                        :target="target"
                        @click="searchSubmit"
                        @itemClick="historyItemClick"
                    />
                    <SaveHistory :terms="terms" :target="target" />
                    <a-button @click="reset">
                        <template #icon><RedoOutlined /></template>
                        重置
                    </a-button>
                </div>
                <a-button type="link" class="more-btn" @click="expandChange">
                    更多筛选
                    <DownOutlined
                        :class="['more-icon', expand ? 'more-up' : 'more-down']"
                    />
                </a-button>
            </div>
        </div>
        <!--  简单模式  -->
        <div v-else class="JSearch-content simple big">
            <div class="JSearch-items">
                <div class="left">
                    <SearchItem
                        :expand="false"
                        :index="1"
                        :columns="searchItems"
                        :terms-item="terms"
                        @change="(v) => itemValueChange(v, 1)"
                    />
                </div>
            </div>
            <div class="JSearch-footer">
                <div class="JSearch-footer--btns">
                    <a-button type="primary" @click="searchSubmit">
                        <template #icon><SearchOutlined /></template>
                        搜索
                    </a-button>
                    <a-button @click="reset">
                        <template #icon><RedoOutlined /></template>
                        重置
                    </a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchItem from '../Item.vue';
import { typeOptions } from '../setting';
import { useElementSize, useUrlSearchParams } from '@vueuse/core';
import { set } from 'lodash-es';
import {
    SearchOutlined,
    DownOutlined,
    RedoOutlined,
} from '@ant-design/icons-vue';
import { PropType, ref, reactive, watch, nextTick } from 'vue';
import SaveHistory from './SaveHistory.vue';
import History from './History.vue';
import type {
    SearchItemData,
    SearchProps,
    Terms,
    JColumnsProps,
} from '../typing';
import { termsParamsFormat } from '../util';

type UrlParam = {
    q: string | null;
    target: string | null;
};

interface Emit {
    (e: 'search', data: Terms): void;
}

const props = defineProps({
    columns: {
        type: Array as PropType<JColumnsProps[]>,
        default: () => [],
        required: true,
    },
    type: {
        type: String,
        default: 'advanced',
    },
    target: {
        type: String,
        default: '',
        required: true,
    },
});

const searchRef = ref(null);
const { width } = useElementSize(searchRef);

const urlParams = useUrlSearchParams<UrlParam>('hash');

// 是否展开更多筛选
const expand = ref(false);

// 第一组，第二组的关系
const termType = ref('and');
// 搜索历史记录
const historyList = ref([]);

// 组件方向
const layout = ref('horizontal');
// 当前组件宽度 true 大于1000
const screenSize = ref(true);

const searchItems = ref<SearchProps[]>([]); // 当前查询条件
const terms = reactive<Terms>({ terms: [] });

const columnOptionMap = new Map();

const emit = defineEmits<Emit>();

const expandChange = () => {
    expand.value = !expand.value;
};

const searchParams = reactive({
    data: {},
});

const handleItems = () => {
    searchItems.value = [];
    columnOptionMap.clear();
    props.columns!.forEach((item, index) => {
        if (item.search && Object.keys(item.search).length) {
            columnOptionMap.set(item.dataIndex, item.search);
            searchItems.value.push({
                ...item.search,
                sortIndex: item.search.first ? 0 : index + 1,
                title: item.title as any,
                column: item.dataIndex,
            });
        }
    });
};

const itemValueChange = (value: SearchItemData, index: number) => {
    if (index < 4) {
        // 第一组数据
        set(terms.terms, [0, 'terms', index - 1], value);
    } else {
        // 第二组数据
        set(terms.terms, [1, 'terms', index - 4], value);
    }
};

const addUrlParams = () => {
    urlParams.q = JSON.stringify(terms);
    urlParams.target = props.target;
};

/**
 * 提交
 */
const searchSubmit = () => {
    emit('search', termsParamsFormat(terms, columnOptionMap));
    if (props.type === 'advanced') {
        addUrlParams();
    }
};

/**
 * 重置查询
 */
const reset = () => {
    terms.terms = [];
    expand.value = false;
    emit('search', terms);
    if (props.type === 'advanced') {
        urlParams.q = null;
        urlParams.target = null;
    }
};

watch(width, (value) => {
    if (value < 1000) {
        layout.value = 'vertical';
        screenSize.value = false;
    } else {
        layout.value = 'horizontal';
        screenSize.value = true;
    }
});

const historyItemClick = (content: string) => {
    try {
        terms.terms = JSON.parse(content)?.terms || [];
        if (terms.terms.length === 2) {
            expand.value = true;
        }
        addUrlParams();
    } catch (e) {
        console.warn(`Search组件中handleUrlParams处理JSON时异常：【${e}】`);
    }
};

/**
 * 处理URL中的查询参数
 * @param _params
 */
const handleUrlParams = (_params: UrlParam) => {
    // URL中的target和props的一致，则还原查询参数
    if (_params.target === props.target && _params.q) {
        try {
            terms.terms = JSON.parse(_params.q)?.terms || [];
            if (terms.terms.length === 2) {
                expand.value = true;
            }
            emit('search', termsParamsFormat(terms, columnOptionMap));
        } catch (e) {
            console.warn(`Search组件中handleUrlParams处理JSON时异常：【${e}】`);
        }
    }
};

nextTick(() => {
    handleUrlParams(urlParams);
});

handleItems();
</script>

<style scoped lang="less"></style>
