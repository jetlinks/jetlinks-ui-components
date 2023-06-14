import type { App } from 'vue';
import PopconfirmModal from './PopconfirmModal.vue'

PopconfirmModal.install = function (app: App) {
    app.component('JPopconfirmModal', PopconfirmModal)
}
export default PopconfirmModal