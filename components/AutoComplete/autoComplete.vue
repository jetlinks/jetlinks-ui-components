<template>
    <AutoComplete
        v-bind="props"
        :options="options"
        @search="onSearch"
        @dropdownVisibleChange="dropdownVisibleChange"
    >
        <slot name="default" />
        <template #option="{ value, label }">
            <slot name="option" :value="value">
                {{ label || value }}
            </slot>
        </template>
    </AutoComplete>
</template>

<script lang="ts" setup name="JAutoComplete">
import { AutoComplete } from 'ant-design-vue';
import type { DefaultOptionType } from 'ant-design-vue/lib/vc-select/Select';
import { autoCompleteProps } from 'ant-design-vue/lib/auto-complete';
import { ref, defineProps } from 'vue';

type Emit = {
    (e: 'select', value, option): void;
};

const props = defineProps({
    ...autoCompleteProps(),
    searchKey: {
        type: String,
        default: 'label',
    },
});
const emit = defineEmits<Emit>();

const options = ref<DefaultOptionType[]>(props.options);

/**
 * 根据关键词提示
 * @param searchText 关键词
 */
const onSearch = (searchText: string) => {
    options.value = props.options.filter(
        (item) => !!item[props.searchKey]?.includes(searchText),
    );
    if (!options.value.length) {
        options.value.unshift({ label: searchText, value: searchText });
    }
};

const dropdownVisibleChange = (open: boolean) => {
    if (!open) {
        // 关闭还原下拉options
        setTimeout(() => {
            options.value = props.options;
        });
    }
};
</script>
