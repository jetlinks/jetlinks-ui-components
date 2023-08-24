<docs>
---
order: 2
title: 前置/后置标签
---

## zh-CN

用于配置一些固定组合。

</docs>

<template>
    <j-space direction="vertical">
        <j-input-number
            v-model:value="value1"
            addon-before="+"
            addon-after="$"
        ></j-input-number>
        <j-input-number v-model:value="value2">
            <template #addonBefore>
                <j-select v-model:value="addonBeforeValue" style="width: 60px">
                    <j-select-option value="add">+</j-select-option>
                    <j-select-option value="minus">-</j-select-option>
                </j-select>
            </template>
            <template #addonAfter>
                <j-select v-model:value="addonAfterValue" style="width: 60px">
                    <j-select-option value="USD">$</j-select-option>
                    <j-select-option value="EUR">€</j-select-option>
                    <j-select-option value="GBP">£</j-select-option>
                    <j-select-option value="CNY">¥</j-select-option>
                </j-select>
            </template>
        </j-input-number>
        <j-input-number v-model:value="value3">
            <template #addonAfter><SettingOutlined /></template>
        </j-input-number>
        <j-input-number v-model:value="value4">
            <template #addonAfter>
                <j-cascader placeholder="cascader" style="width: 150px" />
            </template>
        </j-input-number>
    </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: { SettingOutlined },
    setup() {
        return {
            value1: ref(100),
            value2: ref(100),
            value3: ref(100),
            value4: ref(100),
            addonBeforeValue: ref('add'),
            addonAfterValue: ref('USD'),
        };
    },
});
</script>
