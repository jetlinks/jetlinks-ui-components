<docs>
---
order: 0
title: 树形控件
---

展示筛选，可勾选，可选中，禁用，默认展开等功能
  
</docs>
<template>
    <Input v-model="filterText" placeholder="请输入" @change="change" />
    <j-tree checkable :tree-data="treeData" defaultExpandAll />
</template>

<script lang="ts" setup>
import { Input } from 'ant-design-vue';
import type { TreeProps } from 'ant-design-vue';
import { ref } from 'vue';
import { treeFilter } from 'jetlinks-ui-components/Tree';

const data: TreeProps['treeData'] = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                    { title: 'leaf', key: '0-0-0-1' },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ key: '0-0-1-0', title: 'sss' }],
            },
        ],
    },
];
const treeData = ref<TreeProps[]>();
const filterText = ref('');
treeData.value = [...data];
const change = (val) => {
    treeData.value = treeFilter<TreeProps>(data, val.target.value, 'title');
};
</script>
