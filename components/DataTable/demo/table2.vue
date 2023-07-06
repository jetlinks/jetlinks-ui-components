<docs>

---
order: 5
title: 基础
---

</docs>
<template>
    <div>
        <j-data-table
            :columns="columns"
            :serial="true"
            :dataSource="newSource"
            :height="600"
            ref="tableRef"
        >
            <!--            <template #name="scope">-->
            <!--                <div>支持通过实体{{ scope.data.index }}</div>-->
            <!--            </template>-->
            <template #boolean="{ data }">
                <DataTableObject
                    v-model:value="data.record.boolean"
                    :onAdd="additems"
                />
            </template>
            <template #action="{ data }">
                <a-tag
                    color="pink"
                    @click="
                        () => {
                            remove(data.index);
                        }
                    "
                    >pink</a-tag
                >
                <a-tag
                    color="red"
                    @click="
                        () => {
                            addItem(data, data.index);
                        }
                    "
                    >copy</a-tag
                >
            </template>
            <template #config="{ data }">
                {{ data.record.name }}
            </template>
        </j-data-table>
        <j-button @click="addItem">新增</j-button>
        <j-button @click="save">保存</j-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
    DataTableBoolean,
    DataTableArray,
    DataTableObject,
    DataTableDate,
    DataTableEnum,
} from 'jetlinks-ui-components';

const columns = ref([
    {
        title: '名称',
        dataIndex: 'name',
        width: 200,
        type: 'text',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: 200,
        type: 'number',
        form: {
            required: true,
            rules: [
                {
                    validator(_, value) {
                        if (!value) {
                            return Promise.reject('请输入年龄');
                        }
                        return Promise.resolve();
                    },
                },
            ],
        },
    },
    {
        title: 'width',
        dataIndex: 'width',
        width: 200,
        resizable: true,
        type: 'TypeSelect',
    },
    {
        title: '其他配置',
        dataIndex: 'config',
        type: 'components',
        form: {
            name: [''],
        },
        components: {
            name: DataTableObject,
        },
    },
    {
        title: '布尔值',
        dataIndex: 'boolean',
        // type: 'components',
        // components: {
        //     name: DataTableDate,
        // },
        width: 150,
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: 140,
    },
]);
const newSource = ref([]);

const tableRef = ref();

const addItem = (data, index) => {
    console.log(data, index);
    if (index) {
        tableRef.value.addEditor(index + 1, 'id');
        tableRef.value.addEditor(index + 1, 'age');
        tableRef.value.addEditor(index + 1, 'name');
    } else {
    }
    newSource.value.push({
        id: new Date().getTime() + '00000000',
        age: undefined,
        name: undefined,
        width: undefined,
        config: undefined,
        boolean: false,
    });
};

const additems = () => {
    return {
        id: new Date().getTime() + '00000000',
        age: undefined,
        name: undefined,
        width: undefined,
        config: undefined,
        boolean: false,
    };
};

const remove = (index) => {
    tableRef.value.removeItem(index);
};

const copy = (data, index) => {
    tableRef.value.addItem(data.record, index);
};

const save = async () => {
    const data = await tableRef.value?.getData();
    newSource.value = data;
    console.log(data);
};

const initData = () => {
    setTimeout(() => {
        newSource.value = new Array(10).fill('').map((_, index) => {
            return {
                id: new Date().getTime() + index,
                age: index + 1,
                name: '测试文案' + (index + 1),
                width: 10 + index,
                config: undefined,
                boolean: false,
            };
        });
    }, 1000);
};

initData();
</script>
