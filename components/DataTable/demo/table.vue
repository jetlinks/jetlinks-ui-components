<docs>

---
order: 4
title: 基础
---

</docs>
<template>
    <div>
        <j-data-table :columns='columns' :serial="true" :newSource="newSource" border>
            <template #slot1="scope">
                <div>
                    支持通过实体{{scope.data.index}}
                </div>
            </template>
            <template #slot4>
                <a-tag color="pink">pink</a-tag>
                <a-tag color="red">red</a-tag>
            </template>
        </j-data-table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const columns = ref([
    {
        title: '名称',
        dataIndex: 'name',
        width: '100',
        type: 'text',
        slot:'slot1'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: '100',
        type: 'index',
        form: {
          rules: [
            {
              validator(_, value) {
                if (!value) {
                  return Promise.reject('请输入年龄')
                }
                  return Promise.resolve()
              }
            }
          ]
        }
    },
    {
        title: 'width',
        dataIndex: 'width',
        width: '100',
        type: 'TypeSelect',
    },
    {
      title: '其他配置',
      dataIndex: 'config',
      width: '100',
      type: 'config',
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: '100',
        slot:'slot4'
    },
]);
const newSource = ref([  //初始数据
    { name: 1, age: 18, width: 'int', config:  [{ name: 1, age: 18, width: 150, config:  null}]},
    { name: 2, age: 21, width: 'double', config:  null},
    { name: 3, age: 21, width: 'date', config:  null},
    { name: 4, age: 21, width: 'array', config:  null},
])

</script>
