<template>
    <j-form-item label="枚举项" require>
        <j-radio-group button-style="solid">
            <a-radio-button value="1">仅单选</a-radio-button>
            <a-radio-button value="2">支持多选</a-radio-button>
        </j-radio-group>
        <Table :source="source" />
    </j-form-item>
</template>

<script setup lang="ts" name="Enum">
import Table from './Table.vue';

const props = defineProps({
    source: {
        type: Array,
        default: () => [],
    },
});
</script>

<style scoped></style>
