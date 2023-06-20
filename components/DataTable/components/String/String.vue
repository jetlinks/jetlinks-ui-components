<template>
    <PopconfirmModal body-style="padding-top:4px;" @confirm="confirm">
        <template #content>
            <j-input-number v-model:value="string" :precision="0" :max="999" />
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts" name="String">
import { reactive, ref } from 'vue';
import {
    PopconfirmModal,
    InputNumber as JInputNumber,
} from '../../../components';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value']);

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
});

const string = ref(props.value);

const confirm = () => {
    emit('update:value', string);
};
</script>

<style scoped></style>
