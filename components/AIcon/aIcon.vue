<template>
    <j-aIcon class="icon" :type="props.type" :script-url="props.scriptUrl" />
</template>

<script lang="ts" setup>
import JAIcon from './icon';

const props = defineProps({
    type: {
        type: String,
        default: 'ZoomOutOutlined',
    },
    scriptUrl: {
        type: String,
        default: '',
    },
});
</script>
