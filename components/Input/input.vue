<template>
    <Input v-bind="props" />
</template>

<script lang="ts" setup name="JInput">
import { Input } from 'ant-design-vue';
import inputProps from 'ant-design-vue/lib/input/inputProps';

const props = defineProps({
    ...inputProps(),
});
</script>
