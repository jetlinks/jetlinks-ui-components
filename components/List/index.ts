import { withInstall } from '../util/type';
import List from 'ant-design-vue/lib/list/index';
import ListItem from 'ant-design-vue/lib/list/Item';
import ListItemMeta from 'ant-design-vue/lib/list/ItemMeta';

export type {
    ListProps,
    ListItemProps,
    ListItemMetaProps,
} from 'ant-design-vue/lib/list/index';

export const JList = withInstall(List, 'JList');
export const JListItem = withInstall(ListItem, 'JListItem');
export const JListItemMeta = withInstall(ListItemMeta, 'JListItemMeta');

export default JList;
