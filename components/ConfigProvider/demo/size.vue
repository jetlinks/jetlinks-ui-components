<docs>
---
order: 2
title:
  zh-CN: 组件尺寸
  en-US: Component size
---

## zh-CN

修改默认组件尺寸。

## en-US

Config component default size.

</docs>

<template>
  <j-radio-group v-model:value="componentSize">
    <j-radio-button value="small">Small</j-radio-button>
    <j-radio-button value="middle">Middle</j-radio-button>
    <j-radio-button value="large">Large</j-radio-button>
  </j-radio-group>
  <j-divider />
  <j-config-provider :component-size="componentSize">
    <div class="example">
      <j-input />
    </div>
    <div class="example">
      <j-tabs>
        <j-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</j-tab-pane>
        <j-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</j-tab-pane>
        <j-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</j-tab-pane>
      </j-tabs>
    </div>
    <div class="example">
      <j-input-search allow-clear />
    </div>
    <div class="example">
      <j-textarea allow-clear />
    </div>
    <div class="example">
      <j-select style="width: 100px" placeholder="select value" :options="[{ value: 'demo' }]" />
    </div>
    <div class="example">
      <j-datePicker />
    </div>
    <div class="example">
      <j-range-picker />
    </div>
    <div class="example">
      <j-button>Button</j-button>
    </div>
    <div class="example">
      <j-card title="Card">
        <j-table :columns="columns" :datj-source="dataSource" />
      </j-card>
    </div>
  </j-config-provider>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const componentSize = ref('small');
    const columns = [
      { title: 'Name', dataIndex: 'name' },
      { title: 'Age', dataIndex: 'age' },
    ];
    const dataSource = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
      },
    ];
    return {
      componentSize,
      columns,
      dataSource,
    };
  },
});
</script>
<style scoped>
.example {
  margin: 16px 0;
}
</style>
