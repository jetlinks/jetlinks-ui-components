<template>
    <j-form-item label="单位" name="unit">
        <UnitSelect :options="options" />
    </j-form-item>
</template>

<script setup lang="ts" >
import UnitSelect, { UnitProps } from '../UnitSelect';
import { FormItem as JFormItem  } from '../../../components'

const props = defineProps({
    ...UnitProps,
});
</script>
