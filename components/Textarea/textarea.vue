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
