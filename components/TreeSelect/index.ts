import { withInstall } from '../util/type';
import TreeSelect, {
    TreeSelectNode,
} from 'ant-design-vue/lib/tree-select/index';

export type { TreeSelectProps } from 'ant-design-vue/lib/tree-select/index';

export const JTreeSelect = withInstall(TreeSelect, 'JTreeSelect');
export const JTreeSelectNode = withInstall(TreeSelectNode, 'JTreeSelectNode');

export default JTreeSelect;
