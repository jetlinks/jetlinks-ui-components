import type {
    MenuHeaderRender,
    MenuContentRender,
    MenuExtraRender,
    CollapsedButtonRender,
    LogoRender, WithFalse,
} from '../typings';
import type { SiderProps } from './typings'
import {Layout, Menu} from "ant-design-vue";
import BaseMenu, {baseMenuProps} from "./BaseMenu";
import {defaultSettingProps} from "../defaultSettings";
import PropTypes from 'ant-design-vue/es/_util/vue-types';
import type {CSSProperties, ExtractPropTypes, PropType, FunctionalComponent} from "vue";
import type { VueNode } from 'ant-design-vue/es/_util/type'
import IconFont from '../../AIcon'
import {useRouteContext} from "../RouteContext";
import { computed, unref } from "vue";

export type PrivateSiderMenuProps = {
    matchMenuKeys?: string[];
};

export const siderMenuProps = {
    ...defaultSettingProps,
    ...baseMenuProps,
    logo: {
        type: [Object, String, Function] as PropType<LogoRender>,
        default: () => undefined,
    },
    logoStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => undefined,
    },
    siderWidth: PropTypes.number.def(208),
    headerHeight: PropTypes.number.def(48),
    collapsedWidth: PropTypes.number.def(48),
    menuHeaderRender: {
        type: [Function, Object, Boolean] as PropType<MenuHeaderRender>,
        default: () => undefined,
    },
    menuContentRender: {
        type: [Function, Object, Boolean] as PropType<MenuContentRender>,
        default: () => undefined,
    },
    menuExtraRender: {
        type: [Function, Object, Boolean] as PropType<MenuExtraRender>,
        default: () => undefined,
    },
    collapsedButtonRender: {
        type: [Function, Object, Boolean] as PropType<CollapsedButtonRender>,
        default: () => undefined,
    },
    breakpoint: {
        type: [Object, Boolean] as PropType<SiderProps['breakpoint'] | false>,
        default: () => false,
    },
    splitMenus: PropTypes.looseBool,
    fixed: PropTypes.looseBool,
    hide: PropTypes.looseBool,
    matchMenuKeys: {
        type: Array as PropType<string[]>,
        default: () => [],
    },

    // events
    onMenuHeaderClick: PropTypes.func,
    onMenuClick: PropTypes.func,
    onCollapse: {
        type: Function as PropType<(collapsed: boolean) => void>,
    },
    onOpenKeys: {
        type: Function as PropType<(openKeys: WithFalse<string[]>) => void>,
    },
    onSelect: {
        type: Function as PropType<(selectedKeys: WithFalse<string[]>) => void>,
    },
};

const { Sider } = Layout;

export type SiderMenuProps = Partial<ExtractPropTypes<typeof siderMenuProps>>;

export const defaultRenderLogo = (logo?: VueNode, logoStyle?: CSSProperties): VueNode => {
    if (!logo) {
        return null;
    }
    if (typeof logo === 'string') {
        return <img src={logo} alt="logo" style={logoStyle} />;
    }
    if (typeof logo === 'function') {
        // @ts-ignore
        return logo();
    }
    return logo;
};

export const defaultRenderLogoAndTitle = (
    props: SiderMenuProps,
    renderKey: string | undefined = 'menuHeaderRender'
): VueNode | null => {
    const { logo = 'http://demo.jetlinks.cn/static/logo.760eb65c.png', logoStyle, title, layout } = props;
    const renderFunction = (props as Record<string, VueNode>)[renderKey || ''];
    if (layout === 'mix' && renderFunction === false) {
        return null;
    }
    const logoDom = defaultRenderLogo(logo, logoStyle);
    const titleDom = <h1>{title}</h1>;
    if (renderKey === 'menuHeaderRender') {
        return null;
    }
    // call menuHeaderRender
    if (typeof renderFunction === 'function') {
        // @ts-ignore
        return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
    }
    if (Array.isArray(renderFunction)) {
        return <>{renderFunction}</>;
    }

    return (
        <a>
            {logoDom}
            {props.collapsed ? null : titleDom}
        </a>
    );
};

export const defaultRenderCollapsedButton = (collapsed?: boolean): VueNode =>
    collapsed ? <IconFont type={'MenuUnfoldOutlined'} /> : <IconFont type={'MenuFoldOutlined'} />;

