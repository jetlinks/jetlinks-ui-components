<template>
    <Form :model="termsData" @finish="searchSubmit">
        <div ref="searchRef" :class="['JSearch-warp', 'senior', props.class]">
            <!--  高级模式  -->
            <div
                v-if="props.type === 'advanced'"
                :class="[
                    'JSearch-content',
                    expand ? 'senior-expand' : 'pack-up',
                    screenSize ? 'big' : 'small',
                ]"
            >
                <div
                    :class="[
                        'JSearch-items',
                        expand ? 'items-expand' : '',
                        layout,
                    ]"
                >
                    <div class="left">
                        <div class="left-items">
                            <SearchItem
                                :expand="expand"
                                :index="1"
                                :columns="searchItems"
                                :terms-item="termsData.terms[0].terms[0]"
                                :reset="resetNumber"
                                @change="(v) => itemValueChange(v, 1)"
                            />
                            <SearchItem
                                v-if="expand"
                                :expand="expand"
                                :index="2"
                                :columns="searchItems"
                                :terms-item="termsData.terms[0].terms[1]"
                                :reset="resetNumber"
                                @change="(v) => itemValueChange(v, 2)"
                            />
                            <SearchItem
                                v-if="expand"
                                :expand="expand"
                                :index="3"
                                :columns="searchItems"
                                :terms-item="termsData.terms[0].terms[2]"
                                :reset="resetNumber"
                                @change="(v) => itemValueChange(v, 3)"
                            />
                        </div>
                    </div>
                    <div v-if="expand" class="center">
                        <j-select
                            v-model:value="termsData.terms[1].type"
                            class="center-select"
                            :options="typeOptions"
                        />
                    </div>
                    <div v-if="expand" class="right">
                        <div class="right-items">
                            <SearchItem
                                v-for="item in [4, 5, 6]"
                                :key="`search_item_${item}`"
                                :expand="expand"
                                :index="item"
                                :columns="searchItems"
                                :terms-item="termsData.terms[1].terms[item - 4]"
                                :reset="resetNumber"
                                @change="(v) => itemValueChange(v, item)"
                            />
                        </div>
                    </div>
                </div>
                <div :class="['JSearch-footer', expand ? 'expand' : '']">
                    <div class="JSearch-footer--btns">
                        <j-button
                            type="stroke"
                            class="no-radius"
                            @click="reset"
                        >
                            重置
                        </j-button>
                        <SaveHistory
                            :terms="termsData"
                            :target="target"
                            :request="request"
                        />
                        <History
                            :target="target"
                            :request="historyRequest"
                            :delete-request="deleteRequest"
                            :delete-key="deleteKey"
                            @click="searchSubmit"
                            @itemClick="historyItemClick"
                        />
                    </div>
                    <j-button
                        type="link"
                        class="more-btn"
                        @click="expandChange"
                    >
                        <span class="more-text"> 更多筛选 </span>
                        <AIcon
                            type="DoubleRightOutlined"
                            :class="[
                                'more-icon',
                                expand ? 'more-up' : 'more-down',
                            ]"
                        />
                    </j-button>
                </div>
            </div>
            <!--  简单模式  -->
            <div v-else class="JSearch-content single big pack-up">
                <div class="JSearch-items">
                    <div class="left">
                        <SearchItem
                            :expand="false"
                            :index="1"
                            :columns="searchItems"
                            :terms-item="terms"
                            :reset="resetNumber"
                            @change="(v) => itemValueChange(v, 1)"
                        />
                    </div>
                </div>
                <div class="JSearch-footer">
                    <div class="JSearch-footer--btns">
                        <FormItemRest>
                            <j-button
                                type="stroke"
                                class="no-radius"
                                @click="reset"
                            >
                                重置
                            </j-button>
                            <j-button html-type="submit" type="primary">
                                搜索
                            </j-button>
                        </FormItemRest>
                    </div>
                </div>
            </div>
        </div>
    </Form>
