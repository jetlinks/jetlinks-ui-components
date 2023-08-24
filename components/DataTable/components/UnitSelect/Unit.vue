<template>
    <j-select
        v-model:value="value"
        mode="tags"
        :options="unitOptions"
        :size="size"
        placeholder="请选择单位"
        style="width: 100%"
        :get-popup-container="(node) => fullRef || document.body"
        @change="change"
    />
</template>

<script setup lang="ts" name="UnitSelect">
import { UnitProps } from './defaultSetting';
import type { PropType } from 'vue';
import { inject, ref, watch } from 'vue';
import { isArray, isFunction } from 'lodash-es';
import { Form, Select as JSelect } from '../../../components';
import { FULL_CODE } from '../../index';

type valueType = string | number;

type Emits = {
    (e: 'update:value', data: valueType | undefined): void;
    (e: 'change', data: valueType | undefined): void;
};

type SizeType = 'small' | 'middle' | 'large' | undefined;
const emit = defineEmits<Emits>();
const props = defineProps({
    ...UnitProps,
    value: {
        type: [String, Number],
        default: undefined,
    },
    size: {
        type: String as PropType<SizeType>,
        default: undefined,
    },
});

const fullRef = inject(FULL_CODE);

const value = ref<valueType[]>(props.value ? [props.value] : []);
const unitOptions = ref([]);

const formItemContext = Form.useInjectFormItemContext();

const change = (v: valueType[]) => {
    const newValue = v.length > 1 ? v.pop() : v?.[0];
    value.value = [newValue];
    emit('update:value', newValue);
    emit('change', newValue);
    formItemContext.onFieldChange();
};

const initOptions = async () => {
    if (isArray(props.options)) {
        unitOptions.value = props.options;
    } else if (isFunction(props.options)) {
        unitOptions.value = await props.options();
    }
};

initOptions();

watch(
    () => props.value,
    (newV) => {
        value.value = newV ? [newV] : undefined;
    },
    { immediate: true },
);
</script>

<style scoped></style>
