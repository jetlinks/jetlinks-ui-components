<template>
    <div>
        <j-data-table :columns='columns' :serial="true" :newSource="newSource">
            <template #slot1="scope">
                <div>
                    支持通过实体{{scope.data.index}}
                </div>
            </template>
            <template #slot4>
                <a-tag color="pink">pink</a-tag>
                <a-tag color="red">red</a-tag>
            </template>
        </j-data-table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const columns = ref([
    {
        title: '名称',
        dataIndex: 'name',
        width: '100',
        type: 'text',
        slot:'slot1'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: '100',
        type: 'index',
    },
    {
        title: 'width',
        dataIndex: 'width',
        width: '100',
        type: 'select',
    },
    {
        title: 'width',
        dataIndex: 'width',
        width: '100',
        type: 'select',
        slot:'slot4'
    },
]);
const newSource = ref([  //初始数据
    { name: 1, age: 18, width: 150 },
    { name: 2, age: 21, width: 160 },
    { name: 3, age: 21, width: 160 },
    { name: 4, age: 21, width: 160 },
])

</script>
