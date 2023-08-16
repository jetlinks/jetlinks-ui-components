<template>
    <PopconfirmModal
        destroy-on-close
        :body-style="{ paddingTop: '4px', width: width }"
        :placement="placement"
        :get-popup-container="(node) => fullRef || document.body"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <EnumItem
                    ref="tableRef"
                    v-model:value="formData.elements"
                    v-model:type="formData.type"
                    :multiple="multiple"
                />
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { inject, reactive, ref, watch } from 'vue';
import { Form, PopconfirmModal } from '../../../components';
import EnumItem from './EnumItem.vue';
import Icon from '../Icon.vue';
import { cloneDeep } from 'lodash-es';
import { FULL_CODE } from '../../index';

const props = defineProps({
    value: {
        type: Object,
        default: () => ({}),
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    placement: {
        type: String,
        default: 'top',
    },
    width: {
        type: String,
        default: '480px',
    },
});

const emit = defineEmits(['update:value', 'cancel', 'confirm']);

const fullRef = inject(FULL_CODE);
const formRef = ref();
const tableRef = ref();
const formData = reactive({
    type: props.value?.type || false,
    elements: cloneDeep(props.value?.elements) || [],
});

const formItemContext = Form.useInjectFormItemContext();

const source = ref([]);

const cancel = () => {
    tableRef.value?.cancel();
    formRef.value?.resetFields();
    formData.type = props.value?.type;
    formData.elements = cloneDeep(props.value?.elements) || [];
    emit('cancel');
};

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const tableData = await tableRef.value.getData();
            if (tableData) {
                formRef.value
                    .validate()
                    .then(() => {
                        resolve(true);
                        const value: any = {
                            elements: tableData,
                        };

                        if (props.multiple) {
                            value.type = formData.type;
                        }
                        console.log('confirm', value);
                        emit('update:value', value);
                        emit('confirm', value);
                        formItemContext.onFieldChange();
                    })
                    .catch(() => reject(false));
            }
        } catch (e) {
            console.log(e);
            reject(false);
        }
    });
};

watch(
    () => JSON.stringify(props.value),
    () => {
        formData.type = props.value?.type;
        formData.elements = cloneDeep(props.value?.elements) || [];
    },
    { immediate: true },
);
</script>

<style scoped></style>
