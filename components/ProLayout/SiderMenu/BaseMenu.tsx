import { defaultSettingProps } from '../defaultSettings';
import {
    defineComponent,
    getCurrentInstance,
    isVNode,
    resolveComponent,
    watchEffect,
    withCtx,
} from 'vue';
import type {
    ExtractPropTypes,
    FunctionalComponent,
    PropType,
    VNodeChild,
    ComponentInternalInstance,
    ConcreteComponent,
    VNode,
} from 'vue';
import type {
    SelectEventHandler,
    MenuClickEventHandler,
    SelectInfo,
    MenuInfo,
} from 'ant-design-vue/lib/menu/src/interface';
import type {
    FormatMessage,
    MenuDataItem,
    WithFalse,
    Theme,
    MenuItemRender,
    SubMenuItemRender,
} from '../typings';
import type { MenuMode } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/lib/_util/type';
import { defaultPrefixCls } from '../RouteContext';
import IconFont from '../../AIcon';
import { isImg, isUrl } from '../../util/regular';
import Menu from '../../Menu';
import { createFromIconfontCN } from '@ant-design/icons-vue';

export const baseMenuProps = {
    ...defaultSettingProps,
    prefixCls: {
        type: String as PropType<string | undefined>,
        default: () => defaultPrefixCls,
    },
    locale: {
        type: [Function, Boolean] as PropType<WithFalse<FormatMessage>>,
        default: (t: string): string => t,
    },
    menuData: {
        type: Array as PropType<MenuDataItem[]>,
        default: () => [],
    },
    mode: {
        type: String as PropType<MenuMode>,
        default: 'inline',
    },
    theme: {
        type: String as PropType<Theme>,
        default: 'dark',
    },
    collapsed: {
        type: Boolean as PropType<boolean | undefined>,
        default: () => false,
    },
    openKeys: {
        type: Array as PropType<WithFalse<string[]>>,
        default: () => undefined,
    },
    selectedKeys: {
        type: Array as PropType<WithFalse<string[]>>,
        default: () => undefined,
    },
    menuProps: {
        type: Object as PropType<Record<string, any>>,
        default: () => null,
    },
    menuItemRender: {
        type: [Object, Function, Boolean] as PropType<MenuItemRender>,
        default: () => undefined,
    },
    subMenuItemRender: {
        type: [Object, Function, Boolean] as PropType<SubMenuItemRender>,
        default: () => undefined,
    },

    onClick: [Function, Object] as PropType<(...args: any) => void>,
};

export type BaseMenuProps = ExtractPropTypes<typeof baseMenuProps>;

type IconFontProps = {
    icon: VNodeChild | string;
    iconUrl: string;
    prefixCls?: string;
};

let AntdIconFont = createFromIconfontCN({
    scriptUrl: '',
});

const LazyIcon: FunctionalComponent<IconFontProps> = (props) => {
    const { icon, iconUrl, prefixCls = defaultPrefixCls } = props;
    if (!icon) return null;
    if (isVNode(icon)) {
        return icon;
    }
    if (typeof icon === 'string' && icon !== '') {
        if (isUrl(icon) || isImg(icon)) {
            return (
                <img
                    src={icon}
                    alt="icon"
                    class={`${prefixCls}-sider-menu-icon`}
                />
            );
        }
        return iconUrl ? (
            <AntdIconFont type={icon} />
        ) : (
            <IconFont type={icon} />
        );
    }
};

class MenuUtil {
    props: BaseMenuProps;

    ctx: ComponentInternalInstance | null;

    RouterLink: ConcreteComponent;

    constructor(props: BaseMenuProps, ctx: ComponentInternalInstance | null) {
        this.props = props;
        this.ctx = ctx;
        this.RouterLink = resolveComponent('router-link') as ConcreteComponent;
    }

    getNavMenuItems = (menusData: MenuDataItem[] = []) => {
        return menusData
            .map((item) => this.getSubMenuOrItem(item))
            .filter((item) => item);
    };

