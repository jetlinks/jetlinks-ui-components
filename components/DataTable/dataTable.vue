<template>
    <div class="j-data-table">
        <div class="j-data-table-body">
            <Form ref="formRef" :model="formData" layout="horizontal">
                <div ref="draggableRef" class="draggable-body">
                    <Table
                        v-bind="props"
                        :columns="newColumns"
                        :pagination="false"
                        :data-source="formData.table"
                        :row-key="props.rowKey || 'id'"
                    >
                        <template #headerCell="{ column }">
                            <span
                                :class="[
                                    'j-data-table-header',
                                    column.form?.required ? 'required' : '',
                                ]"
                            >
                                <slot name="headerCell" :column="column">
                                    {{ column.title }}
                                </slot>
                            </span>
                        </template>
                        <template #bodyCell="{ column, record, index }">
                            <div
                                v-if="
                                    controlData(
                                        record,
                                        index,
                                        column.dataIndex,
                                        column.type,
                                    )
                                "
                                class="j-row-update"
                            ></div>
                            <div
                                :class="[
                                    'j-row-selected',
                                    selectedKey ===
                                    `td_${index}_${column.dataIndex}`
                                        ? 'j-row-selected-active'
                                        : '',
                                ]"
                            ></div>
                            <div
                                v-if="column.dataIndex === 'index'"
                                :class="draggableClassName"
                            >
                                {{ index + 1 }}
                            </div>
                            <div
                                v-else
                                :class="[
                                    draggableClassName,

                                    editKey ===
                                    `td_${index}_${column.dataIndex}`
                                        ? 'j-data-table--edit'
                                        : '',
                                ]"
                                @click.stop="
                                    () => {
                                        rowClick(
                                            column.type
                                                ? `td_${index}_${column.dataIndex}`
                                                : '',
                                        );
                                    }
                                "
                                @dblclick.stop="
                                    () => {
                                        editClick(
                                            column.type
                                                ? `td_${index}_${column.dataIndex}`
                                                : '',
                                        );
                                    }
                                "
                            >
                                <!--         不需要校验           -->
                                <template v-if="!column.type">
                                    <slot
                                        :name="column.dataIndex"
                                        :data="{ record, index }"
                                    >
                                        <Ellipsis>
                                            {{ record[column.dataIndex] }}
                                        </Ellipsis>
                                    </slot>
                                </template>
                                <!--         需要校验          -->
                                <FormItem
                                    v-else
                                    :name="['table', index, column.dataIndex]"
                                    :rules="column.form?.rules"
                                    :required="!!column.form?.required"
                                    :validate-first="true"
                                >
                                    <!--                未编辑                    -->
                                    <template
                                        v-if="
                                            editKey !==
                                            `td_${index}_${column.dataIndex}`
                                        "
                                    >
                                        <slot
                                            :name="column.dataIndex"
                                            :data="{ record, index }"
                                        >
                                            <Ellipsis>
                                                {{ record[column.dataIndex] }}
                                            </Ellipsis>
                                        </slot>
                                    </template>
                                    <!--                编辑                    -->
                                    <template v-else>
                                        <Input
                                            v-if="column.type === 'text'"
                                            v-model:value="
                                                formData.table[index][
                                                    column.dataIndex
                                                ]
                                            "
                                            :placeholder="`请输入${column.title}`"
                                            maxlength="64"
                                            style="width: 100%"
                                            @keydown="inputRevoke"
                                        />
                                        <InputNumber
                                            v-else-if="column.type === 'number'"
                                            v-model:value="
                                                formData.table[index][
                                                    column.dataIndex
                                                ]
                                            "
                                            style="width: 100%"
                                            :placeholder="`请输入${column.title}`"
                                            @keydown="inputRevoke"
                                        />
                                        <DataTableTypeSelect
                                            v-else-if="
                                                column.type === 'TypeSelect'
                                            "
                                            v-model:value="
                                                formData.table[index][
                                                    newColumns.find(
                                                        (item) =>
                                                            item.type ===
                                                            'TypeSelect',
                                                    )?.dataIndex
                                                ]
                                            "
                                            :placeholder="`请选择${column.title}`"
                                        />
                                        <component
                                            v-bind="column.components.props"
                                            :is="column.components.name"
                                            v-else-if="
                                                column.type === 'components' &&
                                                column.components.name
                                            "
                                            v-model:value="
                                                formData.table[index]
                                            "
                                            :record="record"
                                            :data-source="formData.table"
                                        />
                                        <div
                                            v-else
                                            class="j-data-table-row--config"
                                        >
                                            <div
                                                class="j-data-table-config--text"
                                            >
                                                <DataTableTypeSelect
                                                    v-model:value="
                                                        formData.table[index][
                                                            newColumns.find(
                                                                (item) =>
                                                                    item.type ===
                                                                    'TypeSelect',
                                                            )?.dataIndex
                                                        ]
                                                    "
                                                    :filter-option="
                                                        children
                                                            ? ['object']
                                                            : undefined
                                                    "
                                                    :placeholder="`请选择${column.title}`"
                                                />
                                            </div>
                                            <div
                                                class="j-data-table-config--icon"
                                            >
                                                <DataTableInteger
                                                    v-if="
                                                        [
                                                            'int',
                                                            'long',
                                                        ].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataTableDouble
                                                    v-else-if="
                                                        [
                                                            'float',
                                                            'double',
                                                        ].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataTableBoolean
                                                    v-else-if="
                                                        ['boolean'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataTableEnum
                                                    v-else-if="
                                                        ['enum'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataTableArray
                                                    v-else-if="
                                                        ['array'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataTableFile
                                                    v-else-if="
                                                        ['file'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataTableDate
                                                    v-else-if="
                                                        ['date'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataTableString
                                                    v-else-if="
                                                        [
                                                            'password',
                                                            'string',
                                                        ].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataTableObject
                                                    v-else-if="
                                                        ['object'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                    :columns="
                                                        newColumns.filter(
                                                            (item) =>
                                                                item.dataIndex !==
                                                                'index',
                                                        )
                                                    "
                                                />
                                                <Input
                                                    v-else
                                                    v-model:value="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                            </div>
                                        </div>
                                    </template>
                                </FormItem>
                            </div>
                        </template>
                        <template #emptyText>
                            <div class="j-data-table-empty">
                                <Empty />
                            </div>
                        </template>
                    </Table>
                </div>
            </Form>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    computed,
    defineProps,
    nextTick,
    reactive,
    watch,
    ref,
    defineExpose,
} from 'vue';
import type { PropType } from 'vue';
import Table, { tableProps } from 'ant-design-vue/lib/table';
import {
    Form,
    FormItem,
    Input,
    InputNumber,
    Ellipsis,
    Empty,
} from '../components';
import {
    DataTableTypeSelect,
    DataTableInteger,
    DataTableDouble,
    DataTableArray,
    DataTableDate,
    DataTableObject,
    DataTableBoolean,
    DataTableFile,
    DataTableEnum,
    DataTableString,
} from './components';
import Sortable from 'sortablejs';
// import useRevoke from './useRevoke';
import { cloneDeep, debounce, isEqual } from 'lodash-es';
import {
    cleanUUIDbyData,
    initControlDataSource,
    setUUIDbyDataSource,
} from './util';

const draggableClassName = 'draggable-item';

const props = defineProps({
    ...tableProps(),
    serial: Boolean,
    children: Boolean,
    controlSource: Array,
    draggable: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(['change']);

const selectedKey = ref(); // 选中标识
const editKey = ref(); // 编辑标识
const draggableRef = ref<HTMLDivElement>(null);
const formRef = ref();
const formRowValidate = ref(true); // 行校验，用于上下左右操作控制

const { setControlData, getControlData } = initControlDataSource();

//  重组columns
const newColumns = computed(() => {
    const hasSerial = 'serial' in props && props.serial !== false;
    const serialItem = {
        dataIndex: 'index',
        title: '序号',
        width: 60,
    };
    return hasSerial ? [serialItem, ...props.columns] : props.columns;
});

//  表单值
const formData = reactive<{ table: any[] }>({
    table: [],
});

const sortTable = ref();
const initRevokeLock = ref(false);

// const { updateState } = useRevoke(formData.table, {
//     undo: (data) => {
//         formData.table = data;
//     },
// });

const TypeSelectDataIndex = (row: any) =>
    row[
        newColumns.value?.find((item) => item.type === 'TypeSelect')?.dataIndex
    ];

const getData = (quit = true) => {
    return new Promise((resolve, reject) => {
        formRef.value
            .validate()
            .then(() => {
                const newData = cleanUUIDbyData(formData.table);
                resolve(newData);
                // 退出编辑模式
                if (quit) {
                    editKey.value = '';
                }
            })
            .catch((err) => reject(err));
    });
};
/**
 * 单个选中
 * @param key
 */
const rowClick = async (key: string) => {
    let data = true;
    try {
        //  校验当前编辑项，若表单校验失败，静止切换行
        if (editKey.value) {
            await getData(false);
        }
    } catch (err) {
        const [td, index, dataIndex] = selectedKey.value?.split('_');
        const names = err.errorFields?.[0]?.name;
        if (names) {
            data = names[1] !== Number(index) ? false : names[2] !== dataIndex;
        } else {
            data = false;
        }
    }
    formRowValidate.value = data;
    if (!data) return;

    if (key !== editKey.value) {
        editKey.value = '';
    }
    selectedKey.value = key;
};

/**
 * 双击修改
 * @param key
 */
const editClick = (key: string) => {
    if (key === selectedKey.value) {
        editKey.value = key;
    }
};

/**
 * 阻止input撤销
 */
const inputRevoke = (e: any) => {
    if (e.ctrlKey && e.keyCode === 90) {
        e.preventDefault();
    }
};

/**
 * 初始化拖拽
 */
const sortTableHandle = () => {
    if (sortTable.value) {
        sortTable.value?.destroy();
    }

    const ele = draggableRef.value?.querySelector('tbody');

    if (!ele) return;

    sortTable.value = new Sortable(ele as HTMLElement, {
        draggable: '.ant-table-row',
        animation: 200,
        ghostClass: 'draggable-ghost',
        sort: true,
        onEnd: ({ oldIndex, newIndex }) => {
            const curr = formData.table.splice(oldIndex, 1)[0];
            formData.table.splice(newIndex, 0, curr);
            // 判断当前拖拽中是否有选中
            if (selectedKey.value) {
                const [min, max] = [oldIndex, newIndex].sort((a, b) => a - b);
                const [td, index, dataIndex] = selectedKey.value.split('_');
                if (index >= min && index <= max) {
                    // 是否在拖拽范围内
                    const numIndex = Number(index);
                    let _index = newIndex;
                    if (numIndex < oldIndex) {
                        _index = numIndex + 1;
                    } else if (numIndex > oldIndex) {
                        _index = numIndex - 1;
                    }
                    selectedKey.value = [td, _index, dataIndex].join('_');
                    if (editKey.value) {
                        editKey.value = [td, _index, dataIndex].join('_');
                    }
                }
            }
        },
    });
    return sortTable;
};

const controlData = (record: any, index, dataIndex, type) => {
    if (!type || !record) {
        return false;
    }
    const data = getControlData(record);
    // 该数据是否支持编辑
    return data ? !isEqual(data[dataIndex], record[dataIndex]) : true;
};

/**
 * 停止连续输入时，才更新操作记录
 */
// const updateRevoke = debounce((newData: any) => {
//     updateState(newData);
// }, 500);

watch(
    () => [props.dataSource, selectedKey.value],
    () => {
        console.log(props.draggable);
        if (props.draggable !== false) {
            nextTick(() => {
                sortTableHandle();
            });
        }
    },
    { immediate: true },
);

watch(
    () => props.dataSource,
    () => {
        formData.table = setUUIDbyDataSource(props.dataSource);
        if (!initRevokeLock.value) {
            setControlData(cloneDeep(formData.table));
            // updateState(formData.table);
            initRevokeLock.value = true;
        }
    },
    { immediate: true },
);

watch(
    () => formData.table,
    () => {
        // updateRevoke(formData.table);
        emit('change', formData.table);
    },
    { deep: true },
);

defineExpose({
    getData: getData,
});
</script>

<style scoped></style>