</template>

<script setup lang="ts">
import SearchItem from '../Item.vue';
import { typeOptions } from '../setting';
import { useElementSize, useUrlSearchParams } from '@vueuse/core';
import { PropType, ref, reactive, watch } from 'vue';
import SaveHistory from './SaveHistory.vue';
import History from './History.vue';
import type {
    SearchItemData,
    SearchProps,
    Terms,
    JColumnsProps,
} from '../typing';
import {
    compatibleOldTerms,
    handleParamsToString,
    handleQData,
    hasExpand,
    termsParamsFormat,
} from '../util';
import {
    Select as JSelect,
    Button as JButton,
    AIcon,
    Form,
    FormItemRest,
} from '../../components';

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
    class: {
        type: String,
        default: '',
    },
    request: {
        type: Function as PropType<(data: any, target: string) => Promise<any>>,
        default: undefined,
    },
    historyRequest: {
        type: Function as PropType<(target: string) => Promise<any>>,
        default: undefined,
    },
    deleteRequest: {
        type: Function as PropType<
            (target: string, id: string) => Promise<any>
        >,
        default: null,
    },
    deleteKey: {
        type: String,
        default: 'key',
    },
    routerMode: {
        type: String,
        default: 'hash',
    },
});

const searchRef = ref(null);
const { width } = useElementSize(searchRef);

const urlParams = useUrlSearchParams<UrlParam>(
    props.routerMode as 'hash' | 'history' | 'hash-params',
);

// 是否展开更多筛选
const expand = ref(false);

// 组件方向
const layout = ref('horizontal');
// 当前组件宽度 true 大于1000
const screenSize = ref(true);
const resetNumber = ref(1);

const searchItems = ref<SearchProps[]>([]); // 当前查询条件

const termsData = reactive<Terms>({
    terms: [
        { terms: [null, null, null] },
        { terms: [null, null, null], type: 'and' },
    ],
});

const columnOptionMap = new Map();

const emit = defineEmits<Emit>();

const expandChange = () => {
    expand.value = !expand.value;
    if (!expand.value) {
        // 收起
        const firstItem = termsData.terms[0].terms[0];
        termsData.terms = [
            { terms: [firstItem, null, null] },
            { terms: [null, null, null] },
        ];
    }
};

const searchParams = reactive({
    data: {},
});

const itemValueChange = (value: SearchItemData, index: number) => {
    if (index < 4) {
        // 第一组数据
        termsData.terms[0].terms[index - 1] = value;
    } else {
        // 第二组数据
        termsData.terms[1].terms[index - 4] = value;
    }
};

const addUrlParams = () => {
    urlParams.q = JSON.stringify(termsData);
    urlParams.target = props.target;
};

/**
 * 提交
 */
const searchSubmit = () => {
    emit('search', termsParamsFormat(termsData, columnOptionMap));
    if (props.type === 'advanced') {
        addUrlParams();
    }
};

/**
 * 重置查询
 */
const reset = () => {
    termsData.terms = [
        { terms: [null, null, null] },
        { terms: [null, null, null], type: 'and' },
    ];
    expand.value = false;
    if (props.type === 'advanced') {
        urlParams.q = null;
        urlParams.target = null;
    }
    resetNumber.value += 1;
    emit('search', { terms: [] });
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
        termsData.terms = handleQData(compatibleOldTerms(content))?.terms || [];
        expand.value = hasExpand(termsData.terms);
        searchSubmit();
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
    if (props.target && _params.target === props.target && _params.q) {
        termsData.terms =
            handleQData(compatibleOldTerms(_params.q))?.terms || [];
        expand.value = hasExpand(termsData.terms);
        emit('search', termsParamsFormat(termsData, columnOptionMap));
    }
};

/**
 * 处理每项的key为Item组件所需要的key
 */
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

    handleUrlParams(urlParams);
};

handleItems();
</script>

<style scoped lang="less"></style>
