<template>
    <div class="custom-button">
        <Button v-bind="props" :class="className">
            <j-aIcon v-if="props.myIcon" :type="props.myIcon" />
            <slot name="icon"></slot>
            <slot name="default"></slot>
        </Button>
    </div>
</template>

<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import { buttonProps } from 'ant-design-vue/lib/button/buttonTypes';
import { computed, defineProps } from 'vue';

const props = defineProps({
    ...buttonProps(),
    iconDanger: {
        type: Boolean,
        default: false,
    },
    myIcon: {
        type: String,
        default: '',
    },
});

const className = computed(() => {
    return {
        'stroke-btn': String(props.type) === 'stroke',
        'icon-danger': String(props.type) === 'icon-danger',
    };
});
</script>

<style lang="less" scoped>
@import 'ant-design-vue/es/style/themes/default.less';
@btn-denger: #e50012;
.custom-button {
    .stroke-btn {
        color: @primary-color;
        background-color: #f6f6f6;

        &:hover {
            color: #ffffff;
            background-color: @primary-color;
        }
        &:disabled {
            color: @btn-disable-color;
            background-color: @btn-disable-bg;
        }
    }

    .icon-danger {
        color: @btn-denger;
        border: none;
        background-color: #f1f1f1;

        &:hover {
            color: #ffffff;
            background-color: @btn-denger;
        }

        &:disabled {
            color: @btn-disable-color;
            background-color: @btn-disable-bg;
        }
    }

    :deep(.ant-btn-text) {
        &:hover {
            color: @primary-color !important;
            background-color: transparent;
        }
    }
}
</style>
