<template>
  <Pagination v-bind="baseProps" :class="className" />
</template>

<script lang="ts" setup>
import { Pagination } from 'ant-design-vue'
import {computed, defineProps, reactive,} from 'vue'
import { PaginationProps } from './paginationTypes'
import { omit } from 'lodash'

const props = defineProps(PaginationProps)
const baseProps = omit(props, ['isShowContent'])

const { isShowContent } = reactive(props)

const className = computed(() => {
  return {
    'show-content' : !isShowContent
  }
})

</script>

<style scoped lang="less">
.show-content {
  :deep(.ant-pagination-item) {
    display: none;
  }
}
</style>