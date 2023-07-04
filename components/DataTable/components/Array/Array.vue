<template>
    <PopconfirmModal
        body-style="padding-top:4px;width:600px;"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <FormItem
                    label="元素类型"
                    required
                    name="type"
                    :rules="rules"
                    :validate-first="true"
                >
                    <TypeSelect v-model:value="formData.type" />
                </FormItem>
                <ScaleItem
                    v-if="['float', 'double'].includes(formData.type)"
                    v-model:value="formData.scale"
                />
                <StringItem
                    v-else-if="['text', 'password'].includes(formData.type)"
                    v-model:value="formData.maxLength"
                />
                <BooleanItem
                    v-else-if="formData.type === 'boolean'"
                    v-model:value="formData.boolean"
                    name="boolean"
                />
                <DateItem
                    v-else-if="formData.type === 'date'"
                    v-model:value="formData.date"
                />
                <FileType
                    v-else-if="formData.type === 'file'"
                    v-model:value="formData.fileType"
                    name="fileType"
                />
                <EnumItem
                    v-else-if="formData.type === 'enum'"
                    ref="enumRef"
                    v-model:value="formData.enum"
                    :multiple="enumMultiple"
                />
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import TypeSelect from '../Type';
import { reactive, ref } from 'vue';
import { Form, FormItem, PopconfirmModal } from '../../../components';
import { FileType } from '../File';
import { BooleanItem } from '../Boolean';
import { DateItem } from '../Date';
import { ScaleItem } from '../Double';
import { StringItem } from '../String';
import { EnumItem } from '../Enum';
import Icon from '../Icon.vue';
import { pick } from 'lodash-es';

const emit = defineEmits(['update:value', 'cancel', 'confirm']);

const props = defineProps({
    value: {
        type: Object,
        default: undefined,
    },
    enumMultiple: {
        type: Boolean,
        default: false,
    },
    unitOptions: {
        type: [Array, Function],
        default: undefined,
    },
});

const formRef = ref();
const enumRef = ref();

const formData = reactive({
    type: props.value?.type,
    scale: props.value?.scale,
    maxLength: props.value?.maxLength,
    boolean: {
        trueText: props.value?.trueText || '是',
        trueValue: props.value?.trueValue || 'true',
        falseText: props.value?.falseText || '否',
        falseValue: props.value?.falseValue || 'false',
    },
    date: props.value?.date,
    enum: {
        multiple: props.value?.multiple,
        elements: props.value?.elements,
    },
    fileType: props.value?.fileType,
});

const rules = [
    {
        validator(_, value) {
            console.log(value);
            if (!value) {
                return Promise.reject('请选择元素类型');
            }
            return Promise.resolve();
        },
        trigger: 'change',
    },
];

const cancel = () => {
    formRef.value?.resetFields();
    emit('cancel');
};

const handleValue = (type) => {
    let keys: string[] = ['type'];
    switch (type) {
        case 'float':
        case 'double':
            keys.push('scale');
            break;
        case 'boolean':
            keys.push('boolean');
            break;
        case 'enum':
            keys.push('enum');
            break;
        case 'file':
            keys.push('fileType');
            break;
        case 'string':
            keys.push('maxLength');
            break;
    }
    return pick(formData, keys);
};

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let enumResult = true;
            console.log('校验1', formData.type);
            if (formData.type === 'enum') {
                await enumRef.value.getData();
            }

            if (enumResult) {
                formRef.value
                    .validate()
                    .then(() => {
                        resolve(true);
                        emit('update:value', handleValue(formData.type));
                        emit('confirm', handleValue(formData.type));
                    })
                    .catch(() => reject(false));
            }
        } catch (e) {
            reject(false);
        }
    });
};
</script>

<style scoped></style>
