<template>
    <j-select
        v-bind="props"
        v-model:value="_value"
        style="width: 100%"
        placeholder="请选择数据类型"
        :options="_options"
        @change="change"
    />
</template>

<script setup lang="ts" name="TypeSelect">
import type { PropType } from 'vue';
import { computed, defineEmits, ref, watch } from 'vue';
import defaultOptions from './data';
import { selectProps } from 'ant-design-vue/lib/select';
import { Select as JSelect } from '../../../components';

const emit = defineEmits(['update:value']);

const props = defineProps({
    ...selectProps(),
    filter: {
        type: [Array] as PropType<string[]>,
        default: () => [],
    },
});

const _value = ref(props.value);

const _options = computed(() => {
    return props.filter.length
        ? defaultOptions.filter(
              (item: { value: string }) => !props.filter.includes(item.value),
          )
        : defaultOptions;
});

const change = (key) => {
    _value.value = key;
    emit('update:value', key);
};

watch(
    () => props.value,
    () => {
        _value.value = props.value;
    },
);
</script>

<style scoped></style>
