<template>
    <Button v-bind="props" :class="[className]">
        <AIcon v-if="props.myIcon" :type="props.myIcon" />
        <slot name="icon"></slot>
        <slot name="default"></slot>
    </Button>
</template>

<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import { AIcon } from '../components';
import { buttonProps } from 'ant-design-vue/lib/button/buttonTypes';
import { computed } from 'vue';

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
        'custom-button': true,
        'stroke-btn': String(props.type) === 'stroke',
        'icon-danger': String(props.type) === 'icon-danger',
    };
});
</script>

<script lang="ts">
export default {
    __ANT_BUTTON: true,
};
</script>
