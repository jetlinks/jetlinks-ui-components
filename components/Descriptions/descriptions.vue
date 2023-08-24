<template>
  <Descriptions v-bind="props">
    <template v-for="item in slotArr" :key="item" #[item]="scope">
      <slot :name="item"></slot>
    </template>
  </Descriptions>
</template>

<script lang="ts" setup>
  import { Descriptions } from 'ant-design-vue';
  import { descriptionsProps } from 'ant-design-vue/lib/descriptions';
  import { useSlots } from 'vue';
  const slots = useSlots()
  const slotArr = Object.keys(slots);
  const props = defineProps({
    ...descriptionsProps() 
  })
</script>
