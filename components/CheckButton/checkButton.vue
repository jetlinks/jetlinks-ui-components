<template>
    <div :class="['j-check-button', props.class]" :style="style">
        <div
            v-for="item in _options"
            :key="item.value"
            :class="[
                'j-check-button-item',
                myValue.includes(item.value) ? 'selected' : '',
                item.disabled ? 'disabled' : '',
            ]"
            @click="
                () => {
                    selected(item.value, item.disabled);
                }
            "
        >
            {{ item.label }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties, PropType, ref, watch } from 'vue';
import { isArray } from 'lodash-es';

const props = defineProps({
    value: {
        type: [String, Array],
        default: undefined,
    },
    options: {
        type: Array,
        default: () => [],
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    class: {
        type: String,
        default: undefined,
    },
    style: {
        type: Object as PropType<CSSProperties>,
        default: () => ({}),
    },
});
const emit = defineEmits(['update:value', 'change', 'selecte']);

const myValue = ref();
const optionsMap = ref(new Map());

const _options = computed(() => {
    props.options.forEach((item: any) => {
        if (props.disabled) {
            item.display = props.disabled;
        }
        optionsMap.value.set(item.value, item);
    });
    return props.options;
});

watch(
    () => props.value,
    () => {
        if (props.value) {
            myValue.value = isArray(props.value) ? props.value : [props.value];
        } else {
            myValue.value = [];
        }
    },
    { immediate: true, deep: true },
);

const selected = (key: string | number, disabeld: boolean) => {
    if (disabeld) return;

    const values = new Set(myValue.value);

    if (values.has(key)) {
        values.delete(key);
    } else {
        if (!props.multiple) {
            values.clear();
        }
        values.add(key);
    }

    myValue.value = [...values.values()];

    const optionsItems = myValue.value.map((_key) => {
        return optionsMap.value.get(_key);
    });

    const _value = props.multiple ? myValue.value : myValue.value[0];

    emit('update:value', _value);
    emit('change', _value, props.multiple ? optionsItems : optionsItems[0]);
    emit('selecte', _value, props.multiple ? optionsItems : optionsItems[0]);
};
</script>

<style scoped></style>
