<template>
    <div
        :class="{
            'j-card-item': true,
            active: active,
            disabled: disabled,
            horizontal: type === 'horizontal',
            vertical: type !== 'horizontal',
            right: float === 'right',
            left: float === 'left',
        }"
        @click="click"
    >
        <div class="j-card-title-warp">
            <slot name="title" :title="item.title">
                <div class="title">{{ item.label }}</div>
            </slot>
            <template v-if="item.subLabel && showImage">
                <slot name="subLabel" :sub-label="item.subLabel">
                    <div class="sub-title">{{ item.subLabel }}</div>
                </slot>
            </template>
        </div>
        <div v-if="showImage" class="j-card-image">
            <slot name="image" :image="item.iconUrl">
                <Avatar class="icon box-shadow" :src="item.iconUrl" />
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { inject, PropType, ref, toRefs, watchEffect, useSlots } from 'vue';
import { Avatar } from '../components';

interface CardOption {
    value: string | number;
    label: string;
    subLabel?: string;
    iconUrl: string;
    disabled?: boolean;
}

const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    item: {
        type: Object as PropType<CardOption>,
        default: () => ({}),
    },
});

const emit = defineEmits(['click']);

const click = () => {
    emit('click', props.item.value, props.item);
};
</script>
