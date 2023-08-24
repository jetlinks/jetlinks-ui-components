import { withInstall } from '../util/type';
import Tree, { TreeNode, DirectoryTree } from 'ant-design-vue/lib/tree';
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

<<<<<<< HEAD
export { DirectoryTree, TreeNode } from 'ant-design-vue/lib/tree';

=======
>>>>>>> ef683bd25810456deb0316f7d622f9320a07db48
Tree.name = 'JTree';
TreeNode.name = 'JTreeNode'
DirectoryTree.name = 'JDirectoryTree'

export { TreeNode, DirectoryTree }

export const JLTree = withInstall(Tree, 'JTree');

export default JLTree;
