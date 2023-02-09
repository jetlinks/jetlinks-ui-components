<docs>
---
order: 2
title: 可选择
---

可选择的表格

</docs>
<template>
  <j-pro-table 
    :columns="columns" 
    :data-source="data" 
    :rowSelection="{
        selectedRowKeys: _selectedRowKeys,
        onChange: onSelectChange,
    }"
    :noPagination="true"
    @cancelSelect="cancelSelect"
  >
    <template #card="slotProps">
      <div style="width: 100%" :style="{border: `1px solid ${_selectedRowKeys.includes(slotProps.key) ? 'red' : 'lightgray'}`}">
        <a-card hoverable @click="handleClick(slotProps)" style="width: 100%">{{slotProps?.name + slotProps.key}}</a-card>
      </div>
    </template>
  </j-pro-table>
</template>


<script lang="ts">
import { random } from 'lodash';
import { defineComponent, ref } from 'vue';
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  }
];

const data = Array(10).fill(1).map((item, index) => {
  return {
    key: index + item,
    id: index + item,
    name: 'John Brown',
    age: random(100),
    address: 'New York No. 1 Lake Park',
  }
})

const _selectedRowKeys = ref<string[]>([]);

const onSelectChange = (keys: string[]) => {
    _selectedRowKeys.value = [...keys];
};

const cancelSelect = () => {
    _selectedRowKeys.value = [];
};

const handleClick = (dt: any) => {
    if (_selectedRowKeys.value.includes(dt.key)) {
        const _index = _selectedRowKeys.value.findIndex((i) => i === dt.key);
        _selectedRowKeys.value.splice(_index, 1);
    } else {
        _selectedRowKeys.value = [..._selectedRowKeys.value, dt.key];
    }
};

export default defineComponent({
  setup() {
    return {
      data,
      columns,
      _selectedRowKeys,
      onSelectChange,
      cancelSelect,
      handleClick
    };
  },
});
</script>



