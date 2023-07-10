<template>
    <PopconfirmModal
        body-style="padding-top:4px;width:600px;"
        :placement="placement"
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
                    <TypeSelect
                        v-model:value="formData.type"
                        @change="typeChange"
                    />
                </FormItem>
                <ScaleItem
                    v-if="['float', 'double'].includes(formData.type)"
                    v-model:value="formData.scale"
                />
                <StringItem
                    v-else-if="['string', 'password'].includes(formData.type)"
                    v-model:value="formData.maxLength"
                />
                <BooleanItem
                    v-else-if="formData.type === 'boolean'"
                    v-model:value="formData.boolean"
                    name="boolean"
                />
                <DateItem
                    v-else-if="formData.type === 'date'"
                    v-model:value="formData.format"
                />
                <EnumItem
                    v-else-if="formData.type === 'enum'"
                    ref="enumRef"
                    v-model:value="formData.enum.elements"
                    :name="['enum', 'elements']"
                    :multiple="enumMultiple"
                />
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup lang="ts">
import TypeSelect from '../Type';
import { reactive, ref, watch } from 'vue';
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
    placement: {
        type: String,
        default: 'top',
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
    format: props.value?.format,
    enum: {
        multiple: props.value?.multiple,
        elements: props.value?.elements || [],
    },
});

const typeChange = (e) => {
    if (['float', 'double'].includes(e)) {
        formData.scale = 2;
    }
};

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

const handleValue = (type, data: any) => {
    let newObject: any = {};
    switch (type) {
        case 'float':
        case 'double':
            newObject = pick(formData, 'scale');
            break;
        case 'boolean':
            newObject = { ...formData.boolean };
            break;
        case 'enum':
            newObject.elements = data;
            if (props.enumMultiple) {
                newObject.multiple = data;
            }
            break;
        case 'string':
        case 'password':
            newObject = pick(formData, 'maxLength');
            break;
        case 'date':
            newObject = pick(formData, 'format');
            break;
    }

    return {
        type: type,
        ...newObject,
    };
};

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let enumResult = true;
            console.log('校验1', formData.type);
            if (formData.type === 'enum') {
                enumResult = await enumRef.value.getData();
            }

            if (enumResult) {
                formRef.value
                    .validate()
                    .then(() => {
                        resolve(true);
                        emit(
                            'update:value',
                            handleValue(formData.type, enumResult),
                        );
                        emit('confirm', handleValue(formData.type, enumResult));
                    })
                    .catch((e) => {
                        console.log(e);
                        reject(false);
                    });
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
        formData.scale = props.value?.scale;
        formData.maxLength = props.value?.maxLength;
        formData.boolean = {
            trueText: props.value?.trueText || '是',
            trueValue: props.value?.trueValue || 'true',
            falseText: props.value?.falseText || '否',
            falseValue: props.value?.falseValue || 'false',
        };
        formData.format = props.value?.format;
        formData.enum = {
            multiple: props.value?.multiple,
            elements: props.value?.elements,
        };
    },
);
</script>

<style scoped></style>
