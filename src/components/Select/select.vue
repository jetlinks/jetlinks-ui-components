<template>
  <div class="custom-select">
    <Select v-bind="baseProps" :showSearch="props.filterable" :filter-option="filterOption" :style="{width: props.width}">
      <slot name="default"/>
    </Select>
  </div>
</template>

<script lang="ts" setup>
import { Select } from 'ant-design-vue'
import { defineProps } from 'vue'
import { SelectProps } from './selectTypes'
import { omit } from 'lodash'

const props = defineProps(SelectProps)
const baseProps = omit(props, ['width', 'filterable'])

const filterOption = (input: string, option: any) => {
  const str = option.label || option.value
  return String(str).toLowerCase().indexOf(input.toLowerCase()) >= 0
}

</script>

<style scoped lang="less">
@import './style/index.less';
</style>
