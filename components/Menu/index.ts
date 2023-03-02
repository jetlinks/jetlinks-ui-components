import { withInstall } from '../util/type';
import Menu from 'ant-design-vue/lib/menu/src/Menu';
import MenuItem from 'ant-design-vue/lib/menu/src/MenuItem';
import MenuItemGroup from 'ant-design-vue/lib/menu/src/ItemGroup';
import SubMenu from 'ant-design-vue/lib/menu/src/SubMenu';
import MenuDivider from 'ant-design-vue/lib/menu/src/Divider';

export const JMenu = withInstall(Menu, 'JMenu');
export const JMenuItem = withInstall(MenuItem, 'JMenuItem');
export const JMenuItemGroup = withInstall(MenuItemGroup, 'JMenuItemGroup');
export const JSubMenu = withInstall(SubMenu, 'JSubMenu');
export const JMenuDivider = withInstall(MenuDivider, 'JMenuDivider');

export type {
    MenuProps,
    MenuTheme,
    SubMenuProps,
    MenuItemProps,
    MenuMode,
    MenuDividerProps,
} from 'ant-design-vue/es/menu/index';

export default JMenu;
