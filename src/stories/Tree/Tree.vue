<template>
  <div>
    <Input v-model="filterText" placeholder="Filter keyword" @change="change"/>
    <Tree 
      class="draggable-tree"
      defaultExpandAll
      :tree-data="treeData"
    />
  </div>
</template>

<script lang="ts" setup>
import { Input, Tree } from 'ant-design-vue'
import { ref, reactive, computed, watch, nextTick } from 'vue';
import { treeFilter } from '../../components/util/filterNodeMethod'

interface Node {
  title: string,
  key: string,
  disabled?: boolean,
  disableCheckbox?: boolean,
  children?: Node[]
}
const filterText = ref('')

const treeData = ref<Node[]>()
const data = ref<Node[]>([
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', title: 'sss' }],
      },
    ],
  },
  {
    title: 'dparent 2',
    key: '0-1',
    children: [
      {
        title: 'parent 1-0',
        key: '0-1-0',
        disabled: true,
        children: [
          { title: 'leaf1', key: '0-1-0-0', disableCheckbox: true },
          { title: 'leaf2', key: '0-1-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-1-1',
        children: [{ key: '0-1-1-0', title: '22' }],
      },
    ],
  },
]
);

treeData.value = [...data.value]
const change = (val) => {
  treeData.value =  treeFilter<Node>(data.value, val.target.value, 'title')
}

</script>
