<template>
    <Tooltip ref="tooltipRef" placement="top" v-bind="props.tooltip">
        <span
            ref="triggerRef"
            @click="handleClickRef"
            @mouseenter="
                [
                    props.expandTrigger === 'click'
                        ? getTooltipDisabled
                        : undefined,
                ]
            "
        ></span>
    </Tooltip>
</template>

<script lang="ts" setup>
import { Tooltip } from 'ant-design-vue';
import { TooltipProps } from 'ant-design-vue/es';
import { computed, PropType, ref } from 'vue';

const props = defineProps({
    /** expand by */
    expandTrigger: {
        type: String as PropType<'click'>,
        default: undefined,
    },
    /** multiline ellipsis */
    lineClamp: {
        type: [Number, String] as PropType<string | number>,
        default: 1,
    },
    /** a-tooltip props */
    tooltip: {
        type: [Boolean, Object] as PropType<TooltipProps | boolean>,
        default: true,
    },
});

const expandedRef = ref(false);
const tooltipRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);

const ellipsisStyleRef = computed(() => {
    const { lineClamp } = props;
    const { value: expanded } = expandedRef;
    if (lineClamp !== undefined) {
        return {
            textOverflow: '',
            '-webkit-line-clamp': expanded ? '' : lineClamp,
        };
    } else {
        return {
            textOverflow: expanded ? '' : 'ellipsis',
            '-webkit-line-clamp': '',
        };
    }
});

function createLineClampClass(clsPrefix: string): string {
    return `${clsPrefix}-ellipsis--line-clamp`;
}

function createCursorClass(clsPrefix: string, cursor: string): string {
    return `${clsPrefix}-ellipsis--cursor-${cursor}`;
}

function syncCursorStyle(trigger: HTMLElement, tooltipDisabled: boolean): void {
    const cursorClass = createCursorClass(mergedClsPrefixRef.value, 'pointer');
    if (props.expandTrigger === 'click' && !tooltipDisabled) {
        syncTriggerClass(trigger, cursorClass, 'add');
    } else {
        syncTriggerClass(trigger, cursorClass, 'remove');
    }
}

function getTooltipDisabled(): boolean {
    let tooltipDisabled = false;
    const { value: expanded } = expandedRef;
    if (expanded) return true;
    const { value: trigger } = triggerRef;
    if (trigger) {
        const { lineClamp } = props;
        // we need to apply style here, since the dom may be updated in
        // nextTick, measure dom size will derive wrong result
        syncEllipsisStyle(trigger);
        if (lineClamp !== undefined) {
            tooltipDisabled = trigger.scrollHeight <= trigger.offsetHeight;
        } else {
            const { value: triggerInner } = triggerInnerRef;
            if (triggerInner) {
                tooltipDisabled =
                    triggerInner.getBoundingClientRect().width <=
                    trigger.getBoundingClientRect().width;
            }
        }
        syncCursorStyle(trigger, tooltipDisabled);
    }
    return tooltipDisabled;
}

const handleClickRef = computed(() => {
    return props.expandTrigger === 'click'
        ? () => {
              const { value: expanded } = expandedRef;
              if (expanded) {
                  tooltipRef.value!.setAttribute('display', 'none');
              }
              expandedRef.value = !expanded;
          }
        : undefined;
});

function syncEllipsisStyle(trigger: HTMLElement): void {
    if (!trigger) return;
    const latestStyle = ellipsisStyleRef.value;
    const lineClampClass = createLineClampClass(mergedClsPrefixRef.value);
    if (props.lineClamp !== undefined) {
        syncTriggerClass(trigger, lineClampClass, 'add');
    } else {
        syncTriggerClass(trigger, lineClampClass, 'remove');
    }
    for (const key in latestStyle) {
        // guard can make it a little faster
        if ((trigger.style as any)[key] !== (latestStyle as any)[key]) {
            (trigger.style as any)[key] = (latestStyle as any)[key];
        }
    }
}

function syncTriggerClass(
    trigger: HTMLElement,
    styleClass: string,
    action: 'add' | 'remove',
): void {
    if (action === 'add') {
        if (!trigger.classList.contains(styleClass)) {
            trigger.classList.add(styleClass);
        }
    } else {
        if (trigger.classList.contains(styleClass)) {
            trigger.classList.remove(styleClass);
        }
    }
}
</script>

<style scoped lang="less"></style>
