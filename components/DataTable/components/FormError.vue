<template>
    <template v-if="isEdit">
        <Popover
            :visible="visible"
            :placement="placement"
            :content="content"
            :get-popup-container="getPopupContainer"
            :auto-adjust-overflow="false"
        >
            <div :class="className" :data-index="index" :data-name="name"></div>
        </Popover>
    </template>
    <div v-else :class="className" :data-index="index" :data-name="name"></div>
</template>

<script setup>
import { Popover } from '../../components';

import { computed } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    isEdit: {
        type: Boolean,
        default: false,
    },
    content: {
        type: String,
        default: '',
    },
    selected: {
        type: Boolean,
        default: false,
    },
    index: {
        type: Number,
        default: undefined,
    },
    name: {
        type: String,
        default: '',
    },
    getPopupContainer: {
        type: Function,
        default: undefined,
    },
    placement: {
        type: String,
        default: 'top',
    },
    id: {
        type: String,
        default: 'top',
    },
});

const className = computed(() => {
    return {
        [props.id]: true,
        'j-row-selected': true,
        'j-row-click': true,
        'j-row-selected-active': props.selected,
    };
});
</script>

<style scoped></style>
