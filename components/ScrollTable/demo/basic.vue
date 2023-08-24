<docs>
---
order: 0
title: 滚动表格
---

滚动表格

</docs>
<template>
    <div class="box">
        <j-scroll-table
            :request="query"
            :params="searchParams"
            :windowHeight="700"
        >
            <template #prev>
                <div class="card">
                    <div><h1 style="font-size: 25px">+</h1></div>
                </div>
            </template>
            <template #card="slotProps">
                <div class="card">
                    <div>
                        <h1 style="font-size: 25px">{{ slotProps?.key }}</h1>
                    </div>
                </div>
            </template>
        </j-scroll-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

const searchParams = reactive<Record<string, any>>({
    current: 1,
    pageIndex: 0,
    pageSize: 25,
    terms: [],
    sorts: [{ name: 'createTime', order: 'desc' }],
});

const query = (params: Record<string, any>) =>
    new Promise((resolve) => {
        const data = Array(500)
            .fill(1)
            .map((item, index) => {
                return {
                    key: index + item,
                    name: index + item,
                };
            });
        const _from = Math.max(params.pageIndex * params.pageSize, 0);
        const _to = Math.min(
            (params.pageIndex + 1) * params.pageSize,
            data.length,
        );
        setTimeout(() => {
            resolve({
                result: {
                    data: data.slice(_from, _to),
                    pageIndex: params.pageIndex || 0,
                    pageSize: params.pageSize || 12,
                    total: data.length,
                },
                status: 200,
            });
        }, 500);
    });

export default defineComponent({
    setup() {
        return {
            query,
            searchParams,
        };
    },
});
</script>

<style lang="less" scoped>
.box {
    height: 600px;
    overflow-y: auto;

    .card {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid lightgray;
    }
}
</style>
