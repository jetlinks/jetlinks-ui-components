<template>
    <j-form-item name="unit" label="单位">
        <UnitSelect :options="options" />
    </j-form-item>
    <j-form-item name="" label="精度">
        <j-input-number :precision="0" :max="4" />
    </j-form-item>
</template>

<script setup lang="ts" name="Double">
import UnitSelect, { UnitProps } from '../UnitSelect';

const props = defineProps({
    ...UnitProps,
});
</script>

<style scoped></style>
