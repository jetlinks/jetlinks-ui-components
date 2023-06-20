<template>
    <PopconfirmModal body-style="padding-top:4px;" @confirm="confirm">
        <template #content>
            <div class="data-table-metrics">
                <j-table
                    :data-source="source"
                    :columns="columns"
                    :pagination="false"
                >
                    <template #bodyCell="{ column, record, index }">
                        <template v-if="column.dataIndex === 'index'">
                            {{ index + 1 }}
                        </template>
                        <template v-if="column.dataIndex === 'id'">
                            <j-input
                                v-model="record.value"
                                placeholder="请输入"
                                max-length="64"
                            />
                        </template>
                        <template v-if="column.dataIndex === 'name'">
                            <j-input
                                v-model="record.text"
                                placeholder="请输入"
                                max-length="64"
                            />
                        </template>
                        <template v-if="column.dataIndex === 'range'">
                            <j-select-boolean
                                v-model:value="record.range"
                                true-text="范围值"
                                false-text="固定值"
                                style="width: 100%"
                                @select="() => itemSelect(record)"
                            />
                        </template>
                        <template v-if="column.dataIndex === 'value'">
                            <div>
                                <span>
                                    {{ record.value || '' }}
                                </span>
                                <ValueItem
                                    v-model:value="record.value"
                                    :range="record.range"
                                />
                            </div>
                        </template>
                        <template v-if="column.dataIndex === 'action'">
                            <j-button
                                type="link"
                                @click="() => deleteItem(index)"
                            >
                                <AIcon type="DeleteOutlined" />
                            </j-button>
                        </template>
                    </template>
                </j-table>
                <j-button class="data-table-metrics--add" @click="addItem">
                    <template #icon><AIcon type="PlusOutlined" /></template>
                    添加指标值
                </j-button>
            </div>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ValueItem from './ValueItem.vue';
import {
    Table as JTable,
    Button as JButton,
    AIcon,
    Input as JInput,
    PopconfirmModal,
} from '../../../components';
import Icon from '../Icon.vue';
import { cloneDeep } from 'lodash-es';

const source = reactive([]);

const emit = defineEmits(['update:value', 'change']);

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        width: 60,
    },
    {
        title: '指标标识',
        dataIndex: 'id',
    },
    {
        title: '指标名称',
        dataIndex: 'name',
    },
    {
        title: '指标值',
        dataIndex: 'range',
        width: 120,
    },
    {
        title: '指标配置',
        dataIndex: 'value',
        width: 120,
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: 80,
    },
];
const updateValue = () => {
    emit('update:value', cloneDeep(source));
    emit('change', cloneDeep(source));
};

const addItem = () => {
    source.push({
        id: undefined,
        name: undefined,
        range: false,
        value: undefined,
    });

    updateValue();
};

const deleteItem = (index: number) => {
    source.splice(index, 1);
    updateValue();
};

const itemSelect = (data: any) => {
    data.value = undefined;
};
</script>

<style scoped></style>
