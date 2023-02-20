<docs>
---
order: 2
title: 最大高度
---

当元素高度超过最大高度，才会显示滚动条。

</docs>
<template>
    <Space>
        <j-button @click="add">Add Item</j-button>
        <j-button @click="onDelete">Delete Item</j-button>
    </Space>
    <j-scrollbar max-height="400">
        <p v-for="item in count" :key="item" class="scrollbar-demo-item">
            {{ item }}
        </p>
    </j-scrollbar>
</template>

<script lang="ts" setup>
import { Space } from 'ant-design-vue';
import { ref } from 'vue';
const count = ref(3);
const add = () => {
    count.value++;
};
const onDelete = () => {
    if (count.value > 0) {
        count.value--;
    }
};
</script>

<style scoped lang="less">
.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: #ecf5ff;
    color: #47a2ff;
}
</style>
