<template>
    <Form :model="termsData" @finish="searchSubmit">
        <div
            ref="searchRef"
            :class="['JSearch-warp', 'senior', props.class]"
            :style="style"
        >
            <!--  高级模式  -->
            <div
                v-if="props.type === 'advanced'"
                ref="searchRefContentRef"
                :class="[
                    'JSearch-content',
                    expand || compatible ? 'senior-expand' : 'pack-up',
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
                            style="width: 100px"
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
                <div
                    :class="[
                        'JSearch-footer',
                        expand || compatible ? 'expand' : '',
                    ]"
                >
                    <div class="JSearch-footer--btns">
                        <j-button type="stroke" @click="reset"> 重置 </j-button>
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
                            :terms-item="termsData.terms[0].terms[0]"
                            :reset="resetNumber"
                            @change="(v) => itemValueChange(v, 1)"
                        />
                    </div>
                </div>
                <div class="JSearch-footer">
                    <div class="JSearch-footer--btns">
                        <FormItemRest>
                            <j-button type="stroke" @click="reset">
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
import { useElementSize } from '@vueuse/core';
import { useRouteQuery } from '@vueuse/router';
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
    getTermTypeFn,
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
import { cloneDeep } from 'lodash-es';

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
    style: {
        type: [String, Object],
        default: undefined,
    },
});

const searchRef = ref(null);
const searchRefContentRef = ref(null);
const { width } = useElementSize(searchRef);

const q = useRouteQuery('q');
const target = useRouteQuery('target');
const hasOnceSearch = ref(false);

// 是否展开更多筛选
const expand = ref(false);

// 组件方向
const layout = ref('horizontal');
const compatible = ref(false);
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
    q.value = JSON.stringify(termsData);
    target.value = props.target;
};

const submitData = () => {
    emit('search', termsParamsFormat(termsData, columnOptionMap));
};

/**
 * 提交
 */
const searchSubmit = () => {
    submitData();
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
        q.value = null;
        target.value = null;
    }
    resetNumber.value += 1;
    emit('search', { terms: [] });
};

watch(
    width,
    (value) => {
        if (value < 1000) {
            layout.value = 'vertical';
            screenSize.value = false;
            compatible.value = value < 760;
        } else {
            layout.value = 'horizontal';
            screenSize.value = true;
            compatible.value = false;
        }
    },
    { immediate: true },
);

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
        const _item = cloneDeep(item);
        if (_item.search && Object.keys(_item.search).length) {
            columnOptionMap.set(
                // _item.search?.rename || _item.dataIndex,
                _item.dataIndex,
                _item.search,
            );

            // 默认值
            const { search } = _item;
            let defaultTerms = null;
            // 包含defaultValue 或者 defaultOnceValue
            if (search.defaultValue !== undefined || search.defaultOnceValue) {
                const _value = search.defaultValue || search.defaultOnceValue;
                defaultTerms = {
                    type: 'and',
                    value: _value,
                    termType:
                        search.defaultTermType || getTermTypeFn(search.type),
                    column: _item.dataIndex,
                };
            }

            if (
                search.defaultValue !== undefined ||
                search.defaultOnceValue !== undefined
            ) {
                hasOnceSearch.value = true;
            }
            searchItems.value.push({
                ..._item.search,
                sortIndex: _item.search.first ? 0 : index + 1,
                title: _item.title as any,
                // column: _item.search?.rename || _item.dataIndex,
                column: _item.dataIndex,
            });
            if (defaultTerms) {
                itemValueChange(defaultTerms, search.first ? 1 : index + 1);
            }
        }
    });

    submitData();

    handleUrlParams({ q: q.value, target: target.value });
};

watch(
    () => props.columns,
    () => {
        termsData.terms = [
            { terms: [null, null, null] },
            { terms: [null, null, null], type: 'and' },
        ];
        expand.value = false;
        if (props.type === 'advanced') {
            q.value = null;
            target.value = null;
        }
        handleItems();
    },
    {
        deep: true,
    },
);

handleItems();
</script>

<style scoped lang="less"></style>
