<template>
  <Tree v-bind="props" />
</template>

<script lang="ts" setup>
import { Tree } from 'ant-design-vue';
import { treeProps } from 'ant-design-vue/lib/tree/Tree';

const props = defineProps({
  ...treeProps(),
});
</script>

