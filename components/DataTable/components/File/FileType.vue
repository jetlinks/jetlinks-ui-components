<template>
    <FormItem
        label="文件类型"
        required
        :name="name"
        :rules="[{ required: true, message: '请选择文件类型' }]"
    >
        <CheckButton
            v-model:value="myValue"
            :options="[
                { label: 'URL', value: 'url' },
                { label: 'Base64', value: 'base64' },
                { label: 'binary', value: 'binary' },
            ]"
            @change="change"
        />
    </FormItem>
</template>

<script setup>
import { FormItem, CheckButton } from '../../../components';
import { ref, watch } from 'vue';

const props = defineProps({
    name: {
        type: [String, Array],
        default: 'type',
    },
    value: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:value']);

const myValue = ref(props.value);

const change = () => {
    emit('update:value', myValue.value);
};

watch(
    props.value,
    () => {
        myValue.value = props.value;
    },
    { immediate: true },
);
</script>

<style scoped></style>
