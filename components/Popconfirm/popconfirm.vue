<template>
    <Popconfirm
        v-bind="props"
        :visible="visible"
        @visibleChange="visibleChange"
    >
        <template #title>
            <slot name="title">
                <div class="popconfirm-title">
                    {{ props.title || '是否确定删除？' }}
                </div>
            </slot>
        </template>
        <template #cancelButton>
            <slot name="cancelButton">
                <Button size="small" class="popconfirm-button" @click="cancel">
                    {{ props.cancelText || '取消' }}
                </Button>
            </slot>
        </template>
        <template #okButton>
            <slot name="okButton">
                <Button
                :loading="loading"
                type="primary"
                size="small"
                class="popconfirm-button"
                @click="ok"
            >
                    {{ props.okText || '确定' }}
                </Button>
            </slot>
        </template>
        <slot></slot>
    </Popconfirm>
</template>

<script lang="ts" setup>
import { Popconfirm, Button } from 'ant-design-vue';
import { popconfirmProps } from 'ant-design-vue/lib/popconfirm';
import { ref } from 'vue';
import { AIcon as JAIcon } from '../components';

const props = defineProps({
    ...popconfirmProps(),
    loading: {
        type: Boolean,
        default: false,
    },
});

const visible = ref<boolean>(false);

const cancel = async (e: MouseEvent) => {
    await props.onCancel?.(e);
    visible.value = false;
};

const ok = async (e: MouseEvent) => {
    await props.onConfirm?.(e);
    visible.value = false;
};

const visibleChange = (value: boolean) => {
    visible.value = value;
};
</script>
