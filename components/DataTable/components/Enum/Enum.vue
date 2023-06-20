<template>
  <PopconfirmModal
      body-style="padding-top:4px;width: 500px;"
      @confirm="confirm"
  >
    <template #content>
      <Scrollbar height="350">
        <Form :model="formData" layout="vertical">
          <FormItem label="枚举项" required>
              <RadioGroup v-model:value="formData.type"  button-style="solid">
                  <Space>
                    <RadioButton value="1">仅单选</RadioButton>
                    <RadioButton value="2">支持多选</RadioButton>
                  </Space>
              </RadioGroup>
              <Table v-model:value="formData.enums"/>
          </FormItem>
        </Form>
      </Scrollbar>
    </template>
    <Icon />
  </PopconfirmModal>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Table from './Table.vue';
import { PopconfirmModal, FormItem, Form, Scrollbar, RadioGroup, Space, RadioButton } from '../../../components'
import Icon from '../Icon.vue'
import {cloneDeep} from "lodash-es";

const emit = defineEmits(['update:value'])

const props = defineProps({
    value: {
      type: Object,
      default: () => {

      }
    }
});


const formData = reactive({
  type: props.value?.unit,
  enums: props.value?.enums || []
})

const confirm = () => {
  emit('update:value', cloneDeep(formData))
}
</script>

<style scoped></style>
