<docs>
---
order: 5
title: 分页
---

## zh-CN

大数据下使用分页。

</docs>

<template>
  <div>
    <j-transfer
      v-model:target-keys="targetKeys"
      :data-source="mockData"
      :render="item => item.title"
      :disabled="disabled"
      pagination
      @change="handleChange"
    />
    <j-switch
      v-model:checked="disabled"
      un-checked-children="enabled"
      checked-children="disabled"
      style="margin-top: 16px"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface MockData {
  key: string;
  title: string;
  description: string;
}
const mockData: MockData[] = [];
for (let i = 0; i < 200; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
export default defineComponent({
  data() {
    const disabled = ref<boolean>(false);

    const targetKeys = ref<string[]>(oriTargetKeys);

    const handleChange = (nextTargetKeys: string[], direction: string, moveKeys: string[]) => {
      console.log('targetKeys: ', nextTargetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
    };

    return {
      mockData,
      targetKeys,
      disabled,
      handleChange,
    };
  },
});
</script>
