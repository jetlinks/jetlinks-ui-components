<template>
  <ScrollWrap @onReachBottom="onReachBottom" @handleScroll="handleScroll" ref="sw" :more="more" :ops="ops">
    <div :style="{ width, ...gridStyle }" class="flex-list-wrapper">
      <div v-if="$slots.prev" class="item-wrap">
        <slot name="prev"></slot>
      </div>
      <div v-for="(item, index) in list"
          :key="index"
          class="item-wrap">
        <div ref="edgeItem">
          <slot name="card" :index="index" :slotProps="item"></slot>
        </div>
      </div>
    </div>
  </ScrollWrap>
</template>

<script setup lang="ts">
import {ref, watchEffect, nextTick, watch} from "vue";
import ScrollWrap from './ScrollWrap.vue'
const props = defineProps({
  list: {
    type: Array,
    default() {
      return []
    }
  },
  width: {
    type: String,
    default: '100%'
  },
  more: {
    type: Boolean,
    default: false
  },
  ops: {
    type: Object,
    default: () => {
      return {
        scrollPanel: {
          scrollingX: false
        },
        bar: {
          background: '#e9ebed',
          size: '4px'
        }
      }
    }
  },
})

const emit = defineEmits(['handleScroll', 'onReachBottom'])

const gridStyle = ref({})
const edgeItem = ref([])

watch(
      () => props.list,
      (newVal) => {
        console.log(newVal, '123')
          if (newVal.length) {
            nextTick().then(() => {
              if (!edgeItem.value || !edgeItem.value[0]) {
                return
              }
              gridStyle.value = {
                gridTemplateColumns: `repeat(auto-fill, ${edgeItem.value[0]?.getBoundingClientRect().width}px)`
              }
            })
          } else {
            nextTick().then(() => {
              gridStyle.value = {}
            })
          }
      },
      { deep: true, immediate: true }
  )


const handleScroll = (e: Event) => {
  // 滚动事件
  emit('handleScroll', e)
}

const onReachBottom = (e: Event) => {
  /**
   * 触底事件
   */
  emit('onReachBottom', e)
}
</script>


<style scoped lang="less">
.flex-list-wrapper {
  display: grid;
  justify-content: start;
  grid-gap: 24px 24px;

  .item-wrap {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}
</style>