const SiderMenu: FunctionalComponent<SiderMenuProps> = (props: SiderMenuProps) => {
    const {
        collapsed,
        siderWidth,
        breakpoint,
        collapsedWidth = 48,
        menuExtraRender = false,
        menuContentRender = false,
        collapsedButtonRender = defaultRenderCollapsedButton,
        theme
    } = props;

    const context = useRouteContext();
    const { getPrefixCls } = context;
    const baseClassName = getPrefixCls('sider');
    const hasSplitMenu = computed(() => props.layout === 'mix' && props.splitMenus);
    const sSideWidth = computed(() => (props.collapsed ? props.collapsedWidth : props.siderWidth));

    const classNames = computed(() => {
        return {
            [baseClassName]: true,
            [`${baseClassName}-fixed`]: context.fixSiderbar,
            [`${baseClassName}-${theme}`]: true, // theme !== 'dark'
            [`${baseClassName}-layout-${props.layout}`]: props.layout
        };
    });
    console.log('context.fixSiderbar', context.fixSiderbar, classNames.value)
    const handleSelect = ($event: string[]) => {
        if (props.onSelect) {
            if (unref(hasSplitMenu)) {
                props.onSelect([context.selectedKeys[0], ...$event]);
                return;
            }
            props.onSelect($event);
        }
    };

    const headerDom = defaultRenderLogoAndTitle(props);
    const extraDom = menuExtraRender && menuExtraRender(props);

    if (hasSplitMenu.value && unref(context.flatMenuData).length === 0) {
        return null;
    }
    const defaultMenuDom = (
        <BaseMenu
            prefixCls={getPrefixCls()}
            locale={props.locale || context.locale}
            theme={theme}
            mode="inline"
            menuData={hasSplitMenu.value ? context.flatMenuData : context.menuData}
            collapsed={props.collapsed}
            openKeys={context.openKeys}
            selectedKeys={context.selectedKeys}
            menuItemRender={props.menuItemRender}
            subMenuItemRender={props.subMenuItemRender}
            iconfontUrl={props.iconfontUrl}
            onClick={props.onMenuClick}
            style={{ width: '100%', }}
            class={`${baseClassName}-menu`}
            {...{
                'onUpdate:openKeys': ($event: string[]) => props.onOpenKeys && props.onOpenKeys($event),
                'onUpdate:selectedKeys': handleSelect,
            }}
        />
    );

    return (
        <>
            {context.fixSiderbar && (
                <div
                    style={{
                        width: `${sSideWidth.value}px`,
                        overflow: 'hidden',
                        flex: `0 0 ${sSideWidth.value}px`,
                        maxWidth: `${sSideWidth.value}px`,
                        minWidth: `${sSideWidth.value}px`,
                        transition: `background-color 0.3s, min-width 0.3s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)`,
                    }}
                />
            )}
            <Sider
                collapsible
                trigger={null}
                collapsed={collapsed}
                breakpoint={breakpoint || undefined}
                onCollapse={(collapse: boolean) => {
                    props.onCollapse?.(collapse);
                }}
                collapsedWidth={collapsedWidth}
                style={{
                    overflow: 'hidden',
                    paddingTop: props.layout === 'mix' ? `${props.headerHeight}px` : undefined,
                }}
                width={siderWidth}
                theme={theme}
                class={classNames.value}
            >
                {headerDom && (
                    <div
                        class={`${baseClassName}-logo`}
                        onClick={props.layout !== 'mix' ? props.onMenuHeaderClick : undefined}
                        id="logo"
                        style={props?.logoStyle}
                    >
                        {headerDom}
                    </div>
                )}
                {extraDom && !props.collapsed && (
                    <div
                        class={{
                            [`${baseClassName}-extra`]: true,
                            [`${baseClassName}-extra-no-logo`]: !headerDom,
                        }}
                    >
                        {extraDom}
                    </div>
                )}
                <div style="flex: 1; overflow: hidden auto;">
                    {(menuContentRender && menuContentRender(props, defaultMenuDom)) || defaultMenuDom}
                </div>
                <div class={`${baseClassName}-links`}>
                    {collapsedButtonRender !== false ? (
                        <Menu
                            class={`${baseClassName}-link-menu`}
                            inlineIndent={16}
                            theme={theme}
                            selectedKeys={[]}
                            openKeys={[]}
                            mode="inline"
                            onClick={() => {
                                if (props.onCollapse) {
                                    props.onCollapse(!props.collapsed);
                                }
                            }}
                        >
                            <Menu.Item key={'collapsed-button'} class={`${baseClassName}-collapsed-button`} title={false}>
                                {collapsedButtonRender && typeof collapsedButtonRender === 'function'
                                    ? collapsedButtonRender(collapsed)
                                    : collapsedButtonRender}
                            </Menu.Item>
                        </Menu>
                    ) : null}
                </div>
            </Sider>
        </>
    )
}

export default SiderMenu