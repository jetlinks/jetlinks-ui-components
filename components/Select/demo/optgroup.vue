<docs>
---
order: 7
title: 分组
---
  
  ## zh-CN
  
  用 `OptGroup` 或 `options.options` 进行选项分组。
  
  ## en-US
  
  Using `OptGroup` or `options.options` to group the options.
  
  </docs>

<template>
    <j-select v-model:value="value" @change="handleChange">
        <j-select-opt-group>
            <template #label>
                <span>
                    <j-aIcon type="UserOutlined" />
                    Manager
                </span>
            </template>
            <j-select-option value="jack">Jack</j-select-option>
            <j-select-option value="lucy">Lucy</j-select-option>
        </j-select-opt-group>
        <j-select-opt-group label="Engineer">
            <j-select-option value="Yiminghe">yiminghe</j-select-option>
            <j-select-option value="Yiminghe1">yiminghe1</j-select-option>
        </j-select-opt-group>
    </j-select>
    <j-select
        v-model:value="value"
        :options="options"
        @change="handleChange"
    ></j-select>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';

const value = ref('jack');
const handleChange = (val: string) => {
    console.log(`selected ${val}`);
};

const options = ref<SelectProps['options']>([
    {
        label: 'Manager',
        options: [
            {
                value: 'jack',
                label: 'Jack',
            },
            {
                value: 'lucy',
                label: 'Lucy',
            },
        ],
    },
    {
        label: 'Engineer',
        options: [
            {
                value: 'yiminghe',
                label: 'Yiminghe',
            },
        ],
    },
]);
</script>
