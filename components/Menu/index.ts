import type { App } from 'vue';
import Menu, {
    MenuItem,
    MenuItemGroup,
    SubMenu,
    MenuDivider,
} from 'ant-design-vue/lib/menu/index';

export type {
    MenuProps,
    MenuTheme,
    SubMenuProps,
    MenuItemProps,
    MenuMode,
    MenuDividerProps,
} from 'ant-design-vue/lib/menu/index';

Menu.name = 'JMenu';
MenuItem.name = 'JMenuItem';
MenuItemGroup.name = 'JMenuItemGroup';
SubMenu.name = 'JSubMenu';
MenuDivider.name = 'JMenuDivider';

Menu.install = function (app: App) {
    app.component(Menu.name, Menu);
    app.component(MenuItem.name, MenuItem);
    app.component(MenuItemGroup.name, MenuItemGroup);
    app.component(SubMenu.name, SubMenu);
    app.component(MenuDivider.name, MenuDivider);
    return app;
};

export default Menu;

export { MenuItem, MenuItemGroup, SubMenu, MenuDivider };
