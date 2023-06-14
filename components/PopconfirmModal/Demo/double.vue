<docs>
---
order: 1
title: 嵌套
---

</docs>
<template>
  <j-popconfirm-modal
    v-model:visible="visible1"
    @confirm="confirm1"
  >
    <template #title>
      这是一段文字
    </template>
    <template #content>
      <j-popconfirm-modal>
        <template #title>
          这是一段文字2
        </template>
        <template #content>
          <j-popconfirm-modal>
            <template #title>
              这是一段文字3
            </template>
            <j-button>按钮3</j-button>
          </j-popconfirm-modal>
        </template>
        <j-button>按钮2</j-button>
      </j-popconfirm-modal>
    </template>
    <j-button>按钮</j-button>
  </j-popconfirm-modal>

  <j-popconfirm-modal
      @confirm="confirm2"
  >
    <template #title>
      这是一段文字
    </template>
    <j-button>按钮2</j-button>
  </j-popconfirm-modal>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  name: "double",
  setup() {
    const visible1 = ref(false)
    const visible2 = ref(false)

    const confirm1 = () => {
      console.log('confirm1')
      visible1.value = false
    }

    const confirm2 = () => {
      console.log('confirm2')
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('confirm2-----timeend')
          resolve(true)
        }, 3000)
      })
    }

    const visibleChange1 = (e) => {
      console.log('visibleChange1', e)
      visible1.value = e
    }

    watch(() => visible1, () => {
      console.log('watch---visible1', visible1)
    })

    return {
      visible1,
      visible2,
      confirm1,
      confirm2,
      visibleChange1
    }
  }
}
</script>

<style scoped>

</style>