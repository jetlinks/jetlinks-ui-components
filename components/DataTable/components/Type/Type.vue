<template>
  <j-select
      style="width: 100%"
      placeholder="请选择数据类型"
      v-bind="props"
      :options="_options"
  />
</template>

<script setup lang="ts" name="TypeSelect">
import type { PropType } from 'vue'
import { computed } from 'vue'
import defaultOptions from './data'
import { selectProps } from 'ant-design-vue/lib/select'

const props = defineProps({
  ...selectProps,
  filter: {
    type: [Array] as PropType<string[]>,
    default: () => []
  }
})

const _options = computed(() => {
  return props.filter.length ? defaultOptions.filter((item: {value: string}) => !props.filter.includes(item.value)) : defaultOptions
})

</script>

<style scoped>

</style>