<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 260px;"
        :placement="placement"
        @confirm="confirm"
    >
        <template #content>
            <Form :model="form" layout="vertical">
                <FormItem label="单位" name="unit">
                    <UnitSelect
                        v-model:value="formData.unit"
                        :options="options"
                    />
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import UnitSelect, { UnitProps } from '../UnitSelect';
import { reactive, ref } from 'vue';
import { Form, FormItem, PopconfirmModal } from '../../../components';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value', 'confirm']);

const props = defineProps({
    ...UnitProps,
    value: {
        type: String,
        default: undefined,
    },
  placement: {
    type: String,
    default: 'top'
  }
});

const formData = reactive({
    unit: props.value,
});

const confirm = () => {
    emit('update:value', formData.unit);
    emit('confirm', formData.unit);
};
</script>
