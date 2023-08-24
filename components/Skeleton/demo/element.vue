<docs>
---
order: 2.1
title: 按钮/头像/输入框/图像
---

## zh-CN

骨架按钮、头像、输入框和图像。

</docs>

<template>
    <j-space>
        <j-skeleton-button
            :active="active"
            :size="size"
            :shape="buttonShape"
            :block="block"
        />
        <j-skeleton-avatar :active="active" :size="size" :shape="avatarShape" />
        <j-skeleton-input style="width: 200px" :active="active" :size="size" />
    </j-space>
    <br />
    <br />
    <j-skeleton-button
        :active="active"
        :size="size"
        :shape="buttonShape"
        :block="block"
    />
    <br />
    <br />
    <j-skeleton-image />
    <j-divider />
    <j-form layout="inline" style="margin: 16px 0">
        <j-form-item label="Active">
            <j-switch v-model:checked="active" />
        </j-form-item>
        <j-form-item label="Button Block">
            <j-switch v-model:checked="block" />
        </j-form-item>
        <j-form-item label="Size">
            <j-radio-group v-model:value="size">
                <j-radio-button value="default">Default</j-radio-button>
                <j-radio-button value="large">Large</j-radio-button>
                <j-radio-button value="small">Small</j-radio-button>
            </j-radio-group>
        </j-form-item>
        <j-form-item label="Button Shape">
            <j-radio-group v-model:value="buttonShape">
                <j-radio-button value="default">Default</j-radio-button>
                <j-radio-button value="round">Round</j-radio-button>
                <j-radio-button value="circle">Circle</j-radio-button>
            </j-radio-group>
        </j-form-item>
        <j-form-item label="Avatar Shape">
            <j-radio-group v-model:value="avatarShape">
                <j-radio-button value="square">Square</j-radio-button>
                <j-radio-button value="circle">Circle</j-radio-button>
            </j-radio-group>
        </j-form-item>
    </j-form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { SkeletonButtonProps, SkeletonAvatarProps } from 'ant-design-vue';
export default defineComponent({
    setup() {
        return {
            active: ref(false),
            block: ref(false),
            size: ref<SkeletonButtonProps['size']>('default'),
            buttonShape: ref<SkeletonButtonProps['shape']>('default'),
            avatarShape: ref<SkeletonAvatarProps['shape']>('circle'),
        };
    },
});
</script>
