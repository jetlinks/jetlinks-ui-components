<template>
    <form-item label="枚举项" required>
        <radio-group v-model:value="type" button-style="solid">
            <space>
              <radio-button value="1">仅单选</radio-button>
              <radio-button value="2">支持多选</radio-button>
            </space>
        </radio-group>
        <Table :source="source" />
    </form-item>
</template>

<script setup lang="ts">
import { FormItem, RadioGroup, Space, RadioButton } from '../../../components'
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
