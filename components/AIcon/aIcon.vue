<template>
    <j-aIcon class="icon" :type="props.type" :scriptUrl="props.scriptUrl" />
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

<style scoped lang="less">
.icon {
    font-size: 16px;
}
</style>
