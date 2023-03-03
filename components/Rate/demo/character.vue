<docs>
---
order: 5
title: 其他字符
---

## zh-CN

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

</docs>
<template>
  <div>
    <j-rate v-model:value="value1" allow-half>
      <template #character>
        <heart-outlined />
      </template>
    </j-rate>
    <br />
    <j-rate v-model:value="value2" character="A" allow-half style="font-size: 36px" />
    <br />
    <j-rate v-model:value="value3" character="好" allow-half />
    <br />
  </div>
</template>
<script lang="ts">
import { HeartOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    HeartOutlined,
  },
  setup() {
    const value1 = ref<number>(2);
    const value2 = ref<number>(2.5);
    const value3 = ref<number>(0.5);
    return {
      value1,
      value2,
      value3,
    };
  },
});
</script>
