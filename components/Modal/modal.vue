<template>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <JModal
        v-bind="props"
        v-model:visible="visible"
        title="Basic Modal"
        cancel-text="取消1"
        @ok="handleOk"
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </JModal>
</template>

<script lang="ts" setup>
import JModal from './JModal.vue';
import ModalProps from 'ant-design-vue/es/modal/Modal';
import { ref } from 'vue';
const props = defineProps({
    ...ModalProps.props,
    /**
     * 是否拖动(todo)
     */
    draggable: {
        type: Boolean,
        default: false,
    },
});

const visible = ref<boolean>(false);

const showModal = () => {
    visible.value = true;
};

const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
};
</script>

<style scoped lang="less"></style>
