<template>
    <div class="j-data-table">
        <div class="j-data-table-body">
            <Form ref="formRef" :model="formData">
                <div class="draggable-body">
                    <Table
                        v-bind="props"
                        :columns="newColumns"
                        :pagination="false"
                        :data-source="formData.table"
                        :row-key="props.rowKey || 'id'"
                    >
                        <template #bodyCell="{ column, record, index }">
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
                                    selectedKey ===
                                    `td_${index}_${column.dataIndex}`
                                        ? 'j-data-table-td-selected'
                                        : '',
                                    editKey ===
                                    `td_${index}_${column.dataIndex}`
                                        ? 'j-data-table--edit'
                                        : '',
                                    controlData(
                                        record[column.dataIndex],
                                        index,
                                        column.dataIndex,
                                        column.type,
                                    ),
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
                                <!--         未编辑           -->
                                <template
                                    v-if="
                                        editKey !==
                                            `td_${index}_${column.dataIndex}` ||
                                        !column.type
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
                                <!--         编辑中          -->
                                <template v-else>
                                    <FormItem
                                        :name="[
                                            'table',
                                            index,
                                            column.dataIndex,
                                        ]"
                                        :rules="column.form?.rules"
                                        :required="!!column.form?.required"
                                    >
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
                                            :is="column.components.name"
                                            v-else-if="
                                                column.type === 'components' &&
                                                column.components.name
                                            "
                                            v-bind="column.components.props"
                                            v-model:value="
                                                formData.table[index][
                                                    column.dataIndex
                                                ]
                                            "
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
                                    </FormItem>
                                </template>
                            </div>
                            <!--              -->
                            <!--              <tr v-for="(a, index) in slotProps" :key="`${a}`" :class="draggableClassName">-->
                            <!--                <td v-for="b in newColumns" :key="`td_${index}_${column.dataIndex}`" :class="['j-data-table-td',selectedKey === `td_${index}_${column.dataIndex}` ? 'j-data-table-td-selected' : '']">-->
                            <!--                  <div v-if="column.dataIndex === 'index'">-->
                            <!--                    {{ index }}-->
                            <!--                  </div>-->
                            <!--                 -->
                            <!--                </td>-->
                            <!--              </tr>-->
                        </template>
                    </Table>
                </div>
            </Form>
        </div>
        <!--    <div class="j-data-table-footer">-->
        <!--      <Button class="j-data-table-footer&#45;&#45;add" @click="addDataSource">-->
        <!--        <template #icon>-->
        <!--          <AIcon type="PlusOutlined" />-->
        <!--        </template>-->
        <!--        新增-->
        <!--      </Button>-->
        <!--    </div>-->
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps, nextTick, reactive, watch, ref } from 'vue';
import type { PropType } from 'vue';
import Table, { tableProps } from 'ant-design-vue/lib/table';
import { Form, FormItem, Input, InputNumber, Ellipsis } from '../components';
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
import useRevoke from './useRevoke';
import { cloneDeep, debounce, isEqual } from 'lodash-es';

const draggableClassName = 'draggable-item';

const props = defineProps({
    ...tableProps(),
    serial: Boolean,
});

const selectedKey = ref(); // 选中标识
const editKey = ref(); // 编辑标识
const controlTable = ref<any[]>([]); // 对照组

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

const { updateState } = useRevoke(formData.table, {
    undo: (data) => {
        formData.table = data;
    },
});

const TypeSelectDataIndex = (row: any) =>
    row[
        newColumns.value?.find((item) => item.type === 'TypeSelect')?.dataIndex
    ];

/**
 * 单个选中
 * @param key
 */
const rowClick = (key: string) => {
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
    editKey.value = key;
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
 * 新增额外数据
 */
// const addDataSource = () => {
//     const obj = {};
//     for (const item of props.columns) {
//         const dataIndex = item.dataIndex;
//         obj[dataIndex] = undefined;
//     }
//     formData.table.push(obj);
// };

/**
 * 初始化拖拽
 */
const sortTableHandle = () => {
    if (sortTable.value) {
        sortTable.value?.destroy();
    }
    const ele = document.querySelector('.draggable-body .ant-table-tbody');
    console.log(ele);
    sortTable.value = new Sortable(ele as HTMLElement, {
        draggable: '.ant-table-row',
        animation: 200,
        ghostClass: 'draggable-ghost',
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

const controlData = (data: any, index, dataIndex, type) => {
    if (
        type &&
        (!controlTable.value.length ||
            !isEqual(data, controlTable.value[index]?.[dataIndex]))
    ) {
        // 有type并且数据发生变化时
        return 'update';
    }
    return '';
};

/**
 * 停止连续输入时，才更新操作记录
 */
const updateRevoke = debounce((newData: any) => {
    updateState(newData);
}, 500);

watch(
    () => [props.dataSource, selectedKey.value],
    () => {
        nextTick(() => {
            sortTableHandle();
        });
    },
    { immediate: true },
);

watch(
    () => props.dataSource,
    () => {
        formData.table = props.dataSource;
        if (!initRevokeLock.value) {
            controlTable.value = cloneDeep(props.dataSource);
            updateState(formData.table);
            initRevokeLock.value = true;
        }
    },
    { immediate: true },
);

watch(
    () => formData.table,
    () => {
        updateRevoke(formData.table);
    },
    { deep: true },
);
</script>

<style scoped></style>
