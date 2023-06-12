<template>
  <Select v-bind="props">
    <SelectOption key="true" :value="trueValue" > {{ trueText }}</SelectOption>
    <SelectOption key="false" :value="falseValue" > {{ falseText }}</SelectOption>
  </Select>
</template>

<script setup lang="ts" name="JSelectBoolean">
import { Select, SelectOption } from 'ant-design-vue';
import { selectProps } from 'ant-design-vue/lib/select'
import { defineProps} from "vue";

const props = defineProps({
  ...selectProps,
  trueText: {
    type: String,
    default: '是'
  },
  falseText: {
    type: String,
    default: '否'
  },
  trueValue: {
    type: [String, Boolean, Number],
    default: true
  },
  falseValue: {
    type: [String, Boolean, Number],
    default: false
  }
});

</script>

<style scoped>

</style>