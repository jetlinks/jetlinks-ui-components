<template>
    <div ref="jetTabs" class="jet-tabs">
        <Tabs v-bind="props">
            <template v-for="item in renderArr" :key="item" #[item]="scope">
                <slot :name="item" :scope="scope"></slot>
            </template>
        </Tabs>
        <teleport v-if="content" :to="content">
            <div
                class="center-extra-content"
                :style="{ width: centerExtraWidth }"
            >
                <slot name="centerExtra"></slot>
            </div>
        </teleport>
    </div>
</template>

<script lang="ts" setup>
import { Tabs } from 'ant-design-vue';
import { tabsProps } from './tabsTypes';
import { useSlots, ref, onMounted, nextTick } from 'vue';

const slots = useSlots();
const renderArr = Object.keys(slots).filter(
    (item) => !['centerExtra'].includes(item),
);
const props = defineProps(tabsProps);
const jetTabs = ref();
const content = ref();
const centerExtraWidth = ref();
onMounted(() => {
    nextTick(() => {
        centerExtraWidth.value =
            jetTabs.value.querySelector('.ant-tabs-nav-wrap').clientWidth -
            jetTabs.value.querySelector('.ant-tabs-nav-list').clientWidth +
            'px';
        content.value = jetTabs.value.querySelector('.ant-tabs-nav-wrap');
    });
});
</script>

<style scoped lang="less">
.center-extra-coontent {
    overflow: hidden;
}
</style>
