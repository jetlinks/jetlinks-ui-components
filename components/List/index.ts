import type { App } from 'vue';
import List from 'ant-design-vue/lib/list/index';
import ListItem from 'ant-design-vue/lib/list/Item';
import ListItemMeta from 'ant-design-vue/lib/list/ItemMeta';

export type {
    ListProps,
    ListItemProps,
    ListItemMetaProps,
} from 'ant-design-vue/lib/list/index';

List.name = 'JList';
ListItem.name = 'JListItem';
ListItemMeta.name = 'JListItemMeta';

List.install = function (app: App) {
    app.component(List.name, List);
    app.component(ListItem.name, ListItem);
    app.component(ListItemMeta.name, ListItemMeta);
    return app;
};

export default List;

export { ListItem, ListItemMeta };
