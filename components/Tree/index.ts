import { withInstall } from '../util/type';
import Tree from 'ant-design-vue/lib/tree';
export { treeFilter } from '../util/filterNodeMethod';

Tree.name = 'JTree';
export const JLTree = withInstall(Tree, 'JTree');

export default JLTree;