    getSubMenuOrItem = (item: MenuDataItem): VNode => {
        if (
            Array.isArray(item.children) &&
            item.children.length > 0 &&
            !item?.meta?.hideInMenu &&
            !item?.meta?.hideChildrenInMenu
        ) {
            if (this.props.subMenuItemRender) {
                const subMenuItemRender = withCtx(
                    this.props.subMenuItemRender,
                    this.ctx,
                );
                return subMenuItemRender({
                    item,
                    children: this.getNavMenuItems(item.children),
                }) as VNode;
            }
            const { prefixCls, locale } = this.props;
            const menuTitle =
                (locale && locale(item.meta?.title)) || item.meta?.title;
            const defaultTitle = item.meta?.icon ? (
                <span class={`${prefixCls}-menu-item`}>
                    <span class={`${prefixCls}-menu-item-title`}>
                        {menuTitle}
                    </span>
                </span>
            ) : (
                <span class={`${prefixCls}-menu-item`}>{menuTitle}</span>
            );

            return (
                <Menu.SubMenu
                    title={defaultTitle}
                    key={item.path}
                    popupClassName={`${prefixCls}-menu-popup`}
                    icon={
                        <LazyIcon
                            iconUrl={this.props.iconfontUrl}
                            icon={item.meta?.icon}
                        />
                    }
                >
                    {this.getNavMenuItems(item.children)}
                </Menu.SubMenu>
            );
        }

        const menuItemRender =
            this.props.menuItemRender &&
            withCtx(this.props.menuItemRender, this.ctx);

        const [title, icon] = this.getMenuItem(item);

        return (
            (menuItemRender &&
                (menuItemRender({ item, title, icon }) as VNode)) || (
                <Menu.Item
                    disabled={item.meta?.disabled}
                    danger={item.meta?.danger}
                    key={item.path}
                >
                    {title}
                </Menu.Item>
            )
        );
    };

    getMenuItem = (item: MenuDataItem) => {
        const meta = { ...item.meta };
        const target = (meta.target || null) as string | null;
        const hasUrl = isUrl(item.path);
        const CustomTag: any = (target && 'a') || this.RouterLink;
        const props = { to: { name: item.name, ...item.meta } };
        const attrs =
            hasUrl || target ? { ...item.meta, href: item.path, target } : {};

        const { prefixCls, locale } = this.props;
        const icon =
            (item.meta?.icon && (
                <LazyIcon
                    iconUrl={this.props.iconfontUrl}
                    icon={item.meta?.icon}
                />
            )) ||
            undefined;
        const menuTitle =
            (locale && locale(item.meta?.title)) || item.meta?.title;

        const defaultTitle = item.meta?.icon ? (
            <CustomTag {...attrs} {...props} class={`${prefixCls}-menu-item`}>
                {icon}
                <span class={`${prefixCls}-menu-item-title`}>{menuTitle}</span>
            </CustomTag>
        ) : (
            <CustomTag {...attrs} {...props} class={`${prefixCls}-menu-item`}>
                <span>{menuTitle}</span>
            </CustomTag>
        );

        return [defaultTitle, icon];
    };
}

export default defineComponent({
    name: 'BaseMenu',
    props: baseMenuProps,
    emits: ['update:openKeys', 'update:selectedKeys', 'click'],
    setup(props, { emit }) {
        const ctx = getCurrentInstance();
        const menuUtil = new MenuUtil(props, ctx);

        watchEffect(() => {
            if (props.iconfontUrl) {
                AntdIconFont = createFromIconfontCN({
                    scriptUrl: props.iconfontUrl,
                });
            }
        });

        const handleOpenChange = (openKeys: Key[]): void => {
            emit('update:openKeys', openKeys);
        };
        const handleSelect: SelectEventHandler = (args: SelectInfo): void => {
            // ignore https? link handle selectkeys
            if (isUrl(args.key as string)) {
                return;
            }
            emit('update:selectedKeys', args.selectedKeys);
        };
        const handleClick: MenuClickEventHandler = (args: MenuInfo) => {
            emit('click', args);
        };

        return () => (
            <Menu
                key="Menu"
                inlineIndent={16}
                mode={props.mode}
                theme={props.theme}
                openKeys={props.openKeys === false ? [] : props.openKeys}
                selectedKeys={props.selectedKeys || []}
                onOpenChange={handleOpenChange}
                onSelect={handleSelect}
                onClick={handleClick}
                {...props.menuProps}
            >
                {menuUtil.getNavMenuItems(props.menuData)}
            </Menu>
        );
    },
});
