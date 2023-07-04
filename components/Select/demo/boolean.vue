<docs>
---
order: 3
title: 布尔值选择器
---

通过`trueText` 和 `falseText` 来修改label，也可以通过`trueValue` 和 `falseValue`修改默认值

</docs>
<template>
    <j-select-boolean
        v-model:value="value"
        @select="select"
        style="width: 200px"
    />
    <br />
    <j-select-boolean
        style="width: 200px"
        trueText="确定"
        falseText="否定"
        trueValue="truetrue"
        falseValue="falsefalse"
        @select="select2"
    />
</template>

<script setup>
import { ref } from 'vue';
const select = (e) => {
    console.log(e, typeof e);
};

const select2 = (e) => {
    console.log(e, typeof e);
};

const value = ref(false);
</script>

<style scoped></style>
