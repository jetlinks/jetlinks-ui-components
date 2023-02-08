<template>
    <div ref="modalRef" class="modal">
        <Modal
            v-bind="props"
            :ok-text="props.okText || '确定'"
            :cancel-text="props.cancelText || '取消'"
            :get-container="() => $refs.modalRef"
        >
            <p v-if="!props.title" class="notitle"></p>

            <slot></slot>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import { Modal } from 'ant-design-vue';
import { ref } from 'vue';
import ModalProps from 'ant-design-vue/es/modal/Modal';

const props = defineProps({
    ...ModalProps.props,
    /**
     * 是否拖动
     */
    draggable: {
        type: Boolean,
        default: false,
    },
});

const modalRef = ref();

console.log(111, modalRef, props);
</script>

<style scoped lang="less">
.modal {
    .notitle {
        height: 10px;
    }

    :deep(.anticon) {
        line-height: 11px;
    }
    :deep(.ant-modal-content) {
        border-radius: 4px;
    }
    :deep(.ant-modal-header) {
        padding: 22px 20px;
    }
    :deep(.ant-modal-body) {
        padding: 16px 20px;
    }
    :deep(.ant-modal-footer) {
        padding: 16px 20px;
        button {
            border-radius: 6px;
        }
    }
}
</style>
