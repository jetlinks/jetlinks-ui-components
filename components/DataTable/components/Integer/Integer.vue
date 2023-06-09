<template>
    <j-form-item label="单位" name="unit">
        <UnitSelect :options="options" />
    </j-form-item>
</template>

<script setup lang="ts" name="Integer">
import UnitSelect, { UnitProps } from '../UnitSelect';

const props = defineProps({
    ...UnitProps,
});
</script>
