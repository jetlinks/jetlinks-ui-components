<template>
    <div class="data-table">
        {{ props.childe }}
        <Form ref="formRef" :model="form">
            <table style="width: 100%">
                <draggable :list="form.table" :animation="300" @end="move">
                    <!-- 表头 -->
                    <template #header>
                        <thead>
                            <tr class="data-table--header">
                                <th v-if="Serial" :class="borderClass">
                                    <div style="width: 64px; height: 100%">
                                        序号
                                    </div>
                                </th>
                                <th
                                    v-for="item in columns"
                                    :key="item"
                                    :class="borderClass"
                                >
                                    <div style="height: 100%">
                                        {{ item.title }}
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </template>
                    <template #item="{ element, index }">
                        <tr @click="onRow(index)">
                            <td v-if="Serial" :class="borderClass">
                                <div>{{ index + 1 }}</div>
                            </td>
                            <td
                                v-for="(item, i) in columns"
                                :key="item"
                                :class="borderClass"
                                :style="`width:${item.width || 100}vw`"
                            >
                                <FormItem
                                    v-if="item.dataIndex !== 'action'"
                                    :name="['table', index, item.dataIndex]"
                                    :rules="item.form?.rules || []"
                                >
                                    <!-- 插槽 -->
                                    <div v-if="item.slot">
                                        <slot
                                            :name="item.slot"
                                            :data="{ element, index }"
                                        ></slot>
                                    </div>
                                    <template v-else>
                                        <!-- 默认输出文本 -->
                                        <div
                                            v-if="
                                                item.type === 'text' ||
                                                endRow !== index ||
                                                !item.type
                                            "
                                        >
                                            {{ element[item.dataIndex] }}
                                        </div>
                                        <!-- 文本 -->
                                        <div
                                            v-if="
                                                item.type === 'index' &&
                                                endRow === index
                                            "
                                        >
                                            <j-input
                                                v-model:value="
                                                    element[item.dataIndex]
                                                "
                                                style="width: 100%"
                                                @blur="addList"
                                            />
                                        </div>
                                        <div
                                            v-if="
                                                item.type === 'NumberIndex' &&
                                                endRow === index
                                            "
                                        >
                                            <j-input-number
                                                v-model:value="
                                                    element[item.dataIndex]
                                                "
                                                style="width: 100%"
                                                @blur="addList"
                                            />
                                        </div>
                                        <!-- 填写约束 -->
                                        <div
                                            v-if="
                                                item.type === 'select' &&
                                                endRow === index
                                            "
                                        >
                                            <j-select
                                                value="必填"
                                                style="width: 100%"
                                            >
                                                <j-select-option value="必填"
                                                    >必填</j-select-option
                                                >
                                                <j-select-option value="非必填"
                                                    >非必填</j-select-option
                                                >
                                            </j-select>
                                        </div>
                                        <!-- 数据类型 -->
                                        <div
                                            v-if="
                                                item.type === 'TypeSelect' &&
                                                endRow === index
                                            "
                                        >
                                            <TypeSelect
                                                v-model:value="
                                                    element[item.dataIndex]
                                                "
                                            />
                                        </div>
                                        <!-- 其他配置 -->
                                        <div
                                            v-if="
                                                item.type === 'config' &&
                                                endRow === index
                                            "
                                        >
                                            <div
                                                v-if="
                                                    TypeSelectDataIndex(element)
                                                "
                                                class="data-table-config"
                                            >
                                                <div
                                                    class="data-table-config--text"
                                                >
                                                    <slot
                                                        name="config"
                                                        :data="element"
                                                    >
                                                        {{
                                                            element[
                                                                item.dataIndex
                                                            ] || '空'
                                                        }}
                                                    </slot>
                                                </div>
                                                <Integer
                                                    v-if="
                                                        [
                                                            'int',
                                                            'long',
                                                        ].includes(
                                                            TypeSelectDataIndex(
                                                                element,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                />
                                                <Double
                                                    v-else-if="
                                                        [
                                                            'float',
                                                            'double',
                                                        ].includes(
                                                            TypeSelectDataIndex(
                                                                element,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                />
                                                <Boolean
                                                    v-else-if="
                                                        TypeSelectDataIndex(
                                                            element,
                                                        ) === 'boolean'
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                />
                                                <Enum
                                                    v-else-if="
                                                        TypeSelectDataIndex(
                                                            element,
                                                        ) === 'enum'
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                />
                                                <Array
                                                    v-else-if="
                                                        TypeSelectDataIndex(
                                                            element,
                                                        ) === 'array'
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                />
                                                <File
                                                    v-else-if="
                                                        TypeSelectDataIndex(
                                                            element,
                                                        ) === 'file'
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                />
                                                <Date
                                                    v-else-if="
                                                        TypeSelectDataIndex(
                                                            element,
                                                        ) === 'date'
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                />
                                                <String
                                                    v-else-if="
                                                        [
                                                            'password',
                                                            'string',
                                                        ].includes(
                                                            TypeSelectDataIndex(
                                                                element,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                />
                                                <ObjectText
                                                    v-else-if="
                                                        TypeSelectDataIndex(
                                                            element,
                                                        ) === 'object'
                                                    "
                                                    v-model:value="
                                                        element[item.dataIndex]
                                                    "
                                                    :columns="columns"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="data-table-config empty"
                                            >
                                                空
                                            </div>
                                        </div>
                                    </template>
                                </FormItem>
                                <template v-else>
                                    <slot name="action" :data="element"></slot>
                                </template>
                            </td>
                        </tr>
                    </template>
                </draggable>
                <Empty v-if="!form.table.length" />
            </table>
        </Form>
    </div>
</template>
<script lang="ts" setup name="JDataTable">
import {
    onMounted,
    PropType,
    ref,
    getCurrentInstance,
    reactive,
    computed,
    watch,
    defineExpose,
} from 'vue';
import type { DataEntryData, DataTableColumnsType } from './typing';
import draggable from 'vuedraggable';
import { text } from 'stream/consumers';

import {
    Integer,
    Double,
    String,
    Boolean,
    Enum,
    Array,
    File,
    Date,
    Object as ObjectText,
    TypeSelect,
} from './components';
import TypeData from './components/Type/data';

import {
    Form,
    FormItem,
    InputNumber as JInputNumber,
    Select as JSelect,
    SelectOption as JSelectOption,
    Input as JInput,
    Empty,
} from '../../components';
import { cloneDeep } from 'lodash-es';
import type { FormInstance } from 'ant-design-vue';

const props = defineProps({
    data: {
        type: Array as PropType<DataEntryData[]>,
        default: null,
    },
    columns: {},
    newSource: {},
    serial: {},
    border: {},
    childe: {},
});

const { proxy } = <any>getCurrentInstance();

const Serial = ref<any>(true); //是否开启序号
const typeList = ref(TypeData.map((item) => item.value));
const columns = ref<any[]>(props.columns || []);
//  type为列的数据类型  width为列的宽度默认以100为基数，若要宽度为两倍则写200
const dataSource = ref<any>(); //展示数据
const dataSourceList = ref([]); //用来撤销的数据
const newSource = ref();
const formRef = ref<FormInstance>();

const borderClass = computed(() => {
    return {
        'data-table--border': props.border !== false, // 默认有
    };
});

//  表单值
const form = reactive({
    table: props.newSource || [],
});
const endRow = ref<number>();
const onRow = (data: any) => {
    endRow.value = data;
};
const offRow = () => {};
onMounted(() => {
    //参数引入初始化
    if (props.newSource) {
        columns.value = props.columns;
        dataSource.value = props.newSource;
        Serial.value = props.serial;
    }

    // if(props.childe){  //子页面时没有object类型
    //     typeList.value=["int","long","double","float","text","boolean","enum","file","array","date","password","geoPoint",]
    // }

    dataSourceList.value.push(JSON.parse(JSON.stringify(form.table))); //添加撤销初始数据

    window.addEventListener('keydown', KeyDown, true); //开启键盘监听
    document.addEventListener('keydown', function (event) {
        //数据撤销 Ctrl+Z
        if (
            event.ctrlKey &&
            event.key === 'z' &&
            dataSourceList.value.length > 1
        ) {
            dataSourceList.value.pop();
            form.table = JSON.parse(
                JSON.stringify(
                    dataSourceList.value[dataSourceList.value.length - 1],
                ),
            );
        }
    });
});

watch(
    () => props.newSource,
    () => {
        form.table = cloneDeep(props.newSource as any[]);
    },
    { deep: true },
);

const move = (e) => {
    //拖拽时动态改变编辑的行位置
    if (e.oldIndex - 1 == endRow.value) {
        endRow.value = e.newIndex - 1;
    } else if (e.newIndex >= endRow.value + 1 && e.newIndex > e.oldIndex) {
        endRow.value = endRow.value - 1;
    } else if (e.newIndex <= endRow.value + 1 && e.newIndex < e.oldIndex) {
        endRow.value = endRow.value + 1;
    }
};
const addList = () => {
    if (
        JSON.stringify(form.table) !=
        JSON.stringify(dataSourceList.value[dataSourceList.value.length - 1])
    ) {
        if (dataSourceList.value.length < 19) {
            //超过20个数组删除第一个
            dataSourceList.value.push(JSON.parse(JSON.stringify(form.table))); //深拷贝
        } else {
            dataSourceList.value = dataSourceList.value.slice(1);
            dataSourceList.value.push(JSON.parse(JSON.stringify(form.table))); //深拷贝
        }
    }

    endRow.value = null;
};
const KeyDown = (e: any) => {
    if (e.keyCode == 13) {
        //回车
        addList();
    }
    if (e.keyCode == 38) {
        //上
        e.preventDefault(); //禁用浏览器上下
        if (endRow.value) {
            var dataList = null;
            dataList = form.table[endRow.value - 1];
            form.table[endRow.value - 1] = form.table[endRow.value];
            form.table[endRow.value] = dataList;
            endRow.value = endRow.value - 1;
        }
    }
    if (e.keyCode == 40) {
        //下
        e.preventDefault(); //禁用浏览器上下
        if (
            endRow.value == 0 ||
            (endRow.value && endRow.value != form.table.length - 1)
        ) {
            var dataList = null;
            dataList = form.table[endRow.value + 1];
            form.table[endRow.value + 1] = form.table[endRow.value];
            form.table[endRow.value] = dataList;
            endRow.value = endRow.value + 1;
        }
    }
};

const TypeSelectDataIndex = (row: any) => {
    console.log(row, columns.value);
    return row[
        columns.value?.find((item) => item.type === 'TypeSelect')?.dataIndex
    ];
};

const valueType = ref<any>();

const stringConfig = ref();
const onConfig = () => {
    //其他配置保存
    if (valueType.value == 'enum') {
        stringConfig.value[0].addList();
    }
    form.table[stringConfig.value[0].index] = stringConfig.value[0].title;
    addList(); //Ctrl+Z添加
};

const getData = () => {
    return new Promise(async (resolve, reject) => {
        formRef.value
            ?.validate()
            .then(() => {
                resolve(cloneDeep(form.table));
            })
            .catch(() => {
                reject();
            });
    });
};

defineExpose({
    getData: getData,
});
</script>
