import { withInstall } from "../util/type";
import Steps from 'ant-design-vue/lib/steps/index';
import Transfer from 'ant-design-vue/lib/transfer/index'

export type { TransferProps } from 'ant-design-vue/lib/transfer/index'
export const JTransfer = withInstall(Transfer, 'JTransfer');

export default JTransfer