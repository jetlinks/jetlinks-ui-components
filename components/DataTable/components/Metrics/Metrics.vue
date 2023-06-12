<template>
  <j-table
    :paging="false"
  >
    <template #bodyCell="{ column, record, index }">
      <template v-if="column.dataIndex === 'id'">
        <j-input v-model="record.value" placeholder="请输入" />
      </template>
      <template v-if="column.dataIndex === 'name'">
        <j-input v-model="record.text" placeholder="请输入" />
      </template>
      <template v-if="column.dataIndex === 'range'">
        <j-select
            v-model="record.range"
            :options="[
                { label: '固定值', value: false },
                { label: '范围值', value: true },
            ]"
            @select="() => itemSelect(record)"
        />
      </template>
      <template v-if="column.dataIndex === 'value'">
        <j-input v-model="record.text" placeholder="请输入" />
      </template>
      <template v-if="column.dataIndex === 'action'">
        <j-button type="link" @click="() => deleteItem(index)">
          <AIcon type="DeleteOutlined" />
        </j-button>
      </template>
    </template>
  </j-table>
  <j-button>添加指标值</j-button>
</template>

<script setup lang="ts" name="Metrics">
import {ref} from "vue";

const source = ref([]);

const emit = defineEmits(['update:value', 'change']);

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
  },
  {
    title: '指标标识',
    dataIndex: 'id',
  },
  {
    title: '指标名称',
    dataIndex: 'name',
  },
  {
    title: '指标值',
    dataIndex: 'range',
  },
  {
    title: '指标配置',
    dataIndex: 'value',
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 80
  },
];
const updateValue = () => {
  emit('update:value', source.value);
  emit('change', source.value);
};

const addItem = () => {
  source.value.push({
    id: undefined,
    name: undefined,
    range: false,
    value: undefined,
  });

  updateValue();
};

const deleteItem = (index: number) => {
  source.value.splice(index, 1);
  updateValue();
};

const itemSelect = (data: any) => {
  data.value = data.range ? [undefined, undefined] : undefined
}

</script>

<style scoped>

</style>