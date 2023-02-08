<template>
    <div class="scroll-warp">
        <vuescroll ref="vs" @handle-scroll="handleScroll" :ops="ops">
            <div ref="scrollContent" class="scroll-content">
                <slot></slot>
            </div>
        </vuescroll>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, onMounted, nextTick } from "vue"
import vuescroll from 'vuescroll'
const props = defineProps({
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
    }
})

const scrollContent = ref()
const vs = ref()

const emit = defineEmits(['handleScroll', 'onReachBottom'])

onMounted(() => {
  const config = { attributes: true, childList: true, subtree: true }

  const observer = new MutationObserver(() => {
    nextTick().then(() => {
      needGetMore()
    })
  })
  observer.observe(scrollContent.value, config)
})

const handleScroll = (vertical, horizontal, nativeEvent) => {
  if (vertical.scrollTop + nativeEvent.target.clientHeight + 5 > nativeEvent.target.scrollHeight) {
    // 触底事件
    emit('onReachBottom', nativeEvent)
  }
  // 滚动事件
  emit('handleScroll', nativeEvent)
}

const needGetMore = () => {
  setTimeout(() => {
    if (vs.value) {
      const isScroll = vs.value.$el.className.includes('hasVBar')
      if (isScroll === false) {
        emit('onReachBottom')
      }
    }
  }, 100)
}

</script>


<style scoped lang="less">
.scroll-wrap {
  height: 100%;

  .scroll-content {
    padding-right: 4px;
    padding-bottom: 24px;
  }
  .more {
    text-align: center;
    color: #a19f9d;
    cursor: pointer;
    margin-top: 24px;
  }
}
</style>