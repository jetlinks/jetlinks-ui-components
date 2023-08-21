import { withInstall } from '../util/type';
import Transfer from 'ant-design-vue/lib/transfer/index';

export type { 
    TransferProps,
    TransferListProps,
    TransferOperationProps,
    TransferSearchProps,
    TransferDirection,
    RenderResult,
    TransferItem,
    KeyWise,
    KeyWiseTransferItem,
    ListStyle,
    SelectAllLabel,
    TransferLocale
} from 'ant-design-vue/lib/transfer/index';

export { transferProps } from 'ant-design-vue/lib/transfer/index';

export const JTransfer = withInstall(Transfer, 'JTransfer');

export default JTransfer;
