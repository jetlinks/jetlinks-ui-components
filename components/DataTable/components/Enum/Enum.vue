<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 450px;"
        @confirm="confirm"
    >
        <template #content>
            <Form :model="formData" layout="vertical">
                <FormItem label="枚举项" required>
                    <FormItem
                        v-if="multiple"
                        v-model:value="formData.type"
                        button-style="solid"
                    >
                        <RadioGroup>
                            <RadioButton value="1">仅单选</RadioButton>
                            <RadioButton value="2">支持多选</RadioButton>
                        </RadioGroup>
                    </FormItem>
                    <Table
                        ref="list"
                        :source="formData.elements"
                        @change="valueChange"
                    />
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import Table from './Table.vue';
import {
    Form,
    FormItem,
    PopconfirmModal,
    RadioButton,
    RadioGroup,
} from '../../../components';
import Icon from '../Icon.vue';

const props = defineProps({
    value: {
        type: Object,
        default: () => ({}),
    },
    multiple: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:value']);

const formData = reactive({
    type: props.value?.type || '1',
    elements: props.value?.elements || [],
});

const source = ref([]);

const valueChange = (data: any[]) => {
    formData.elements = data;
};

const confirm = () => {
    const value: any = {
        elements: formData.elements,
    };

    if (props.multiple) {
        value.type = formData.type;
    }
    emit('update:value', value);
};

watch(
    () => props.value,
    () => {
        formData.type = props.value?.type;
        formData.elements = props.value?.elements || [];
    },
    { deep: true },
);
</script>

<style scoped></style>
