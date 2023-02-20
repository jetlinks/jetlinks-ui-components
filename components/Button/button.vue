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
