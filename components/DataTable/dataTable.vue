<template>
    <div
        ref="fullRef"
        :class="['j-data-table', isFullscreen ? 'j-data-table-fullscreen' : '']"
    >
        <div v-if="showTool !== false" class="j-data-table-tool">
            <div v-if="showToolLeft" class="j-data-table-tool-left">
                <div v-if="showSearch" class="j-data-table-search">
                    <InputSearch
                        allow-clear
                        style="width: 220px"
                        v-bind="searchProps"
                        @search="search"
                    />
                </div>
                <div class="j-data-table-full">
                    <AIcon
                        :type="
                            isFullscreen
                                ? 'FullscreenExitOutlined'
                                : 'FullscreenOutlined'
                        "
                        @click="toggle"
                    />
                </div>
                <div
                    v-if="showResult.visible"
                    class="j-data-table-search-result"
                >
                    已查询到<span>{{ showResult.msg }}</span> 条相关数据
                </div>
            </div>
            <div class="j-data-table-expand">
                <slot name="expand"> </slot>
            </div>
        </div>
        <div class="j-data-table-body">
            <Form
                ref="formRef"
                layout="horizontal"
                :model="formData"
                :scroll-to-first-error="true"
                @validate="validate"
            >
                <div ref="draggableRef" class="draggable-body">
                    <Table
                        v-bind="props"
                        :columns="newColumns"
                        :pagination="false"
                        :data-source="virtualData"
                        :row-key="props.rowKey || '_uuid'"
                        :scroll="
                            height
                                ? {
                                      y: !isFullscreen
                                          ? height < 200
                                              ? 200
                                              : height
                                          : `calc(100vh - 160px)`,
                                  }
                                : undefined
                        "
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
                            <!-- 判断是否已修改 -->
                            <div
                                v-if="
                                    (editKeys[
                                        `td_${index}_${column.dataIndex}`
                                    ] ||
                                        column.control) &&
                                    controlData(
                                        record,
                                        record._sortIndex,
                                        column.dataIndex,
                                        column.type,
                                    )
                                "
                                class="j-row-update"
                            ></div>
                            <FormError
                                :id="`td_${index}_${column.dataIndex}`"
                                :index="index"
                                :visible="
                                    !!formErr[`td_${index}_${column.dataIndex}`]
                                "
                                :content="
                                    formErr[`td_${index}_${column.dataIndex}`]
                                "
                                :is-edit="
                                    formErr[`td_${index}_${column.dataIndex}`]
                                "
                                :selected="
                                    selectedKey ===
                                    `td_${index}_${column.dataIndex}`
                                "
                                :name="
                                    column.type ? column.dataIndex : undefined
                                "
                                :get-popup-container="(e) => e.parentNode"
                                :placement="index > 1 ? 'top' : 'bottom'"
                            />
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
                                        `td_${index}_${column.dataIndex}` &&
                                    column.type
                                        ? 'j-data-table--edit'
                                        : '',
                                ]"
                                :data-index="column.type ? index : undefined"
                                :data-name="column.dataIndex"
                            >
                                <!--         不需要校验, 未编辑           -->
                                <template
                                    v-if="
                                        !column.form &&
                                        !editKeys[
                                            `td_${index}_${column.dataIndex}`
                                        ]
                                    "
                                >
                                    <slot
                                        :name="column.dataIndex"
                                        :data="{
                                            record,
                                            index,
                                        }"
                                    >
                                        <Ellipsis>
                                            {{ record[column.dataIndex] }}
                                        </Ellipsis>
                                    </slot>
                                </template>
                                <FormItem
                                    v-else-if="!column.type && column.form"
                                    :name="
                                        ['table', index].concat(
                                            column.form?.name ||
                                                column.dataIndex,
                                        )
                                    "
                                    :rules="column.form?.rules"
                                    :validate-first="true"
                                >
                                    <template #help></template>
                                    <slot
                                        :name="column.dataIndex"
                                        :data="{
                                            record,
                                            index,
                                        }"
                                    >
                                    </slot>
                                </FormItem>
                                <!--         需要校验          -->
                                <FormItem
                                    v-else
                                    :name="
                                        ['table', index].concat(
                                            column.form?.name ||
                                                column.dataIndex,
                                        )
                                    "
                                    :rules="column.form?.rules"
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
                                            :data="{
                                                record,
                                                index,
                                            }"
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
                                            :maxlength="64"
                                            style="width: 100%"
                                            @focus="inputFocus = true"
                                            @blur="inputFocus = false"
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
                                            @focus="inputFocus = true"
                                            @blur="inputFocus = false"
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
                                        <Select
                                            v-else-if="column.type === 'select'"
                                            v-model:value="
                                                formData.table[index][
                                                    column.dataIndex
                                                ]
                                            "
                                            style="width: 100%"
                                            :options="column.options"
                                            v-bind="column.components?.props"
                                            :placeholder="`请选择${column.title}`"
                                        />
                                        <BooleanSelect
                                            v-else-if="
                                                column.type === 'booleanSelect'
                                            "
                                            v-model:value="
                                                formData.table[index][
                                                    column.dataIndex
                                                ]
                                            "
                                            style="width: 100%"
                                            v-bind="column.components?.props"
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
                                            @focus="inputFocus = true"
                                            @blur="inputFocus = false"
                                        />
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
    provide,
    getCurrentInstance,
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
    InputSearch,
    Select,
} from '../components';
import BooleanSelect from '../Select/Boolean.vue';
import { DataTableTypeSelect, FormError } from './components';
import Sortable from 'sortablejs';
import { useFullscreen, useInfiniteScroll } from '@vueuse/core';

