<template>
    <div class="j-card-panel" :class="{ 'flex-column': type == 'vertical' }">
        <slot></slot>
        <!-- <div
            v-for="(item, i) in itemOptions"
            :key="i"
            class="j-card-item vertical"
            :class="{
                active: getItemSelected(i) !== -1,
                disabled: disabled || item.disabled,
                horizontal: type === 'horizontal',
            }"
            @click="handleSelect(i)"
        >
            <div
                class="j-card-content grid-item"
                :class="{ 'flex-item': type === 'horizontal' }"
            >
                <template v-if="type === 'horizontal' && float === 'right'">
                    <div class="desc" :style="{ paddingRight: '10px' }">
                        <Ellipsis>
                            <span class="title">{{ item.label }}</span>
                        </Ellipsis>
                        <Ellipsis :line-clamp="2">
                            <span class="sub-title">{{ item.subLabel }}</span>
                        </Ellipsis>
                    </div>
                    <Avatar
                        class="icon box-shadow"
                        :src="item.image"
                        :size="iconSize"
                    />
                </template>
                <template v-else>
                    <Avatar
                        class="icon"
                        :class="{ 'box-shadow': type === 'horizontal' }"
                        :src="item.image"
                        :size="iconSize"
                    />
                    <div
                        class="desc"
                        :style="[
                            type === 'vertical'
                                ? { paddingTop: '10px' }
                                : { paddingLeft: '10px' },
                        ]"
                    >
                        <Ellipsis>
                            <span class="title">{{ item.label }}</span>
                        </Ellipsis>
                        <Ellipsis v-if="type === 'horizontal'" :line-clamp="2">
                            <span class="sub-title">{{ item.subLabel }}</span>
                        </Ellipsis>
                    </div>
                </template>
            </div>
        </div> -->
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, provide } from 'vue';

const props = defineProps({
    type: {
        type: String as PropType<'vertical' | 'horizontal'>,
        default: 'horizontal',
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    value: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emits = defineEmits(['update:value']);

const selectedItem = ref<any[]>([]);
const setValue = (val: string) => {
    if (props.multiple) {
        if (selectedItem.value.findIndex((item) => item == val) == -1) {
            selectedItem.value.push(val);
        } else {
            selectedItem.value.splice(
                selectedItem.value.findIndex((item) => item == val),
                1,
            );
        }
        emits('update:value', selectedItem.value);
    } else {
        selectedItem.value = [val];
        emits('update:value', val);
    }
};
provide('CardSelect', { props, setValue });
</script>
