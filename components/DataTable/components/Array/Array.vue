<template>
    <PopconfirmModal
        body-style="padding-top:4px;width:400px;"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <FormItem label="元素类型" required name="type" :rules="rules">
                    <TypeSelect v-model:value="formData.type" />
                </FormItem>
                <FormItem
                    v-if="['float', 'double'].includes(formData.type)"
                    label="精度"
                    name="scale"
                >
                    <InputNumber
                        v-model:value="formData.scale"
                        :precision="0"
                        min="0"
                        :max="9999"
                    />
                </FormItem>
                <FormItem
                    v-else-if="['text', 'string'].includes(formData.type)"
                    label="最大长度"
                    name="scale"
                >
                    <InputNumber
                        v-model:value="formData.maxLength"
                        :precision="0"
                        min="0"
                        :max="9999"
                    />
                </FormItem>
                <FormItem
                    v-else-if="formData.type === 'boolean'"
                    label="布尔值"
                    required
                    name="value"
                    :rules="rules"
                >
                    <div
                        class="data-table-boolean-item"
                        style="margin-bottom: 12px"
                    >
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="trueText">
                                <Input v-model:value="formData.trueText" />
                            </FormItem>
                        </div>
                        <div>-</div>
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="trueValue">
                                <Input v-model:value="formData.trueValue" />
                            </FormItem>
                        </div>
                    </div>
                    <div class="data-table-boolean-item">
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="falseText">
                                <Input v-model:value="formData.falseText" />
                            </FormItem>
                        </div>
                        <div>-</div>
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="falseValue">
                                <Input v-model:value="formData.falseValue" />
                            </FormItem>
                        </div>
                    </div>
                </FormItem>
                <FormItem
                    v-else-if="formData.type === 'date'"
                    label="格式"
                    required
                >
                    <Select
                        v-model:value="formData.date"
                        :options="options"
                        mode="tags"
                        placeholder="请选择时间格式"
                    />
                </FormItem>
                <template v-else-if="formData.type === 'enum'">
                    <FormItem
                        label="枚举项"
                        name="elements"
                        required
                        :rules="rules"
                        :validate-first="true"
                    >
                        <FormItemRest v-if="enumMultiple">
                            <RadioGroup
                                v-model:value="formData.enumMultiple"
                                button-style="solid"
                            >
                                <RadioButton value="1">仅单选</RadioButton>
                                <RadioButton value="2">支持多选</RadioButton>
                            </RadioGroup>
                        </FormItemRest>
                        <Table
                            ref="tableRef"
                            v-model:value="formData.elements"
                            @add="addItem"
                        />
                    </FormItem>
                </template>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import TypeSelect from '../Type';
import { reactive, ref } from 'vue';
import {
    Form,
    FormItem,
    FormItemRest,
    RadioGroup,
    RadioButton,
    PopconfirmModal,
    InputNumber,
    Input,
    Select,
} from '../../../components';
import Icon from '../Icon.vue';
import { pick } from 'lodash-es';

const emit = defineEmits(['update:value', 'cancel']);

const props = defineProps({
    value: {
        type: Object,
        default: undefined,
    },
    enumMultiple: {
        type: Boolean,
        default: false,
    },
});

const formRef = ref();
const tableRef = ref();

const formData = reactive({
    type: props.value?.type,
    scale: props.value?.scale,
    maxLength: props.value?.maxLength,
    trueText: props.value?.trueText,
    trueValue: props.value?.trueValue,
    falseText: props.value?.falseText,
    falseValue: props.value?.falseValue,
    date: props.value?.date,
    enumMultiple: props.value?.multiple,
    elements: props.value?.elements,
    fileType: props.value?.fileType,
});

const options = [
    { label: 'yy-mm-dd hh:mm:ss', value: 'yy-mm-dd hh:mm:ss' },
    { label: 'yy-mm-dd', value: 'yy-mm-dd' },
    { label: 'hh:mm:ss', value: 'hh:mm:ss' },
];

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
            keys = [
                ...keys,
                'trueText',
                'trueValue',
                'falseText',
                'falseValue',
            ];
            break;
        case 'enum':
            break;
        case 'file':
            keys.push('fileType');
            break;
        case 'enum':
            break;
    }
    return pick(formData, keys);
};

const addItem = async () => {
    await tableRef.value.getData();
};

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        try {
            if (formData.type === 'enum') {
                const tableData = await tableRef.value.getData();
                if (tableData) {
                    formRef.value
                        .validate()
                        .then(() => {
                            resolve(true);
                            const value: any = {
                                elements: formData.elements,
                            };

                            if (props.enumMultiple) {
                                value.type = formData.enumMultiple;
                            }
                            console.log(
                                'formRef.value',
                                handleValue(formData.type),
                            );
                            emit('update:value', handleValue(formData.type));
                        })
                        .catch(() => reject(false));
                }
            } else {
                emit('update:value', handleValue(formData.type));
            }
        } catch (e) {
            reject(false);
        }
    });
};
</script>

<style scoped></style>
