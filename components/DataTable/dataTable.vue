<template>
    <div class="j-data-table">
        <div class="j-data-table-body">
            <Form
                ref="formRef"
                :model="formData"
                layout="horizontal"
                :scroll-to-first-error="true"
            >
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
                            <Popover
                                :visible="
                                    !!formErr[`td_${index}_${column.dataIndex}`]
                                "
                                :content="
                                    formErr[`td_${index}_${column.dataIndex}`]
                                "
                                :get-popup-container="(e) => draggableRef || e"
                            >
                                <div
                                    :class="[
                                        'j-row-selected',
                                        'j-row-click',
                                        selectedKey ===
                                        `td_${index}_${column.dataIndex}`
                                            ? 'j-row-selected-active'
                                            : '',
                                    ]"
                                    :data-index="
                                        column.type ? index : undefined
                                    "
                                    :data-name="column.dataIndex"
                                ></div>
                            </Popover>
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
                                    column.dataIndex !== 'action'
                                        ? 'j-row-click'
                                        : '',
                                    editKey ===
                                    `td_${index}_${column.dataIndex}`
                                        ? 'j-data-table--edit'
                                        : '',
                                ]"
                                :data-index="column.type ? index : undefined"
                                :data-name="column.dataIndex"
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
                                    <template #help></template>

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
                                            :columns="newColumns"
                                            :extra="extra"
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
    onMounted,
    onBeforeUnmount,
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
    Popover,
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

import { cloneDeep, isEqual } from 'lodash-es';
import {
    cleanUUIDbyData,
    initControlDataSource,
    setUUIDbyDataSource,
    useDirection,
    getElData,
    useVirtualScrolling,
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
    extra: Object,
    height: {
        type: Number,
        default: undefined,
    },
});

const emit = defineEmits(['change']);

const selectedKey = ref(); // 选中标识
const editKey = ref(); // 编辑标识
const draggableRef = ref<HTMLDivElement>(null);
const formRef = ref();
const formRowValidate = ref(true); // 行校验，用于上下左右操作控制
const formErr = ref({});

const { setControlData, getControlData } = initControlDataSource();

useDirection((code) => {
    if (selectedKey.value && formRowValidate.value) {
        const columnKeys = newColumns.value
            .map((item: any) => item.dataIndex)
            .filter((key) => key !== 'action');
        const maxLength = formData.table.length - 1;
        const [id, index, dataIndex] = selectedKey.value.split('_');
        const _dataIndex =
            columnKeys.findIndex((key) => key === dataIndex) || 1;

        let newDataIndex = _dataIndex;
        let newIndex = Number(index);

        switch (code) {
            case 'left':
                if (_dataIndex > 1) {
                    newDataIndex--;
                }
                break;
            case 'right':
                if (_dataIndex < columnKeys.length - 1) {
                    newDataIndex++;
                }
                break;
            case 'down':
                if (index < maxLength) {
                    newIndex++;
                }
                break;
            case 'up':
                if (index > 0) {
                    newIndex--;
                }
                break;
        }
        selectedKey.value = `td_${newIndex}_${columnKeys[newDataIndex]}`;
        console.log(newDataIndex, newIndex, columnKeys[newDataIndex]);
    }
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
                formErr.value = {};
                resolve(newData);
                // 退出编辑模式
                if (quit) {
                    editKey.value = '';
                }
            })
            .catch((err) => {
                const { errorFields } = err;
                if (errorFields) {
                    formErr.value = {};
                    errorFields.forEach((item: any, index: number) => {
                        const names = item.name;
                        const key = `td_${names[1]}_${names[2]}`;
                        formErr.value[key] = item.errors[0];
                    });
                    const firstKey = Object.keys(formErr.value)[0];
                    // 未处于编辑模式时，强制第一个错误进入编辑模式
                    if (!editKey.value) {
                        editKey.value = firstKey;
                    } else {
                        //  处于编辑模式，并且编辑项在校验错误项中
                        editKey.value = formErr.value[editKey.value]
                            ? editKey.value
                            : firstKey;
                    }
                }
                reject(err);
            });
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
const draggableClick = (e) => {
    const { target } = e;
    let position = getElData(target);

    if (position[0] !== undefined || position[0] !== 'undefined') {
        rowClick(position.join('_'));
    }
};

const draggableDblClick = (e) => {
    const { target } = e;
    let position = getElData(target);

    if (position[0] !== undefined || position[0] !== 'undefined') {
        editClick(position.join('_'));
    }
};

const customCell = (record, rowIndex, column) => {
    return {
        onClick(e: Event) {
            e.stopPropagation();
            rowClick(column.type ? `td_${rowIndex}_${column.dataIndex}` : '');
        },
        onDblclick(e: Event) {
            e.stopPropagation();
            editClick(column.type ? `td_${rowIndex}_${column.dataIndex}` : '');
        },
    };
};

//  重组columns
const newColumns = computed(() => {
    const hasSerial = 'serial' in props && props.serial !== false;
    const serialItem = {
        dataIndex: 'index',
        title: '序号',
        width: 60,
    };
    const propsColumns = cloneDeep(props.columns);
    const _columns = propsColumns.map((item: any) => {
        // item.customCell = customCell;
        return { ...item };
    });
    return hasSerial ? [serialItem, ..._columns] : _columns;
});

onMounted(() => {
    nextTick(() => {
        const scrollEl = draggableRef.value?.querySelector(
            '.ant-table-tbody',
        ) as HTMLElement;

        if (scrollEl) {
            scrollEl.addEventListener('click', draggableClick);
            scrollEl.addEventListener('dblclick', draggableDblClick);
        }
    });
});

onBeforeUnmount(() => {
    const scrollEl = draggableRef.value?.querySelector(
        '.ant-table-tbody',
    ) as HTMLElement;
    if (scrollEl) {
        scrollEl.removeEventListener('click', draggableClick);
        scrollEl.removeEventListener('dblclick', draggableDblClick);
    }
});

watch(
    () => [props.dataSource, selectedKey.value],
    () => {
        if (props.draggable !== false) {
            nextTick(() => {
                sortTableHandle();
            });
        }
    },
    { immediate: true, deep: true },
);

watch(
    () => props.dataSource,
    () => {
        formData.table = setUUIDbyDataSource(props.dataSource);
        setControlData(cloneDeep(formData.table));
        // 模拟数据，计算总长度
        if (props.height) {
            nextTick(() => {
                useVirtualScrolling(
                    draggableRef.value!,
                    formData.table,
                    props.height,
                );
            });
        }
    },
    { immediate: true, deep: true },
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
