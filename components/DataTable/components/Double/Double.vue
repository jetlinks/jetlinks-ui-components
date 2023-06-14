<template>
    <form-item name="unit" label="单位">
        <UnitSelect :options="options" />
    </form-item>
    <form-item name="" label="精度">
        <input-number :precision="0" :max="4" />
    </form-item>
</template>

<script setup lang="ts">
import UnitSelect, { UnitProps } from '../UnitSelect';
import { FormItem, InputNumber } from '../../../components'

const props = defineProps({
    ...UnitProps,
});
</script>

<style scoped></style>
