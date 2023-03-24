<template>
    <div :class="{ 'j-card-panel': true, 'no-column': noColumn }">
        <Row v-if="!noColumn" :gutter="[16, 16]">
            <Col
                v-for="item in itemOptions"
                :key="item.value"
                :span="24 / column"
            >
                <div
                    :class="{
                        'j-card-item': true,
                        active: activeKeys.includes(item.value),
                        disabled: disabled || item.disabled,
                        horizontal: type === 'horizontal',
                        vertical: type === 'vertical',
                        right: float === 'right',
                        left: float === 'left',
                    }"
                    @click="() => handleSelect(item.value, item)"
                >
                    <div class="j-card-title-warp">
                        <div class="title">
                            <slot
                                name="title"
                                :title="item.label"
                                :option="item"
                            >
                                {{ item.label }}
                            </slot>
                        </div>
                        <div
                            v-if="item.subLabel && showSubLabel"
                            class="sub-title"
                        >
                            <slot
                                name="subLabel"
                                :sub-label="item.subLabel"
                                :option="item"
                            >
                                {{ item.subLabel }}
                            </slot>
                        </div>
                    </div>
                    <div v-if="showImage" class="j-card-image">
                        <slot name="image" :image="item.iconUrl" :option="item">
                            <Avatar
                                class="icon box-shadow"
                                :src="item.iconUrl"
                            />
                        </slot>
                    </div>
                </div>
            </Col>
        </Row>
        <template v-else>
            <div
                v-for="item in itemOptions"
                :key="item.value"
                :class="{
                    'j-card-item': true,
                    active: activeKeys.includes(item.value),
                    disabled: disabled || item.disabled,
                    horizontal: type === 'horizontal',
                    vertical: type === 'vertical',
                    right: float === 'right',
                    left: float === 'left',
                }"
                @click="() => handleSelect(item.value, item)"
            >
                <div class="j-card-title-warp">
                    <div class="title">
                        <slot name="title" :title="item.label" :option="item">
                            {{ item.label }}
                        </slot>
                    </div>
                    <div v-if="item.subLabel && showSubLabel" class="sub-title">
                        <slot
                            name="subLabel"
                            :sub-label="item.subLabel"
                            :option="item"
                        >
                            {{ item.subLabel }}
                        </slot>
                    </div>
                </div>
                <div v-if="showImage" class="j-card-image">
                    <slot name="image" :image="item.iconUrl" :option="item">
                        <Avatar class="icon box-shadow" :src="item.iconUrl" />
                    </slot>
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref, toRefs, watch } from 'vue';
import { Avatar, Row, Col } from '../components';

interface CardOption {
    value: string | number;
    label: string;
    subLabel?: string;
    iconUrl: string;
    disabled?: boolean;
}

const props = defineProps({
    type: {
        type: String as PropType<'vertical' | 'horizontal'>,
        default: 'horizontal',
    },
    float: {
        type: String as PropType<'left' | 'right'>,
        default: 'left',
    },
    options: {
        type: Array as PropType<Array<CardOption>>,
        default: () => [],
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    column: {
        type: Number,
        default: 3,
    },
    noColumn: {
        type: Boolean,
        default: false,
    },
    showImage: {
        type: Boolean,
        default: true,
    },
    showSubLabel: {
        type: Boolean,
        default: true,
    },
    value: {
        type: [String, Array],
        default: undefined,
    },
});
const { multiple, type, disabled, float } = toRefs(props);

const emits = defineEmits(['update:value', 'change']);
const activeKeys = ref<Array<string | number>>([]);
const itemOptions = computed(() => props.options);

const getOptions = (keys: Array<string | number>): CardOption[] => {
    return itemOptions.value.filter((item) => {
        return keys.includes(item.value);
    });
};

const handleSelect = (key: string | number, item: CardOption) => {
    if (disabled.value || item.disabled) return;
    let cloneActiveKeys = new Set(activeKeys.value);
    const isActive = cloneActiveKeys.has(key);

    if (isActive) {
        cloneActiveKeys.delete(key);
    } else {
        // 添加
        multiple.value
            ? cloneActiveKeys.add(key)
            : (cloneActiveKeys = new Set([key]));
    }
    activeKeys.value = [...cloneActiveKeys.keys()];
    const options = multiple.value ? getOptions(activeKeys.value) : item;
    emits('update:value', activeKeys.value);
    emits('change', activeKeys.value, options);
};

watch(
    () => props.value,
    () => {
        activeKeys.value = Array.isArray(props.value)
            ? props.value
            : [props.value];
    },
    { immediate: true },
);
</script>

<style lang="less"></style>
