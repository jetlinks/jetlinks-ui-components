<template>
    <div class="JSearch-warp">
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
                            :columns="[item]"
                            :component-props="item.componentProps"
                            :terms-item="terms"
                            :reset="resetNumber"
                            @change="(v) => itemValueChange(v, index)"
                        />
                    </j-col>
                    <j-col :span="24 / column">
                        <div class="JSearch-footer--btns">
                            <j-button
                                type="stroke"
                                class="no-radius"
                                @click="reset"
                            >
                                重置
                            </j-button>
                            <j-button
                                type="primary"
                                @click="searchSubmit"
                                @keyup.enter="searchSubmit"
                            >
                                搜索
                            </j-button>
                        </div>
                    </j-col>
                </j-row>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { JColumnsProps, SearchItemData, SearchProps, Terms } from './typing';
import { Button as JButton, Row as JRow, Col as JCol } from '../components';
import { set } from 'lodash-es';
import { reactive, ref } from 'vue';
import type { PropType } from 'vue';
import { termsParamsFormat } from './util';
import SearchItem from './Item.vue';

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
});

const columnOptionMap = new Map();

const emit = defineEmits<Emit>();
// 当前查询条件
const terms = reactive<Terms>({ terms: [] });

const searchItems = ref<SearchProps[]>([]); // 当前查询条件列表

const itemValueChange = (value: SearchItemData, index: number) => {
    set(terms.terms, [index], value);
};

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

/**
 * 提交
 */
const searchSubmit = () => {
    emit(
        'search',
        termsParamsFormat(terms.terms, columnOptionMap, 'low', props.type),
    );
};

/**
 * 重置查询
 */
const resetNumber = ref(1);
const reset = () => {
    resetNumber.value += 1;
    terms.terms = [];
    if (props.type == 'object') {
        emit('search', {});
    } else if (props.type == 'terms') {
        emit('search', []);
    }
};

handleItems();
</script>
