<template>
    <j-popover
        trigger="click"
        :visible="myVisible"
        :overlay-class-name="`${modalWarpName} modal-${modalDataId}`"
        :placement="placement || 'top'"
        :get-popup-container="getPopupContainer"
        :data-id="modalDataId"
        @visibleChange="() => {}"
    >
        <template #title>
            <slot name="title" />
        </template>
        <template #content>
            <div
                v-if="destroy"
                class="popconfirm-modal-body"
                :style="bodyStyle"
            >
                <slot name="content" v-bind="{ parentMask: modalDataId }" />
            </div>
            <slot name="footer">
                <div class="popconfirm-modal-footer">
                    <Button
                        v-if="showCancel"
                        size="small"
                        @click.stop="cancel"
                        >{{ cancelText }}</Button
                    >
                    <Button
                        v-if="showOk"
                        size="small"
                        type="primary"
                        :loading="loading"
                        @click.stop="confirm"
                        >{{ okText }}
                    </Button>
                </div>
            </slot>
        </template>
        <span @click="() => visibleChange(true)">
            <slot />
        </span>
    </j-popover>
</template>

<script setup lang="ts" name="JPopconfirmModal">
import { popoverProps } from 'ant-design-vue/lib/popover';
import { ref, computed, useSlots, inject, provide } from 'vue';
import type { CSSProperties, PropType } from 'vue';
import { Button, Popover as JPopover } from '../components';
import { isPromise, randomString } from '../util/comm';
import { createMaskNode, hideMask } from './util';
type Emit = {
    (e: 'update:visible', data: Boolean): void;
    (e: 'visibleChange', data: Boolean): void;
    (e: 'confirm'): void;
    (e: 'cancel'): void;
};

const props = defineProps({
    ...popoverProps(),
    bodyStyle: {
        type: [String, Object] as PropType<CSSProperties>,
        default: undefined,
    },
    cancelText: {
        type: String,
        default: '取消',
    },
    okText: {
        type: String,
        default: '确认',
    },
    showCancel: {
        type: Boolean,
        default: true,
    },
    showOk: {
        type: Boolean,
        default: true,
    },
    visible: {
        type: Boolean,
        default: undefined,
    },
    confirmLoading: {
        type: Boolean,
        default: false,
    },
    destroyOnClose: {
        type: Boolean,
        default: false,
    },
    onConfirm: Function as PropType<(e: MouseEvent) => void | Promise<any>>,
});

const emit = defineEmits<Emit>();

const myVisible = ref(false);
const loading = ref(false);

const modalWarpName = 'popconfirm-modal-warp';
const modalDataId = ref(randomString(12));

const parentMask = inject<string>('parent-mask');

provide('parent-mask', modalDataId.value);

const destroy = computed(() => {
    if (props.destroyOnClose !== false) {
        return myVisible.value;
    }

    return true;
});

const visibleChange = (e: boolean) => {
    myVisible.value = e;
    if (e) {
        setTimeout(() => {
            createMaskNode(modalDataId.value);
        }, 10);
    } else {
        hideMask(modalDataId.value, parentMask);
    }
    emit('update:visible', e);
    emit('visibleChange', e);
};

const cancel = () => {
    visibleChange(false);
    loading.value = false;
    emit('cancel');
};

const confirm = async (e) => {
    loading.value = true;
    const fn = props.onConfirm?.(e);
    if (isPromise(fn)) {
        (fn as Promise<any>)
            .then(() => {
                visibleChange(false);
            })
            .finally(() => {
                console.log('finally');
                loading.value = false;
            })
            .catch(() => {
                console.log('catch');
                loading.value = false;
            });
    } else {
        loading.value = false;
        visibleChange(false);
    }
};
</script>

<style scoped></style>
