<template>
  <div class='JSearch-item'>
    <template v-if="!onlyValue">
      <div class='JSearch-item--type' v-if='expand'>
        <a-select
            v-if='index !== 1 && index !== 4'
            :options='typeOptions'
            v-model:value='termsModel.type'
            style='width: 100%;'
            @change='valueChange'
        />
        <span v-else>
          {{
            index === 1 ? '第一组' : '第二组'
          }}
        </span>
      </div>
      <a-select
          class='JSearch-item--column'
          :options='columnOptions'
          v-model:value='termsModel.column'
          @change='columnChange'
      />
      <a-select
          class='JSearch-item--termType'
          :options='termTypeOptions.option'
          v-model:value='termsModel.termType'
          @change='termTypeChange'
      />
    </template>
    <template v-else>
      <div class="JSearch-item--label">
        {{ columnOptions[0]?.label }}
      </div>
    </template>
    <div class='JSearch-item--value'>
      <a-input
          v-if='component === componentType.input'
          v-bind="cProps"
          v-model:value='termsModel.value'
          style='width: 100%'
          @change='valueChange'
      />
      <a-select
          v-else-if='component === componentType.select'
          style='width: 100%;min-width: 80px'
          v-bind="cProps"
          showSearch
          :loading='optionLoading'
          v-model:value='termsModel.value'
          :options='options'
          @change='valueChange'
          :filterOption='(v, option) => filterTreeSelectNode(v, option, "label")'
      />
      <a-input-number
          v-else-if='component === componentType.inputNumber'
          style='width: 100%'
          v-bind="cProps"
          v-model:value='termsModel.value'
          @change='valueChange'
      />
      <a-input-password
          v-else-if='component === componentType.password'
          style='width: 100%'
          v-bind="cProps"
          v-model:value='termsModel.value'
          @change='valueChange'
      />
      <a-switch
          v-else-if='component === componentType.switch'
          style='width: 100%'
          v-bind="cProps"
          v-model:checked='termsModel.value'
          @change='valueChange'
      />
      <a-radio-group
          v-else-if='component === componentType.radio'
          style='width: 100%'
          v-bind="cProps"
          v-model:value='termsModel.value'
          @change='valueChange'
      />
      <a-checkbox-group
          v-else-if='component === componentType.checkbox'
          style='width: 100%'
          v-bind="cProps"
          v-model:value='termsModel.value'
          :options='options'
          @change='valueChange'
      />
      <a-time-picker
          v-else-if='component === componentType.time'
          valueFormat='HH:mm:ss'
          style='width: 100%'
          v-bind="cProps"
          v-model:value='termsModel.value'
          @change='valueChange'
      />
      <a-date-picker
          v-else-if='component === componentType.date'
          showTime
          valueFormat='YYYY-MM-DD HH:mm:ss'
          style='width: 100%'
          v-bind="cProps"
          v-model:value='termsModel.value'
          @change='valueChange'
      />
      <a-tree-select
          v-else-if='component === componentType.treeSelect'
          showSearch
          v-model:value='termsModel.value'
          style='width: 100%'
          :fieldNames='{ label: "name", value: "id" }'
          v-bind="cProps"
          :tree-data='options'
          @change='valueChange'
          :filterTreeNode='(v, option) => filterSelectNode(v, option)'
      />
    </div>
  </div>
</template>

<script setup lang='ts' name='SearchItem'>
import { typeOptions, termType, componentType } from './setting'
import type { PropType } from 'vue'
import { watch, ref, reactive, onBeforeMount } from 'vue'
import type { SearchItemData, SearchProps, Terms } from './typing'
import { cloneDeep, get, isArray, isFunction } from 'lodash-es'
import { filterTreeSelectNode, filterSelectNode } from './util'

type ItemType = SearchProps['type']

interface Emit {
  (e: 'change', data: SearchItemData): void
}

