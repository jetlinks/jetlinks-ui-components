<docs>
---
order: 5
title: 进度圈动态展示
---

## zh-CN

会动的进度条才是好进度条。

</docs>

<template>
    <div>
        <j-progress type="circle" :percent="defaultPercent" />
        <j-button-group>
            <j-button @click="decline">
                <template #icon><minus-outlined /></template>
            </j-button>
            <j-button @click="increase">
                <template #icon><plus-outlined /></template>
            </j-button>
        </j-button-group>
    </div>
</template>
<script lang="ts">
import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
        MinusOutlined,
        PlusOutlined,
    },
    setup() {
        const defaultPercent = ref<number>(0);

        const increase = () => {
            const percent = defaultPercent.value + 10;
            defaultPercent.value = percent > 100 ? 100 : percent;
        };

        const decline = () => {
            const percent = defaultPercent.value - 10;
            defaultPercent.value = percent < 0 ? 0 : percent;
        };
        return {
            defaultPercent,
            increase,
            decline,
        };
    },
});
</script>
