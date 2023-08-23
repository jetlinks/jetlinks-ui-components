import { withInstall } from '../util/type';
import Tree from 'ant-design-vue/lib/tree';
export { treeFilter } from '../util/filterNodeMethod';

export type {
    EventDataNode,
    DataNode,
    TreeProps,
    AntTreeNodeMouseEvent,
    AntTreeNodeExpandedEvent,
    AntTreeNodeCheckedEvent,
    AntTreeNodeSelectedEvent,
    AntTreeNodeDragEnterEvent,
    AntTreeNodeDropEvent,
    AntdTreeNodeAttribute,
    TreeDataItem,
    DirectoryTreeExpandAction,
    DirectoryTreeProps
} from 'ant-design-vue/lib/tree';

export { DirectoryTree, TreeNode } from 'ant-design-vue/lib/tree';

Tree.name = 'JTree';
export const JLTree = withInstall(Tree, 'JTree');

export default JLTree;
