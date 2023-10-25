<docs>

---
order: 5
title: 基础
---

</docs>
<template>
    <div>
        <j-data-table
            columnDrag
            :columns="columns"
            :serial="true"
            :dataSource="newSource"
            :height="200"
            @editStatus="editStatus"
            ref="tableRef"
        >
            <template #width="{ data }">
                <DataTableFile v-model:value="data.record.width" />
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
                            copy(data.record, data.index);
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
        <span>当前修改状态{{ editStatusRef }}</span>
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
    DataTableFile,
    DataTableInteger,
    DataTableDouble,
} from 'jetlinks-ui-components';

const columns = ref([
    {
        title: '名称',
        dataIndex: 'name',
        width: 200,
        type: 'TypeSelect',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: 200,
        type: 'number',
        form: {
            isVerify: true,
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
        type: 'components',
        components: {
            name: DataTableInteger,
        },
    },
    {
        title: '其他配置',
        dataIndex: 'config',
        type: 'components',
    },
    {
        title: '布尔值',
        dataIndex: 'boolean',
        type: 'components',
        components: {
            name: DataTableBoolean,
        },
        // form: {
        //   required: true,
        //   name: ['config','boolean'],
        //   rules: [{
        //     callback(_: any, value: any) {
        //       // if (!value?.type) {
        //       console.log(value)
        //       return Promise.reject('请选择数据类型')
        //       // }
        //       // return Promise.resolve()
        //     }
        //   }]
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
const editStatusRef = ref(false);

const addItem = (data, index) => {
    if (index) {
        tableRef.value.addEditor(index + 1, 'id');
        tableRef.value.addEditor(index + 1, 'age');
        tableRef.value.addEditor(index + 1, 'name');
    } else {
    }

    tableRef.value.addItem({
        id: new Date().getTime() + '00000000',
        age: undefined,
        name: undefined,
        width: undefined,
        config: {
            boolean: false,
        },
        boolean: false,
    });
    // newSource.value.push();
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
    const object = data;
    object.id = new Date().getTime();
    console.log(object);
    tableRef.value.addItem(object, index);
};

const save = async () => {
    const data = await tableRef.value?.getData();
    newSource.value = data;
    console.log(data);
    tableRef.value.cleanEditStatus();
};

const editStatus = (status) => {
    console.log(status);
    editStatusRef.value = status;
};

const initData = () => {
    newSource.value = new Array(10).fill('').map((_, index) => {
        return {
            id: new Date().getTime() + index,
            age: index + 1,
            name: '测试文案' + (index + 1),
            width: 'base64',
            config: {
                elements: [
                    {
                        value: '123',
                        text: '123',
                    },
                ],
            },
            boolean: undefined,
        };
    });
};

initData();
</script>