const props = defineProps({
  columns: {
    type: Array as PropType<SearchProps[]>,
    default: () => [],
    required: true
  },
  index: {
    type: Number,
    default: 1
  },
  expand: {
    type: Boolean,
    default: false
  },
  termsItem: {
    type: Object as PropType<Terms>,
    default: () => ({})
  },
  componentProps: {
    type: Object,
    default: () => ({})
  },
  onlyValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<Emit>()

const termsModel = reactive<SearchItemData>({
  type: 'or',
  value: '',
  termType: 'like',
  column: ''
})

const component = ref(componentType.input)
const cProps = ref({})

const options = ref<any[]>([])

const columnOptions = ref<{ label: string, value: string}[]>([])
const columnOptionMap = new Map()

const termTypeOptions = reactive({option: termType})

const optionLoading = ref(false)


/**
 * 根据类型切换默termType值
 * @param type
 */
const getTermType = (type?: ItemType) => {
  termTypeOptions.option = termType
  switch (type) {
    case 'select':
    case 'treeSelect':
    case 'number':
      return 'eq'
    case 'date':
    case 'time':
      // 时间只有大于或小于两个值
      termTypeOptions.option = termType.filter(item => ['gt','lt'].includes(item.value))
      return 'gt'
    default:
      return 'like'
  }
}

/**
 * 根据类型返回组件
 * @param type
 */
const getComponent = (type?: ItemType) => {
  switch (type) {
    case 'select':
      component.value = componentType.select
      break;
    case 'treeSelect':
      component.value = componentType.treeSelect
      break;
    case 'date':
      component.value = componentType.date
      break;
    case 'time':
      component.value = componentType.time
      break;
    case 'number':
      component.value = componentType.inputNumber
      break;
    default:
      component.value = componentType.input
      break;
  }
}

const handleItemOptions = (option?: any[] | Function) => {
  options.value = []
  if (isArray(option)) {
    options.value = option
  } else if (isFunction(option)) {
    optionLoading.value = true
    option().then((res: any[]) => {
      optionLoading.value = false
      options.value = res
    }).catch((_: any) => {
      optionLoading.value = false
    })
  }
}

const columnChange = (value: string, isChange: boolean) => {
  const item = columnOptionMap.get(value)
  console.log(value, columnOptionMap, item)
  cProps.value = item.componentProps
  optionLoading.value = false
  // 设置value为undefined
  termsModel.column = value
  termsModel.termType = item.defaultTermType || getTermType(item.type)

  getComponent(item.type) // 处理Item的组件类型

  // 处理options 以及 request
  if ('options' in item) {
    handleItemOptions(item.options)
  }

  termsModel.value = undefined

  if (isChange) {
    valueChange()
  }
}

const handleItem = () => {
  columnOptionMap.clear()
  columnOptions.value = []
  if (!props.columns.length) return

  columnOptions.value = props.columns.map(item => { // 对columns进行Map处理以及值处理
    columnOptionMap.set(item.column, item)
    return {
      label: item.title,
      value: item.column
    }
  })
  if (!props.onlyValue) {
    // 获取第一个值
    const sortColumn = cloneDeep(props.columns)
    sortColumn?.sort((a, b) => a.sortIndex! - b.sortIndex!)

    const _index = props.index > sortColumn.length ? sortColumn.length - 1 : props.index
    const _itemColumn = sortColumn[_index - 1]
    columnChange(_itemColumn.column as string, false)
  } else {
    columnChange(props.columns[0]?.column as string, false)
  }
}

const termTypeChange = () => {
  valueChange()
}

const valueChange = () => {

  emit('change', {
    type: props.onlyValue ? 'and' : termsModel.type,
    value: termsModel.value,
    termType: termsModel.termType,
    column: termsModel.column,
  })
}

handleItem()

onBeforeMount(() => {
  cProps.value = props.componentProps
})

watch( props.termsItem, (newValue) => {
  let path = props.index < 4 ? [0, 'terms', props.index - 1] : [1, 'terms', props.index - 4]

  if (props.onlyValue) {
    path = [props.index - 1]
  }
  const itemData: SearchItemData = get(newValue.terms, path)
  if (itemData) {
    termsModel.type = itemData.type
    termsModel.column = itemData.column
    termsModel.termType = itemData.termType
    termsModel.value = itemData.value
    const item = columnOptionMap.get(itemData.column)
    getComponent(item.type) // 处理Item的组件类型

    // 处理options 以及 request
    if ('options' in item) {
      handleItemOptions(item.options)
    }
  } else {
    handleItem()
  }
}, { immediate: true, deep: true })

</script>

<style scoped lang='less'>
.JSearch-item {
  display: flex;
  gap: 16px;
  align-items: center;

  .JSearch-item--type {
    min-width: 80px;
    > span {
      line-height: 34px;
      font-weight: bold;
    }
  }

  .JSearch-item--column {
    min-width: 100px;
  }

  .JSearch-item--termType {
    min-width: 100px;
  }
  .JSearch-item--label {
    min-width: 40px;
  }

  .JSearch-item--value {
    flex: 1 1 auto;
  }
}
</style>