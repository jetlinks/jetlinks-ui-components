<docs>
---
order: 0
title: 大数据
---

大数据筛选
    
</docs>
<template>
    <Input v-model="filterText" placeholder="请输入" @change="change" />
    <j-tree checkable :tree-data="treeData" />
</template>

<script lang="ts" setup>
import { Input } from 'ant-design-vue';
import type { TreeProps } from 'ant-design-vue';
import { ref } from 'vue';
import { treeFilter } from 'JUI/Tree';

function dig(path = '0', level = 3) {
    const list: TreeProps['treeData'] = [];
    for (let i = 0; i < 10; i += 1) {
        const key = `${path}-${i}`;
        const treeNode: TreeProps['treeData'][number] = {
            title: key,
            key,
        };

        if (level > 0) {
            treeNode.children = dig(key, level - 1);
        }

        list.push(treeNode);
    }
    return list;
}

const data = dig();
const treeData = ref<TreeProps[]>();
const filterText = ref('');
treeData.value = [...data];
const change = (val) => {
    treeData.value = treeFilter<TreeProps>(data, val.target.value, 'title');
};
</script>
