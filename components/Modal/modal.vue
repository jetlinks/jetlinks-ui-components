<template>
    <Modal
        v-bind="props"
        :ok-text="props.okText || '确定'"
        :cancel-text="props.cancelText || '取消'"
        :wrap-class-name="
            props.modalType === 'message' ? 'modalRef-message' : 'modalRef'
        "
    >
        <template v-for="slot in Object.keys(slots)" #[slot]>
            <slot :name="slot"></slot>
        </template>
        <template v-if="props.modalType === 'draggable'" #title>
            <div ref="modalTitleRef" style="width: 100%; cursor: move">
                <slot
                    v-if="Object.keys(slots).includes('draggableTitle')"
                    name="draggableTitle"
                ></slot>
                <span v-else>{{ props.draggableTitle }} </span>
            </div>
        </template>
        <template
            v-if="props.modalType === 'draggable'"
            #modalRender="{ originVNode }"
        >
            <div :style="transformStyle">
                <component :is="originVNode" />
            </div>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { Modal } from 'ant-design-vue';
import {
    ref,
    useSlots,
    watch,
    watchEffect,
    computed,
    CSSProperties,
} from 'vue';
import ModalProps from 'ant-design-vue/lib/modal/Modal';
import { useDraggable } from '@vueuse/core';

const slots = useSlots();

const props = defineProps({
    ...ModalProps.props,
    draggableTitle: {
        type: String,
        default: '',
    },
    modalType: {
        type: String,
        default: 'modal', // ['modal', 'draggable', 'message'] //普通对话框、拖拽、提示框
    },
});

const modalTitleRef = ref<HTMLElement>(null);
const { x, y, isDragging } = useDraggable(modalTitleRef);
const startX = ref<number>(0);
const startY = ref<number>(0);
const startedDrag = ref(false);
const transformX = ref(0);
const transformY = ref(0);
const preTransformX = ref(0);
const preTransformY = ref(0);
const dragRect = ref({ left: 0, right: 0, top: 0, bottom: 0 });
watch([x, y], () => {
    if (!startedDrag.value) {
        startX.value = x.value;
        startY.value = y.value;
        const bodyRect = document.body.getBoundingClientRect();
        const titleRect = modalTitleRef.value.getBoundingClientRect();
        dragRect.value.right = bodyRect.width - titleRect.width;
        dragRect.value.bottom = bodyRect.height - titleRect.height;
        preTransformX.value = transformX.value;
        preTransformY.value = transformY.value;
    }
    startedDrag.value = true;
});
watch(isDragging, () => {
    if (!isDragging) {
        startedDrag.value = false;
    }
});
watchEffect(() => {
    if (startedDrag.value) {
        transformX.value =
            preTransformX.value +
            Math.min(
                Math.max(dragRect.value.left, x.value),
                dragRect.value.right,
            ) -
            startX.value;
        transformY.value =
            preTransformY.value +
            Math.min(
                Math.max(dragRect.value.top, y.value),
                dragRect.value.bottom,
            ) -
            startY.value;
    }
});
const transformStyle = computed<CSSProperties>(() => {
    return {
        transform: `translate(${transformX.value}px, ${transformY.value}px)`,
    };
});
</script>
