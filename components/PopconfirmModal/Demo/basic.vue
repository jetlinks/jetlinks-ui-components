<docs>
---
order: 0
title: 基本用法
---

</docs>
<template>
    <j-popconfirm-modal>
        <template #title> 这是一段文字 </template>
        <template #content>
            <j-popconfirm-modal>
                <template #title> 这是一段文字2 </template>
                <template #content>
                    <j-popconfirm-modal>
                        <template #title> 这是一段文字3 </template>
                        <template #content>
                            <j-popconfirm-modal>
                                <template #title> 这是一段文字4 </template>
                                <j-button>按钮5</j-button>
                            </j-popconfirm-modal>
                        </template>
                        <j-button>按钮3</j-button>
                    </j-popconfirm-modal>
                </template>
                <j-button>按钮2</j-button>
            </j-popconfirm-modal>
        </template>
        <j-button>按钮</j-button>
    </j-popconfirm-modal>
</template>

<script>
export default {
    name: 'basic',
};
</script>

<style scoped></style>
