import { computed, ref } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { default as ResizeObserver } from 'ant-design-vue/lib/vc-resize-observer';
import type { VueNode } from 'ant-design-vue/lib/_util/type';
import type { SiderMenuProps } from '../SiderMenu/SiderMenu';
import {
    defaultRenderLogo,
    defaultRenderLogoAndTitle,
    defaultRenderCollapsedButton,
    siderMenuProps,
} from '../SiderMenu/SiderMenu';
import PropTypes from 'ant-design-vue/lib/_util/vue-types';
import type {
    MenuDataItem,
    ProProps,
    RightContentRender,
    WithFalse,
    Theme,
} from '../typings';
import { defaultSettingProps } from '../defaultSettings';
import type { PropType, FunctionalComponent, ExtractPropTypes } from 'vue';
import { defaultPrefixCls, useRouteContext } from '../RouteContext';
import BaseMenu from '../SiderMenu/BaseMenu';
import { clearMenuItem } from '../util';

export const baseHeaderProps = {
    ...defaultSettingProps,
    prefixCls: PropTypes.string.def('ant-pro'),
    collapsed: PropTypes.looseBool,
    logo: siderMenuProps.logo,
    logoStyle: siderMenuProps.logoStyle,
    headerTheme: {
        type: String as PropType<Theme>,
        default: 'dark',
    },
    menuData: {
        type: Array as PropType<MenuDataItem[]>,
        default: () => [],
    },
    splitMenus: siderMenuProps.splitMenus,
    menuRender: {
        type: [Object, Function] as PropType<
            WithFalse<
                (
                    props: ProProps /* HeaderViewProps */,
                    defaultDom: VueNode,
                ) => VueNode
            >
        >,
        default: () => undefined,
    },
    menuHeaderRender: siderMenuProps.menuHeaderRender,
    menuItemRender: siderMenuProps.menuItemRender,
    subMenuItemRender: siderMenuProps.subMenuItemRender,
    rightContentRender: {
        type: [Object, Function] as PropType<RightContentRender>,
        default: () => undefined,
    },
    collapsedButtonRender: siderMenuProps.collapsedButtonRender,
    matchMenuKeys: siderMenuProps.matchMenuKeys,

    // events
    onMenuHeaderClick: PropTypes.func,
    onCollapse: siderMenuProps.onCollapse,
    onOpenKeys: siderMenuProps.onOpenKeys,
    onSelect: siderMenuProps.onSelect,
};

export type BaseHeaderPropsType = ExtractPropTypes<typeof baseHeaderProps>;

export const topNavHeaderProps = { ...siderMenuProps, ...baseHeaderProps };

export type TopNavHeaderProps = Partial<
    ExtractPropTypes<typeof topNavHeaderProps>
> &
    Partial<SiderMenuProps>;

const RightContent: FunctionalComponent<TopNavHeaderProps> = ({
    rightContentRender,
    ...props
}) => {
    const rightSize = ref<number | string>('auto');

    return (
        <div
            style={{
                minWidth: rightSize.value,
            }}
        >
            <div
                style={{
                    paddingRight: 8,
                }}
            >
                <ResizeObserver
                    onResize={({ width }: { width: number }) => {
                        rightSize.value = width;
                    }}
                >
                    {rightContentRender &&
                    typeof rightContentRender === 'function' ? (
                        <div>
                            {rightContentRender({
                                ...props,
                            })}
                        </div>
                    ) : (
                        rightContentRender
                    )}
                </ResizeObserver>
            </div>
        </div>
    );
};

export const TopNavHeader: FunctionalComponent<TopNavHeaderProps> = (props) => {
    const headerRef = ref();
    const {
        prefixCls: propPrefixCls,
        onMenuHeaderClick,
        onOpenKeys,
        onSelect,
        contentWidth,
        rightContentRender,
        layout,
        menuData,
        mode,
    } = props;
    const context = useRouteContext();
    const prefixCls = `${propPrefixCls || defaultPrefixCls}-top-nav-header`;
    const headerDom = defaultRenderLogoAndTitle(
        { ...props, collapsed: false } as SiderMenuProps,
        // REMARK:: Any time render header title
        // layout === 'mix' ? 'headerTitleRender' : undefined,
        // layout !== 'side' ? 'headerTitleRender' : undefined,
        'headerTitleRender',
    );
    //
    let MenusData = props.layout === 'side' ? [] : menuData;
    if (props.layout === 'mix' && props.splitMenus) {
        const noChildrenMenuData = (menuData || []).map((item) => ({
            ...item,
            children: undefined,
            component: undefined,
        })) as RouteRecordRaw[];
        MenusData = clearMenuItem(noChildrenMenuData);
    }

    const _mode = computed(() =>
        props.layout === 'mix' && props.splitMenus ? 'horizontal' : mode,
    );

    const className = computed(() => {
        return {
            [prefixCls]: true,
            light: props.theme === 'light',
            dark: props.theme === 'dark',
        };
    });

    return (
        <div class={className.value}>
            <div
                ref={headerRef}
                class={`${prefixCls}-main ${
                    contentWidth === 'Fixed' ? 'wide' : ''
                }`}
            >
                {headerDom && (
                    <div
                        class={`${prefixCls}-main-left`}
                        onClick={onMenuHeaderClick}
                    >
                        <div class={`${prefixCls}-logo`} key="logo" id="logo">
                            {headerDom}
                        </div>
                    </div>
                )}
                <div style={{ flex: 1 }} class={`${prefixCls}-menu`}>
                    <BaseMenu
                        prefixCls={propPrefixCls}
                        locale={props.locale || context.locale}
                        theme={props.theme}
                        mode={_mode.value}
                        collapsed={props.collapsed}
                        iconfontUrl={props.iconfontUrl}
                        menuData={MenusData}
                        menuItemRender={props.menuItemRender}
                        subMenuItemRender={props.subMenuItemRender}
                        openKeys={context.openKeys}
                        selectedKeys={context.selectedKeys}
                        class={{
                            'top-nav-menu': props.mode === 'horizontal',
                        }}
                        {...{
                            'onUpdate:openKeys': ($event: string[]) =>
                                onOpenKeys && onOpenKeys($event),
                            'onUpdate:selectedKeys': ($event: string[]) =>
                                onSelect && onSelect($event),
                        }}
                    />
                </div>
                {rightContentRender && (
                    <RightContent
                        rightContentRender={rightContentRender}
                        {...props}
                    />
                )}
            </div>
        </div>
    );
};
