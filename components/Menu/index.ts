import { withInstall } from '../util/type';
import Menu, {
    MenuItem,
    MenuItemGroup,
    SubMenu,
    MenuDivider,
} from 'ant-design-vue/lib/menu/index';

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
