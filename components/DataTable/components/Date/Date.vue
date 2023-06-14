<template>
  <form-item label="格式" required>
    <j-select
        v-model:value="value"
        :options="options"
        mode="tags"
        placeholder="请选择时间格式"
        @change="change"
    />
  </form-item>
</template>

<script setup lang="ts">
import { ref, watch} from 'vue';
import { FormItem, Select as JSelect } from '../../../components'

type Emits = {
  (e: 'update:value', data: string | undefined): void;
  (e: 'change', data: string | undefined): void;
};

const emit = defineEmits<Emits>();

const props = defineProps({
  value: {
    type: String,
    default: undefined,
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

</script>

<style scoped>

</style>