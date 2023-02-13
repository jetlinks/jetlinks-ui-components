<template>
    <div class="custom-input">
        <Textarea v-bind="props" />
    </div>
</template>

<script lang="ts" setup name="JTextarea">
import { Textarea } from 'ant-design-vue';
import { textAreaProps } from 'ant-design-vue/lib/input/inputProps';

const props = defineProps({
    ...textAreaProps(),
});
</script>

<style scoped lang="less">
.custom-input {
    :deep(.ant-input) {
        border-radius: 6px;
        border: 1px solid #e6e6e6;
        color: #999999;
        &:hover {
            border-color: #cecece;
        }
        &:focus {
            border-color: #315efb;
            color: #333333;
            box-shadow: none;
        }
        &[disabled] {
            background-color: #fafafa;
        }
    }
}
</style>
