<template>
  <div class="custom-auto-complete">
    <AutoComplete v-bind="baseProps" :options="options" :style="{width: props.width}" @search="onSearch">
      <slot name="default"/>

      <template #option="{ value }">
        <slot name="option" :value="value">
          {{ value }}
        </slot>
      </template>
    </AutoComplete>
  </div>
</template>

<script lang="ts" setup>
import { AutoComplete } from 'ant-design-vue'
import type { DefaultOptionType } from 'ant-design-vue/lib/vc-select/Select'
import { autoCompleteProps } from 'ant-design-vue/lib/auto-complete'
import { ref, defineProps } from 'vue'
import { omit } from 'lodash'

const props = defineProps({
    ...autoCompleteProps(),
    width: {
      type: String,
      default: '200px'
    },
})

const baseProps = omit(props, ['options'])
const propsOptions = props.options || []

const options = ref<DefaultOptionType[]>(propsOptions)

/**
 * 根据关键词提示
 * @param searchText 关键词
 */
const onSearch = (searchText: string) => {
  options.value =  propsOptions.filter(i => {
    const str = i.label ? 'label' : 'value'
    return i[str].includes(searchText)
  })
  if(searchText){
    options.value.unshift({label: searchText, value: searchText})
  }
}

</script>

<style scoped lang="less">
:deep(.ant-select-selector){
  border-radius: 6px !important;
}
</style>
