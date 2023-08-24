<template>
  <div class="j-card-panel">
    <div
v-for="(item,i) in itemOptions" :key="i" class="j-card-item vertical"
         :class="{'active':getItemSelected(i) !== -1, 'disabled': disabled || item.disabled, 'horizontal': type === 'horizontal'}"
         @click="handleSelect(i)">
      <div class="j-card-content grid-item" :class="{'flex-item': type === 'horizontal'}">
        <template v-if="type === 'horizontal' && float ==='right'">
          <div class="desc" :style="{paddingRight: '10px'}">
            <Ellipsis>
              <span class="title">{{ item.label }}</span>
            </Ellipsis>
            <Ellipsis :line-clamp="2">
              <span class="sub-title">{{ item.subLabel }}</span>
            </Ellipsis>
          </div>
          <Avatar class="icon box-shadow" :src="item.iconUrl" :size="56"/>
        </template>
        <template v-else>
          <Avatar class="icon" :class="{'box-shadow': type === 'horizontal'}" :src="item.iconUrl" :size="56"/>
          <div class="desc" :style="[type === 'vertical' ? {paddingTop: '10px'}: {paddingLeft: '10px'}]">
            <Ellipsis>
              <span class="title">{{ item.label }}</span>
            </Ellipsis>
            <Ellipsis v-if="type === 'horizontal'" :line-clamp="2">
              <span class="sub-title">{{ item.subLabel }}</span>
            </Ellipsis>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref, toRefs } from 'vue';
import { Avatar } from 'ant-design-vue';
import Ellipsis from '../Ellipsis/ellipsis.vue'

interface CardOption {
  value: string | number,
  label: string,
  subLabel?: string,
  iconUrl: string,
  disabled?: boolean
}

const props = defineProps({
  type: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'vertical'
  },
  float: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  },
  options: {
    type: Array as PropType<Array<CardOption>>,
    default: []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
})
const {options, multiple, type, disabled, float} = toRefs(props);

const sizeClassNameMap = {large: 'lg', small: 'sm', middle: undefined};
const emits = defineEmits(['update:value'])
const selectedItem = ref<any[]>([]);
const itemOptions = computed(() => props.options)

const handleSelect = (i) => {
  if (disabled.value || itemOptions.value[i].disabled) return;
  if (multiple.value) {
    const index = getItemSelected(i);
    index === -1 ? selectedItem.value?.push(i) : selectedItem.value?.splice(index, 1);
    emits('update:value', selectedItem.value?.map(i => itemOptions.value[i]?.value));
  } else {
    selectedItem.value = [i];
    emits('update:value', itemOptions.value[i]?.value);
  }
}

function getItemSelected(i) {
  return selectedItem.value?.findIndex(e => e === i);
}

function handleChange(value: any) {
  emits('update:value', value);
}
</script>

<style lang="less" scoped>
@import "./style/index.less";

</style>
