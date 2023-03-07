<docs>
---
order: 2
title: 可选择
---

可选择的表格

</docs>
<template>
    <j-pro-table
        :columns="columns"
        :data-source="data"
        :rowSelection="{
            selectedRowKeys: selectedKeys,
            onChange: onSelectChange,
        }"
        :noPagination="true"
    >
        <template #card="slotProps">
            <div
                style="width: 100%; padding: 20px"
                :style="{
                    border: `1px solid ${
                        selectedKeys.includes(slotProps.key)
                            ? 'red'
                            : 'lightgray'
                    }`,
                }"
                @click="handleClick(slotProps)"
            >
                <div style="width: 100%">
                    {{ slotProps?.name + slotProps.key }}
                </div>
            </div>
        </template>
    </j-pro-table>
</template>

<script lang="ts">
import { random } from 'lodash';
import { defineComponent, ref } from 'vue';
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
];

const data = Array(10)
    .fill(1)
    .map((item, index) => {
        return {
            key: index + item,
            id: index + item,
            name: 'John Brown',
            age: random(100),
            address: 'New York No. 1 Lake Park',
        };
    });

const selectedKeys = ref<string[]>([]);

const onSelectChange = (keys: string[]) => {
    selectedKeys.value = [...keys];
};

const handleClick = (dt: any) => {
    if (selectedKeys.value.includes(dt.key)) {
        const _index = selectedKeys.value.findIndex((i) => i === dt.key);
        selectedKeys.value.splice(_index, 1);
    } else {
        selectedKeys.value = [...selectedKeys.value, dt.key];
    }
};

export default defineComponent({
    setup() {
        return {
            data,
            columns,
            selectedKeys,
            onSelectChange,
            handleClick,
        };
    },
});
</script>
