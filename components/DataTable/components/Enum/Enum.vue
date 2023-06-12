<template>
    <j-form-item label="枚举项" required>
        <j-radio-group v-model:value="type" button-style="solid">
            <j-space>
              <j-radio-button value="1">仅单选</j-radio-button>
              <j-radio-button value="2">支持多选</j-radio-button>
            </j-space>
        </j-radio-group>
        <Table :source="source" />
    </j-form-item>
</template>

<script setup lang="ts" name="Enum">
import { ref } from 'vue'
import Table from './Table.vue';

const props = defineProps({
    source: {
        type: Array,
        default: () => [],
    },
});

const type = ref('1')

</script>

<style scoped></style>
