<template>
    <AntdIcon class="icon" :type="props.type" />
</template>

<script lang="ts" setup>
import { AntdIcon } from './aIcon';
const props = defineProps({
    /**
     * 图标(大驼峰命名) https://www.antdv.com/components/icon-cn
     *
     */
    type: {
        type: String,
        default: 'ZoomOutOutlined',
    },
});
</script>

<style scoped lang="less">
.icon {
    font-size: 16px;
}
</style>