import {
    cloneDeep,
    debounce,
    isBoolean,
    isFunction,
    throttle,
} from 'lodash-es';
import {
    cleanUUIDbyData,
    initControlDataSource,
    setUUIDbyDataSource,
    useDirection,
    getElData,
    getUUID,
} from './util';
import { FULL_CODE } from './index';

const draggableClassName = 'draggable-item';
const { ctx } = getCurrentInstance();

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
        default: 200,
    },
    showSearch: {
        type: Boolean,
        default: true,
    },
    showTool: {
        type: [Boolean, Object],
        default: true,
    },
    searchKey: {
        type: String,
        default: 'name',
    },
    sortKey: {
        type: String,
        default: 'id',
    },
    searchProps: {
        type: Object,
        default: () => ({}),
    },
});

const emit = defineEmits(['change', 'update:dataSource', 'editStatus']);

const selectedKey = ref(); // 选中标识
const editKey = ref(); // 编辑标识
const draggableRef = ref<HTMLDivElement>(null);
const formRef = ref();
const formRowValidate = ref(true); // 行校验，用于上下左右操作控制
const formErr = ref({});
const updateStatus = ref<Set<string>>(new Set());
const countNumber = ref(0);
const maxLength = 30;

const editKeys = ref({});

const fullRef = ref();

provide(FULL_CODE, fullRef);

const { isFullscreen, enter, exit, toggle } = useFullscreen(fullRef);
const formErrorCache = ref({});
const inputFocus = ref(false);

const showResult = reactive({
    msg: 0,
    visible: false,
});

//  表单值
const formData = reactive<{ table: any[]; search: any[] }>({
    table: [],
    search: [],
});

const virtualData = computed(() => {
    return (
        formData.table?.slice?.(0, (countNumber.value + 1) * maxLength) || []
    );
});

const sortTable = ref();

const showToolLeft = computed(() => {
    return isBoolean(props.showTool)
        ? props.showTool
        : props.showTool.left !== false;
});

useDirection((code) => {
    if (selectedKey.value && formRowValidate.value && !inputFocus.value) {
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
    }
});

const sortTables = (data: any[]) => {
    const { sortKey } = props;
    return data.sort((a: any, b: any) => {
        if (a[sortKey] > b[sortKey]) {
            return 1;
        } else if (a[sortKey] < b[sortKey]) {
            return -1;
        } else {
            return 0;
        }
    });
};

const search = (e) => {
    const includeArr = [];
    const filterArr = [];
    selectedKey.value = '';
    editKey.value = '';
    if (e) {
        formData.table.forEach((item) => {
            if (item[props.searchKey]?.includes(e)) {
                includeArr.push(item);
            } else {
                filterArr.push(item);
            }
        });
        formData.table = [...includeArr, ...filterArr].map((item, index) => ({
            ...item,
            index: index + 1,
        }));
        showResult.msg = includeArr.length;
        showResult.visible = true;
    } else {
        showResult.msg = 0;
        showResult.visible = false;
        formData.table = sortTables(formData.table);
    }
};

const cleanEditStatus = () => {
    editKeys.value = {};
    updateStatus.value.clear();
};
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
                reject(err);
            });
    });
};
/**
 * 单个选中
 * @param key
 */
