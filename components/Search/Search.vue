<template>
    <Form :model="terms" @finish="searchSubmit">
        <div :class="['JSearch-warp', props.class]" :style="style">
            <div class="JSearch-content simple">
                <div class="JSearch-items">
                    <j-row :gutter="[16, 16]">
                        <j-col
                            v-for="(item, index) in searchItems"
                            :key="index + '_' + item.column"
                            :span="item.span || 24 / column"
                        >
                            <SearchItem
                                :only-value="true"
                                :expand="false"
                                :index="index + 1"
                                :columns="searchItems"
                                :component-props="item.componentProps"
                                :terms-item="terms.terms[index]"
                                :reset="resetNumber"
                                :label-width="labelWidth"
                                @change="(v) => itemValueChange(v, index)"
                            />
                        </j-col>
                        <j-col :span="24 / column">
                            <slot
                                name="footerRender"
                                :reset="reset"
                                :submit="searchSubmit"
                            >
                                <div
                                    class="JSearch-footer--btns"
                                    :style="{
                                        paddingLeft: `${labelWidth + 8}px`,
                                    }"
                                >
                                    <j-button type="stroke" @click="reset">
                                        {{ resetText }}
                                    </j-button>
                                    <FormItemRest>
                                        <j-button
                                            html-type="submit"
                                            type="primary"
                                        >
                                            {{ submitText }}
                                        </j-button>
                                    </FormItemRest>
                                </div>
                            </slot>
                        </j-col>
                    </j-row>
                </div>
            </div>
        </div>
    </Form>
</template>

<script setup lang="ts">
import { JColumnsProps, SearchItemData, SearchProps, Terms } from './typing';
import {
    Button as JButton,
    Row as JRow,
    Col as JCol,
    Form,
    FormItemRest,
} from '../components';
import { set } from 'lodash-es';
import { reactive, ref, provide } from 'vue';
import type { PropType } from 'vue';
import { termsParamsFormat } from './util';
import SearchItem from './Item.vue';
import Sort from '../Grid/demo/sort.vue';
import { optionsMapKey } from './setting';

interface Emit {
    (e: 'search', data: Terms[] | {}): void;
}

type SearchType = 'terms' | 'object';

const props = defineProps({
    columns: {
        type: Array as PropType<JColumnsProps[]>,
        default: () => [],
        required: true,
    },
    type: {
        type: String as PropType<SearchType>,
        default: 'terms',
        required: true,
    },
    column: {
        type: Number,
        default: 4,
    },
    style: {
        type: [String, Object],
        default: undefined,
    },
    class: {
        type: String,
        default: '',
    },
    labelWidth: {
        type: Number,
        default: 40,
    },
    resetText: {
        type: String,
        default: '重置',
    },
    submitText: {
        type: String,
        default: '搜索',
    },
});

const columnOptionMap = ref(new Map());

const emit = defineEmits<Emit>();
// 当前查询条件
const terms = reactive<Terms>({ terms: [] });

const searchItems = ref<SearchProps[]>([]); // 当前查询条件列表

provide(optionsMapKey, columnOptionMap);
const itemValueChange = (value: SearchItemData, index: number) => {
    set(terms.terms, [index], value);
};

const handleItems = (reset: boolean = false) => {
    searchItems.value = [];
    terms.terms = [];
    columnOptionMap.value.clear();
    let hasSearch = false;
    props.columns!.forEach((item, index) => {
        if (item.search && Object.keys(item.search).length) {
            columnOptionMap.value.set(item.dataIndex, item.search);
            // 默认值
            const { search } = item;
            let defaultTerms = null;
            // 包含defaultValue 或者 defaultOnceValue
            if (
                search.defaultValue !== undefined ||
                search.defaultTermType ||
                search.defaultOnceValue
            ) {
                const _value =
                    search.defaultValue || reset
                        ? search.defaultValue
                        : search.defaultOnceValue;

                defaultTerms = {
                    type: 'and',
                    value: _value,
                    termType: search.defaultTermType || 'like',
                    column: item.dataIndex,
                };
            }

            if (
                search.defaultValue !== undefined ||
                search.defaultOnceValue !== undefined
            ) {
                hasSearch = true;
            }

            terms.terms.push(defaultTerms);
            searchItems.value.push({
                ...item.search,
                sortIndex: item.search.first ? 0 : index + 1,
                title: item.title as any,
                column: item.dataIndex,
            });
        }
    });

    if (hasSearch) {
        searchSubmit();
    }
};

/**
 * 提交
 */
const searchSubmit = () => {
    emit(
        'search',
        termsParamsFormat(
            terms.terms,
            columnOptionMap.value,
            'low',
            props.type,
        ),
    );
};

/**
 * 重置查询
 */
const resetNumber = ref(1);
const reset = () => {
    resetNumber.value += 1;
    handleItems(true);
    if (props.type == 'object') {
        emit('search', {});
    } else if (props.type == 'terms') {
        emit('search', []);
    }
};

handleItems();
</script>
