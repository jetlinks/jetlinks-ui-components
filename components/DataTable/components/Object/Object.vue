<template>
  <PopconfirmModal
      body-style="padding-top:4px;width:600px;"
      @confirm="confirm"
  >
    <template #content>
      <div>
        <Scrollbar height="300">
          <DataTable  :columns='columns' :serial="true" :newSource="newSource" :childe="true" border ref="tableRef"></DataTable>
        </Scrollbar>
        <Button style="width: 100%;margin-bottom: 24px" @click="addList">添加</Button>
      </div>
    </template>
      <Icon />
  </PopconfirmModal>
</template>

<script setup lang="ts" name="Object">
import DataTable from '../../dataTable.vue'
import { onMounted, reactive, Ref, ref } from "vue";
import { Button, PopconfirmModal, Scrollbar } from '../../../components'
import Icon from '../Icon.vue'

type Emits = {
  (e: 'update:value', data: any): void;
};

const emit = defineEmits<Emits>();

const props = defineProps({
    value: {
      type: Array,
      default: () => []
    },
    columns:{
        type:Object,
        default: null,
    }
});
interface obj {
    [idx: string]: any
}

const newSource= ref(props.value || []) //将null类型转为数组
const tableRef = ref()

const addList = () => {
    const newObject = props.columns.reduce((prev, next) => {
      return { ...prev, [next.dataIndex]: undefined }
    }, {})

    newSource.value.push(newObject)
}

const confirm = () => {
  return new Promise(async(resolve, reject) => {
    tableRef.value?.getData().then((data) => {
      resolve(true)
      emit('update:value', data)
    }).catch(() => {
      reject(false)
    })
  })
}

</script>

<style scoped>

</style>
