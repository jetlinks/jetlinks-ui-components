<template>
  <div class="scroll-wrap">
    <vueScroll ref="vs" @handle-scroll="handleScroll" :ops="ops">
      <div ref="scrollContent" class="scroll-content">
        <slot></slot>
      </div>
    </vueScroll>
    <div @click="getMore" v-if="more" class="more">查看更多</div>
  </div>
</template>

<script setup>
import {onMounted, nextTick, ref} from 'vue'
const props = defineProps({
  more: { // 是否有下一页
    type: Boolean,
    default: false
  },
  ops: { // 滚动条样式
    type: Object,
    default: () => {
      return {
        scrollPanel: {
          scrollingX: false
        },
        bar: {
          background: '#c1c1c1',
          size: '4px'
        }
      }
    }
  },
})
const scrollContent = ref()
const vs = ref()

const emit = defineEmits(['handleScroll', 'reachBottom'])

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
    emit('reachBottom', nativeEvent)
  }
  // 滚动事件
  emit('handleScroll', nativeEvent)
}
const scrollToTop = (delay = 10) => {
  vs.value.scrollTo(
      {
        y: '0%'
      },
      delay
  )
}
const scrollIntoView = (id, time = 300) => {
  vs.value.scrollIntoView(id, time)
}

const getMore = () => {
  /**
   * 触底事件
   */
  emit('reachBottom')
}
const needGetMore = () => {
  setTimeout(() => {
    if (vs.value) {
      const isScroll = vs.value.$el.className.includes('hasVBar')
      if (isScroll === false && props.more) {
        getMore()
      }
    }
  }, 100)
}
</script>

<style scoped lang="less">
.scroll-wrap {
  height: 100%;
  //overflow: hidden;
  //margin-right: -4px;

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
