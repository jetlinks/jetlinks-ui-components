<template>
    <Popconfirm
        v-bind="props"
        :visible="visible"
        @visibleChange="visibleChange"
    >
        <template #title>
            <div class="popconfirm-title">
                {{ props.title || '是否确定删除？' }}
            </div>
        </template>
        <template #cancelButton>
            <Button size="small" class="popconfirm-button" @click="cancel"
                ><AIcon type="RightOutlined" /> {{ props.cancelText || '取消' }}
            </Button>
        </template>
        <template #okButton>
            <Button
                :loading="loading"
                type="primary"
                size="small"
                class="popconfirm-button"
                @click="ok"
            >
                <AIcon v-if="!loading" type="RightOutlined" />
                {{ props.okText || '确定' }}
            </Button>
        </template>
        <slot></slot>
    </Popconfirm>
</template>

<script lang="ts" setup>
import AIcon from '../AIcon/aIcon.vue';
import { Popconfirm, Button } from 'ant-design-vue';
import { popconfirmProps } from 'ant-design-vue/es/popconfirm';
import { ref } from 'vue';

const props = defineProps({
    ...popconfirmProps(),
    loading: {
        type: Boolean,
        default: false,
    },
    onConfirm: {
        type: Function,
        default: () => {
            console.log('ok');
        },
    },
});

const visible = ref<boolean>(false);
const loading = ref<boolean>(false);
const cancelStatus = ref<boolean>(false);

const cancel = () => {
    cancelStatus.value = true;
    visible.value = false;
};

const ok = async () => {
    if (props.loading) {
        loading.value = true;
        const isdone: void = await props?.onConfirm();
        if (!!isdone || cancelStatus.value) visible.value = false;
    } else {
        props?.onConfirm();
        visible.value = false;
    }
};
const visibleChange = (value: boolean) => {
    visible.value = value;
    value ? (loading.value = false) : (cancelStatus.value = true);
};
</script>

<style scoped lang="less">
.popconfirm-title {
    min-width: 120px;
    max-width: 200px;
    width: 150px;
    word-break: break-all;
    word-wrap: break-word;
}
.popconfirm-button {
    border-radius: 6px;
}
</style>
