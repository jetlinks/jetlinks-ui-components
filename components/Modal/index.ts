import { withInstall } from '../util/type';
import JModal from './modal.vue';
import { Modal } from 'ant-design-vue';

JModal.info = Modal.info;
JModal.success = Modal.success;
JModal.error = Modal.error;
JModal.warning = Modal.warning;
JModal.confirm = Modal.confirm;
JModal.destroyAll = Modal.destroyAll;
export const JLModal = withInstall(JModal, 'JModal');

export default JLModal;
