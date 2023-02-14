<template>
  <div class='JSearch-warp' ref='searchRef'>
    <div class='JSearch-content simple no-flex'>
      <div class='JSearch-items'>
        <div class="JSearch-item" v-for="(item, index) in searchItems">
          <SearchItem
              :onlyValue="true"
              :expand='false'
              :index='index + 1'
              :columns='[item]'
              :componentProps="item.componentProps"
              @change='(v) => itemValueChange(v, index)'
              :termsItem='terms'
          />
        </div>

      </div>
      <div class='JSearch-footer'>
        <div class='JSearch-footer--btns'>
          <a-button type="primary" @click='searchSubmit'>
            <template #icon><SearchOutlined /></template>
            搜索
          </a-button>
          <a-button @click='reset'>
            <template #icon><RedoOutlined /></template>
            重置
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {JColumnsProps, SearchItemData, SearchProps, Terms} from "./typing";
import { set } from "lodash-es";
import {reactive, ref} from "vue";
import type { PropType } from "vue";
import {termsParamsFormat} from "./util";
import SearchItem from './Item.vue'

interface Emit {
  (e: 'search', data: Terms[]): void
}

const props = defineProps({
  columns: {
    type: Array as PropType<JColumnsProps[]>,
    default: () => [],
    required: true
  }
})

const columnOptionMap = new Map()

const emit = defineEmits<Emit>()
// 当前查询条件
const terms = reactive<Terms>({ terms: [] })

const searchItems = ref<SearchProps[]>([])// 当前查询条件列表

const itemValueChange = (value: SearchItemData, index: number) => {
  set(terms.terms, [index], value)
}

const handleItems = () => {
  searchItems.value = []
  columnOptionMap.clear()
  props.columns!.forEach((item, index) => {
    if (item.search && Object.keys(item.search).length) {
      columnOptionMap.set(item.dataIndex, item.search)
      searchItems.value.push({
        ...item.search,
        sortIndex: item.search.first ? 0 : index + 1,
        title: item.title as any,
        column: item.dataIndex,
      })
    }
  })
}

/**
 * 提交
 */
const searchSubmit = () => {
  emit('search', termsParamsFormat(terms.terms, columnOptionMap, 'low'))
}

/**
 * 重置查询
 */
const reset = () => {
  terms.terms = []
  emit('search', [])
}

handleItems()

</script>

<style scoped>

</style>