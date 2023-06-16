<template>
  <j-popover
      trigger="click"
      :visible="myVisible"
      :overlayClassName="[modalWarpName, overlayClassName ]"
      @visibleChange="() => {}"
  >
    <template #title>
      <slot name="title"/>
    </template>
    <template #content>
      <div class="popconfirm-modal-body" :style="bodyStyle">
        <slot name="content"/>
      </div>
      <slot name="footer">
        <div class="popconfirm-modal-footer">
          <Button v-if="showCancel" size="small" @click.stop="cancel">{{ cancelText }}</Button>
          <Button v-if="showOk" size="small" @click.stop="confirm" type="primary" :loading="loading">{{
              okText
            }}
          </Button>
        </div>
      </slot>
    </template>
    <span @click="() => visibleChange(true)">
      <slot/>
    </span>
  </j-popover>
</template>

<script setup lang="ts" name="JPopconfirmModal">
import {popoverProps} from 'ant-design-vue/lib/popover'
import {ref} from "vue";
import type {CSSProperties, PropType} from "vue";
import {updateStyle} from '../util/document'
import { Button, Popover as JPopover } from '../components'
import { isPromise } from "../util/comm";
type Emit = {
  (e: 'update:visible', data: Boolean): void
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
  visible: {
    type: Boolean,
    default: undefined
  },
  confirmLoading: {
    type: Boolean,
    default: false
  },
  onConfirm: Function as PropType<
      (e: MouseEvent) => (void | Promise<any>)
  >
})

const emit = defineEmits<Emit>()

const myVisible = ref(false)
const loading = ref(false)

const modalName = 'popconfirm-modal-mask'
const modalWarpName = 'popconfirm-modal-warp'
let modalMaskDom: HTMLDivElement = null

const bodyHasScrollbar = () => {
  return document.body.scrollHeight > document.body.clientHeight;
}

const showModal = () => {
  const hasScrollbar = bodyHasScrollbar()
  if (hasScrollbar) {
    updateStyle(document.body, {
      overflow: 'hidden',
      width: 'calc(100% - 17px)'
    })
  }
}

const hideModal = () => {
  // 获取最后一个隐藏
  const modalDivs = document.querySelectorAll<HTMLDivElement>(`.${modalName}.hide`)
  const hideModal = modalDivs.length ? modalDivs[modalDivs.length - 1] : null
  modalMaskDom?.classList?.replace?.('show', 'close')
  if (!hideModal) {
    document.body.removeAttribute('style')
  } else {
    hideModal.classList.replace('hide', 'show')
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
    modalWarps[modalWarps.length - 1]?.insertAdjacentElement('beforebegin', modalDiv)
  } else {
    modalMaskDom.classList.replace('close', 'show')
  }
  showModal()
}

const visibleChange = (e: boolean) => {
  myVisible.value = e
  if (e) {
    setTimeout(() => {
      hideModalAll()
      createModal()
    }, 10)
  } else {
    hideModal()
  }
  emit('update:visible', e)
  emit('visibleChange', e)
}

const cancel = () => {
  visibleChange(false)
  loading.value = false
  emit('cancel')
}

const confirm = async (e) => {
  loading.value = true
  const fn = props.onConfirm?.(e)
  if (isPromise(fn)) {
    (fn as Promise<any>).then(() => {
      visibleChange(false)
    }).finally(() => loading.value = false)
  } else {
    loading.value = false
  }

}

</script>

<style scoped>

</style>