<template>
    <div class="j-card-panel">
        <div
            class="j-card-item vertical"
            :class="{
                active: isActive,
                disabled: disabled || parent.props.disabled,
                // horizontal: type === 'horizontal',
            }"
            @click="handleSelect"
        >
            <div
                class="j-card-content grid-item"
                :class="{ 'flex-item': type === 'horizontal' }"
            >
                <slot></slot>
            </div>
            <div
                v-if="!slots.includes('default')"
                class="j-card-content grid-item"
                :class="{ 'flex-item': type === 'horizontal' }"
            >
                <!-- <template v-if="type === 'horizontal' && float === 'right'">
                    <div class="desc" :style="{ paddingRight: '10px' }">
                        <span class="title">{{ item.label }}</span>
                        <span class="sub-title">{{ item.subLabel }}</span>
                    </div>
                    <Avatar
                        class="icon box-shadow"
                        :src="image"
                    />
                </template> -->
                <Avatar
                    v-if="image.length && !slots.includes('image')"
                    class="icon"
                    :class="{ 'box-shadow': type === 'horizontal' }"
                    :src="image"
                />
                <slot name="image"></slot>
                <div
                    class="desc"
                    :style="[
                        type === 'vertical'
                            ? { paddingTop: '10px' }
                            : { paddingLeft: '10px' },
                    ]"
                >
                    <slot name="label"></slot>
                    <span v-if="!slots.includes('label')" class="title">{{
                        label
                    }}</span>
                    <slot name="subLabel"></slot>
                    <span
                        v-if="!slots.includes('subLable')"
                        class="sub-title"
                        >{{ subLabel }}</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { inject, PropType, ref, toRefs, watchEffect, useSlots } from 'vue';
import { Avatar } from '../components';

const slots = Object.keys(useSlots());
const isActive = ref(false);
const props = defineProps({
    type: {
        type: String as PropType<'vertical' | 'horizontal'>,
        default: 'vertical',
    },
    image: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    value: {
        type: String,
        default: '',
    },
    subLabel: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    colGap: {
        type: Number,
        default: 6,
    },
});
const { type, value, disabled, image, label, subLabel } = toRefs(props);

const parent = inject('CardSelect') as any;
const handleSelect = () => {
    if (props.disabled || parent.props.disabled) return;
    parent.setValue(value.value);
};

watchEffect(() => {
    if (parent.props && parent.props.value.includes(props.value)) {
        isActive.value = true;
    } else {
        isActive.value = false;
    }
});
// watch(() => parent.props.value, () => {
//     if(parent.props && parent.props.value.includes(props.value)) {
//         isActive.value = true
//     } else {
//         isActive.value = false
//     }
// }, {immediate: true, deep: true})
</script>
