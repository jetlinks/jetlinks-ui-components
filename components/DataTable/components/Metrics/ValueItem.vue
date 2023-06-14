<template>
  <j-popconfirm-modal
      :showCancel="false"
      bodyStyle="width: 300px"
      @confirm="confirm"
  >
    <template #content>
      <j-form :modal="formData">
        <j-form-item v-if="range === false" >
          <j-input-number v-model:value="formData.value" :precision="0" style="width: 100%"/>
        </j-form-item>
        <div v-else class="data-table-boolean-item">
          <div class="data-table-boolean-item--value">
            <j-form-item name="trueText">
              <j-input-number v-model:value="formData.rangeValue[0]" :precision="0" style="width: 100%"/>
            </j-form-item>
          </div>
          <div>-</div>
          <div class="data-table-boolean-item--value">
            <j-form-item name="trueValue">
              <j-input-number v-model:value="formData.rangeValue[1]" :precision="0" style="width: 100%"/>
            </j-form-item>
          </div>
        </div>
      </j-form>
    </template>
    <j-button myIcon="EditOutlined" style="padding: 4px 8px"></j-button>
  </j-popconfirm-modal>

</template>

<script setup lang="ts" name="ValueItem">

import { reactive} from "vue";
import type { PropType} from "vue";

type ValueType = number | Array<number | undefined> | undefined

type Emit = {
  (e: 'update:value', value: ValueType): void
}

const props = defineProps({
  range: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Number, Array] as PropType<ValueType>,
    default: undefined
  }
})

const emit = defineEmits<Emit>()

const formData = reactive<{
  value: ValueType,
  rangeValue: ValueType
}>({
  value: props.range === false ? props.value : undefined,
  rangeValue: props.range ? props.value || [undefined, undefined] : [undefined, undefined]
})

const confirm = () => {
  emit('update:value', props.range ? formData.rangeValue : formData.value )
}

</script>

<style scoped>

</style>