const rowClick = async (key: string) => {
    // if (!data) return;
    if (Object.keys(formErr.value).length && !formErr.value[key]) return;

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
    if (Object.keys(formErr.value).length && !formErr.value[key]) return;
    if (key === selectedKey.value) {
        editKey.value = key;
        editKeys.value[key] = true;
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
        onEnd: ({ oldIndex, newIndex, to, from }) => {
            // 获取真正的index
            const oldTarget = draggableRef.value
                .querySelector('.ant-table-tbody')
                .querySelectorAll('.ant-table-row')[oldIndex - 1];
            const newTarget = draggableRef.value
                .querySelector('.ant-table-tbody')
                .querySelectorAll('.ant-table-row')[newIndex - 1];
            const oldTargetPositions = getElData(
                oldTarget.querySelectorAll('.j-row-click')?.[1],
            );
            const newTargetPositions = getElData(
                newTarget.querySelectorAll('.j-row-click')?.[1],
            );

            const _oldIndex = oldTargetPositions[1];
            const _newIndex = newTargetPositions[1];

            const curr = formData.table.splice(_oldIndex - 1, 1)[0];

            formData.table.splice(_newIndex - 1, 0, curr);

            const [min, max] = [_oldIndex, _newIndex].sort((a, b) => a - b);
            for (let i = min; i <= max; i++) {
                formData.table[i - 1].index = i;
            }
            // 判断当前拖拽中是否有选中
            if (selectedKey.value) {
                const [td, index, dataIndex] = selectedKey.value.split('_');
                if (index >= min && index <= max) {
                    // 是否在拖拽范围内
                    const numIndex = Number(index);
                    let _index = _newIndex;
                    if (numIndex < _oldIndex) {
                        _index = numIndex + 1;
                    } else if (numIndex > _oldIndex) {
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

/**
 * 对比数据是否修改
 * @param record
 * @param index
 * @param dataIndex
 * @param type
 */
const controlData = (record: any, index, dataIndex, type) => {
    const item: any = props.columns.find((a: any) => a.dataIndex === dataIndex);
    const key = `td_${index}_${dataIndex}`;

    if (item?.control) {
        const isControl = item.control(record, props.dataSource[index]);
        if (isControl) {
            updateStatus.value.add(key);
        } else {
            updateStatus.value.delete(key);
        }

        return isControl;
    }
    if (!type || !record) {
        return false;
    }
    const oldData = props.dataSource[index]?.[dataIndex];

    const isControl = oldData
        ? JSON.stringify(oldData) !== JSON.stringify(record[dataIndex])
        : true;
    if (isControl) {
        updateStatus.value.add(key);
    } else {
        updateStatus.value.delete(key);
    }
    // 该数据是否支持编辑
    return isControl;
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
        if (item.form?.rules) {
            const index = item.form.rules.findIndex(
                (item) => item.callback && isFunction(item.callback),
            );
            if (index >= 0) {
                const { callback } = item.form.rules[index];
                item.form.rules[index] = {
                    validator(rule, value) {
                        return callback(rule, value, formData.table);
                    },
                };
            }
        }

        item.customCell = (record, rowIndex, column) => {
            return {
                onClick(e: Event) {
                    e.stopPropagation();
                    rowClick(
                        !['index', 'action'].includes(column.dataIndex)
                            ? `td_${rowIndex}_${column.dataIndex}`
                            : '',
                    );
                },
                onDblclick(e: Event) {
                    e.stopPropagation();
                    let isEdit = item.doubleClick
                        ? item.doubleClick(record, rowIndex, column.dataIndex)
                        : true;
                    if (isEdit) {
                        editClick(
                            column.type
                                ? `td_${rowIndex}_${column.dataIndex}`
                                : '',
                        );
                    }
                },
            };
        };
        return { ...item };
    });
    return hasSerial ? [serialItem, ..._columns] : _columns;
});

const addEditor = (index: number, dataIndex: string) => {
    const key = `td_${index}_${dataIndex}`;
    editKeys.value[key] = true;
};

const addEditorAll = (index: number) => {
    for (const item of props.columns) {
        addEditor(index, (item as any).dataIndex);
    }
};

const addItem = async (_data: any, index?: number) => {
    if (_data) {
        // 先进行校验
        const vail = await getData();
        const data = [...formData.table];
        let editIndex = index + 1;
        if (index !== undefined) {
            data.splice(index + 1, 0, {
                ..._data,
                _uuid: getUUID(),
            });
        } else {
            data.push({
                ..._data,
                _uuid: getUUID(),
            });
            editIndex = data.length - 1;
        }
        formData.table = data;
        //新增项进入编辑模式

        newColumns.value.forEach((item, _index) => {
            const _key = `td_${editIndex}_${item.dataIndex}`;
            editKeys.value[_key] = true;
            if (_index === 0) {
                editKey.value = _key;
            }
        });
    }
    return cleanUUIDbyData(formData.table);
};

const removeEditKeysByIndex = (editIndex: number) => {
    newColumns.value.forEach((item, _index) => {
        const _key = `td_${editIndex}_${item.dataIndex}`;
        delete editKeys.value[_key];
        delete formErr.value[_key];
    });
};

const removeItem = (index: number) => {
    if (index >= 0) {
        const data = [...formData.table];
        data.splice(index, 1);
        formData.table = data;

        removeEditKeysByIndex(index);
        updateStatus.value.add('delete_' + index);
    }
    return cleanUUIDbyData(formData.table);
};

const initItems = () => {
    formData.table = sortTables(setUUIDbyDataSource(props.dataSource));
    formRef.value?.clearValidate();
    countNumber.value = 0;
    return cleanUUIDbyData(formData.table);
};

const stringify = (data: any[]) => {
    return data ? JSON.stringify(data) : '';
};

const firstValidate = debounce(() => {
    const key = Object.keys(formErrorCache.value)[0];
    if (key) {
        const errorNode = draggableRef.value.querySelector(
            `.${key}`,
        ) as HTMLElement;
        const bodyNode = draggableRef.value.querySelector(
            `.ant-table-body`,
        ) as HTMLElement;
        if (errorNode) {
            const index = Number(key.split('_')[1]);
            bodyNode.scrollTop =
                errorNode.getBoundingClientRect().height * index;
        }
        const { errorMsg } = formErrorCache.value[key];
        formErr.value[key] = errorMsg;
        if (!editKey.value) {
            editKey.value = key;
        } else {
            //  处于编辑模式，并且编辑项在校验错误项中
            editKey.value = formErrorCache.value[editKey.value]
                ? editKey.value
                : key;
        }
        updateStatus.value.add(editKey.value);
    }
    formErrorCache.value = {};
}, 10);

const validate = (name, status, errorMsg) => {
    const key = `td_${name[1]}_${name[2]}`;
    if (!status) {
        formErrorCache.value[key] = {
            errorMsg: errorMsg[0],
            status: status,
        };
    } else {
        delete formErr.value[key];
    }
    firstValidate();
};

onMounted(() => {
    nextTick(() => {
        const bodyNode = draggableRef.value.querySelector(
            '.ant-table-body',
        ) as HTMLElement;
        bodyNode.style.minHeight = '200px';
        useInfiniteScroll(
            draggableRef.value!.querySelector('.ant-table-body') as HTMLElement,
            () => {
                //  滑动到底部
                if (
                    countNumber.value * maxLength <= formData.table.length &&
                    formData.table[(countNumber.value + 1) * maxLength + 1]
                ) {
                    //  有多余数据时，进行添加
                    countNumber.value++;
                }
            },
            {
                distance: 10,
            },
        );
    });
});

watch(
    () => JSON.stringify(props.dataSource),
    () => {
        formData.table = setUUIDbyDataSource(props.dataSource);
    },
    { immediate: true },
);

watch(
    () => formData.table,
    () => {
        // updateRevoke(formData.table);
        const data = cleanUUIDbyData(formData.table);
        emit('change', data);
        emit('update:dataSource', data);
    },
    { deep: true },
);

watch(
    () => JSON.stringify([...updateStatus.value.values()]),
    () => {
        emit('editStatus', !![...updateStatus.value.values()].length);
    },
);

watch(
    () => isFullscreen.value,
    () => {
        if (!isFullscreen.value) {
            console.log('重新渲染');
            ctx.$forceUpdate();
        }
    },
);

defineExpose({
    getData: getData,
    addItem: addItem,
    removeItem: removeItem,
    initItems: initItems,
    addEditor: addEditor,
    addEditorAll: addEditorAll,
    cleanEditStatus: cleanEditStatus,
    fullRef: fullRef.value,
});
</script>

<style scoped></style>
