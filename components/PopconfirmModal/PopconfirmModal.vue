<template>
  <j-popover
      v-bind="props"
      trigger="click"
      :visible="myVisible"
      :overlayClassName="[modalWarpName, overlayClassName ]"
  >
    <template #title>
      <slot name="title" />
    </template>
    <template #content>
      <div class="popconfirm-modal-body" >
        <slot name="content" />
      </div>
        <slot name="footer">
        <div class="popconfirm-modal-footer">
          <j-button v-if="showCancel" size="small" @click.stop="cancel">{{ cancelText }}</j-button>
          <j-button v-if="showOk" size="small" @click.stop="confirm" type="primary" :loading="confirmLoading">{{ okText }}</j-button>
        </div>
        </slot>
    </template>
    <span @click.stop="() => visibleChange(true)">
      <slot />
    </span>
  </j-popover>
</template>

<script setup lang="ts" name="JPopconfirmModal">
import { popoverProps } from 'ant-design-vue/lib/popover'
import {computed, nextTick, ref, watch} from "vue";
import type { CSSProperties, PropType } from "vue";
import { updateStyle } from '../util/document'

type Emit = {
  (e: 'visibleChange', data: Boolean): void
  (e: 'confirm'): void
  (e: 'cancel'): void
}

const props = defineProps({
  ...popoverProps(),
  bodyStyle: {
    type: [String, Object] as PropType<CSSProperties>,
    default: undefined
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  okText: {
    type: String,
    default: '确认'
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  showOk: {
    type: Boolean,
    default: true
  },
  confirmLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<Emit>()

const myVisible = ref(false)

const modalName = 'popconfirm-modal-mask'
const modalWarpName = 'popconfirm-modal-warp'
let modalMaskDom: HTMLDivElement = null

const showModal = () => {
  updateStyle(document.body, {
    overflow: 'hidden',
    width: 'calc(100% - 17px)'
  })
}

const hideModal = () => {
  // 获取最后一个隐藏
  const modalDivs = document.querySelectorAll<HTMLDivElement>(`.${modalName}.hide`)
  const hideModal = modalDivs.length ? modalDivs[modalDivs.length - 1] : null
  modalMaskDom.classList.replace('show', 'close')
  if (!hideModal) {
    document.body.removeAttribute('style')
  } else {
    hideModal?.classList?.replace('hide', 'show')
  }
}

const hideModalAll = () => {
  const modalDivs = document.querySelectorAll(`.${modalName}.show`)
  modalDivs.forEach(node => {
    (node as HTMLDivElement).classList.replace('show', 'hide')
  })
}

const createModal = () => {

  if (!modalMaskDom) {
    const modalDiv = document.createElement('div') as HTMLDivElement
    const modalWarps = document.querySelectorAll(`.${modalWarpName}`)
    modalMaskDom = modalDiv

    modalDiv.setAttribute('class', `${modalName} show`)
    // modalDiv.style.zIndex = `${zIndex}`
    modalWarps[modalWarps.length - 1]?.insertAdjacentElement('beforebegin',modalDiv )
    showModal()
  } else {
    modalMaskDom.classList.replace('close', 'show')
  }
}

const visibleChange = (e: boolean) => {
  myVisible.value = e
  if (e) {
    setTimeout(() => {
      hideModalAll()
      createModal()
    }, 150)
  } else {
    hideModal()
  }
  emit('visibleChange', e)
}

const cancel = () => {
  emit('cancel')
}

const confirm = () => {
  emit('confirm')
}

watch(() => props.visible, (newVisible, oldVisible) => {
  if (newVisible !== oldVisible) {
    visibleChange(newVisible)
  }
}, { immediate: true })

</script>

<style scoped>

</style>