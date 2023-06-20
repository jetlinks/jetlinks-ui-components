<template>
    <PopconfirmModal body-style="padding-top:4px;" @confirm="confirm">
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <FormItem label="布尔值" required name="value" :rules="rules">
                    <div
                        class="data-table-boolean-item"
                        style="margin-bottom: 12px"
                    >
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="trueText">
                                <Input
                                    v-model:value="formData.value.trueText"
                                />
                            </FormItem>
                        </div>
                        <div>-</div>
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="trueValue">
                                <Input
                                    v-model:value="formData.value.trueValue"
                                />
                            </FormItem>
                        </div>
                    </div>
                    <div class="data-table-boolean-item">
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="falseText">
                                <Input
                                    v-model:value="formData.value.falseText"
                                />
                            </FormItem>
                        </div>
                        <div>-</div>
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="falseValue">
                                <Input
                                    v-model:value="formData.value.falseValue"
                                />
                            </FormItem>
                        </div>
                    </div>
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { Form, FormItem, PopconfirmModal, Input } from '../../../components';
import Icon from '../Icon.vue';
import { reactive, ref } from 'vue';

const emit = defineEmits(['update:value']);

const props = defineProps({
    value: {
        type: Object,
        default: () => ({}),
    },
});

const formRef = ref();

const formData = reactive({
    value: {
        trueText: props.value?.trueText || '是',
        trueValue: props.value?.trueValue || 'true',
        falseText: props.value?.falseText || '否',
        falseValue: props.value?.falseValue || 'false',
    },
});

const rules = [
    {
        validator(_, value) {
            console.log(value);
            if (
                !value.trueText ||
                !value.trueValue ||
                !value.falseText ||
                !value.falseValue
            ) {
                return Promise.reject('请输入布尔值');
            }
            return Promise.resolve();
        },
        trigger: 'change',
    },
];

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        const data = await formRef.value!.validate().catch(() => {
            reject();
        });
        if (data) {
            emit('update:value', formData);
            resolve(true);
        }
    });
};
</script>
