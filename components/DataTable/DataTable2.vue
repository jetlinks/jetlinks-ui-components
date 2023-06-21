<template>
    <div class="j-data-table">
        <div class="j-data-table-body">
            <Form ref="formRef" :model="form">
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
                                ]"
                                @click.stop="
                                    () => {
                                        rowClick(
                                            `td_${index}_${column.dataIndex}`,
                                        );
                                    }
                                "
                                @dblclick.stop="
                                    () => {
                                        editClick(
                                            `td_${index}_${column.dataIndex}`,
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
                                        {{ record[column.dataIndex] }}
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
                                            v-model="
                                                formData.table[index][
                                                    column.dataIndex
                                                ]
                                            "
                                            :placeholder="`请输入${column.title}`"
                                            maxlength="64"
                                            style="width: 100%"
                                        />
                                        <InputNumber
                                            v-if="column.type === 'number'"
                                            v-model="
                                                formData.table[index][
                                                    column.dataIndex
                                                ]
                                            "
                                            :placeholder="`请输入${column.title}`"
                                        />
                                        <div
                                            v-else
                                            class="j-data-table-row--config"
                                        >
                                            <div
                                                class="j-data-table-config--text"
                                            >
                                                <TypeSelect
                                                    v-model="
                                                        formData.table[index][
                                                            newColumns.value?.find(
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
                                                <Integer
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
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <Double
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
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <Boolean
                                                    v-else-if="
                                                        ['boolean'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <Enum
                                                    v-else-if="
                                                        ['enum'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <Array
                                                    v-else-if="
                                                        ['array'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <File
                                                    v-else-if="
                                                        ['file'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <Date
                                                    v-else-if="
                                                        ['date'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <String
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
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <DataObject
                                                    v-else-if="
                                                        ['object'].includes(
                                                            TypeSelectDataIndex(
                                                                record,
                                                            ),
                                                        )
                                                    "
                                                    v-model="
                                                        formData.table[index][
                                                            column.dataIndex
                                                        ]
                                                    "
                                                />
                                                <Input
                                                    v-else
                                                    v-model="
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
import {
    computed,
    defineProps,
    nextTick,
    onMounted,
    reactive,
    watch,
    ref,
} from 'vue';
import type { PropType } from 'vue';
import { draggableClassName, sortTableHandle } from './util';
import Table, { tableProps } from 'ant-design-vue/lib/table';
import {
    Form,
    FormItem,
    Button,
    AIcon,
    Input,
    InputNumber,
} from '../components';
import {
    TypeSelect,
    Integer,
    Double,
    Array,
    Date,
    Object as DataObject,
    Boolean,
} from './components';
import { swap } from 'lodash-es';

const props = defineProps({
    ...tableProps(),
    serial: Boolean,
});

const selectedKey = ref(); // 选中标识
const editKey = ref(); // 编辑标识

//  重组columns
const newColumns = computed(() => {
    const hasSerial = 'serial' in props && props.serial !== false;
    const serialItem = {
        dataIndex: 'index',
        title: '序号',
    };
    return hasSerial ? [serialItem, ...props.columns] : props.columns;
});

//  表单值
const formData = reactive<{ table: any[] }>({
    table: [],
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
 * 新增额外数据
 */
const addDataSource = () => {
    const obj = {};
    for (const item of props.columns) {
        const dataIndex = item.dataIndex;
        obj[dataIndex] = undefined;
    }
    formData.table.push(obj);
};

watch(
    () => props.dataSource,
    () => {
        formData.table = props.dataSource;
    },
    { immediate: true },
);

onMounted(() => {
    nextTick(() => {
        sortTableHandle((oldIndex, newIndex) => {
            // 初始化拖拽
            // [ formData.table[newIndex], formData.table[oldIndex]] = [formData.table[oldIndex], formData.table[newIndex]]
            const source = formData.table[oldIndex];
            const destination = formData.table[newIndex];
            formData.table[newIndex] = source;
            formData.table[oldIndex] = destination;
            console.log(oldIndex, newIndex, formData.table);
        });
    });
});
</script>

<style scoped></style>
