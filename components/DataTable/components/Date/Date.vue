<template>
  <form-item label="格式" required>
    <j-select
        v-model:value="title.config.data"
        :options="options"
        mode="tags"
        placeholder="请选择时间格式"
        @change="change"
    />
  </form-item>
</template>

<script setup lang="ts" name="Date">
import { ref, watch,reactive} from 'vue';

type Emits = {
  (e: 'update:value', data: string | undefined): void;
  (e: 'change', data: string | undefined): void;
};

const emit = defineEmits<Emits>();

const props = defineProps({
  value: {
    type: String,
    default: undefined,
  },
  configData:{    
      type:Object,
      default: null,
  },
  configIndex:{
      type:Number,
      default: null,
  }
});

const options = ref([
  { label: 'yy-mm-dd hh:mm:ss', value: 'yy-mm-dd hh:mm:ss' },
  { label: 'yy-mm-dd', value: 'yy-mm-dd' },
  { label: 'hh:mm:ss', value: 'hh:mm:ss' },
])

const value = ref<string[]>(props.value ? [props.value] : []);

const change = (v: string[]) => {
  const newValue = v.length > 1 ? v.pop() : v?.[0];
  value.value = [newValue];
  emit('update:value', newValue);
  emit('change', newValue);
};

watch(
    () => props.value,
    (newV) => {
      value.value = newV ? [newV] : undefined;
    },
    { immediate: true },
);


const title=reactive( JSON.parse(JSON.stringify({...props.configData})) )
title.config={data:'yy-mm-dd hh:mm:ss'}
const index=ref(props.configIndex)
defineExpose({
  title,index
})
</script>

<style scoped>

</style>