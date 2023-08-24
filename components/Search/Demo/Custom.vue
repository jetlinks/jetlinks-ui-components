<template>
    <div>
        <j-input v-model:value="myValue" @change="change" />
    </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
    name: 'Custom',
    props: {
        value: {
            type: String,
            default: undefined,
        },
    },
    emits: ['update:value', 'change'],
    setup: (props, { emit }) => {
        const myValue = ref(props.value);

        const change = (e) => {
            myValue.value = e.target.value;
            emit('update:value', myValue.value);
            emit('change');
        };

        watch(
            () => props.value,
            () => {
                myValue.value = props.value;
            },
            { immediate: true },
        );

        return {
            myValue,
            change,
        };
    },
};
</script>

<style scoped></style>
