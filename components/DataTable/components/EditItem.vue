<template>
    <div class="j-row-config">
        <slot name="config" :row-data="{ rowData: rowData }"> </slot>
        <Integer v-if="['int', 'long'].includes(type)" v-model="value" />
        <Double
            v-else-if="['float', 'double'].includes(type)"
            v-model="value"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import {
    Integer,
    Double,
    String,
    Boolean,
    Enum,
    Array,
    File,
    Date,
    Object as ObjectText,
} from './index';

const props = defineProps({
    type: {
        type: String,
        default: undefined,
    },
    rowData: {
        type: Object,
        default: () => ({}),
    },
});

const value = ref(props.rowData);
</script>

<style scoped></style>
