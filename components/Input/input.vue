<template>
    <div class="custom-input">
        <Input v-bind="props" />
    </div>
</template>

<script lang="ts" setup name="JInput">
import { Input } from 'ant-design-vue';
import inputProps from 'ant-design-vue/lib/input/inputProps';

const props = defineProps({
    ...inputProps(),
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
    :deep(.ant-input-affix-wrapper) {
        &:not(.ant-input-affix-wrapper-disabled):hover {
            border-color: #315efb;
        }
        &:focus {
            border-radius: 6px;
            border-color: #315efb;
            box-shadow: none;
        }
        &-focused {
            box-shadow: none;
        }
        input.ant-input {
            border: none;
        }
    }
}
</style>
