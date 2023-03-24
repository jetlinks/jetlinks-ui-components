import type {
    BreadcrumbRender,
    FormatMessage,
    HeaderContentRender,
    WithFalse,
    HeaderRender,
    RightContentRender,
    CollapsedButtonRender,
    MenuExtraRender,
    SubMenuItemRender,
    MenuContentRender,
    MenuItemRender,
    MenuHeaderRender,
} from '../typings';
import SiderMenu, { siderMenuProps } from '../SiderMenu/SiderMenu';
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import {
    computed,
    defineComponent,
    provide,
    reactive,
    watchEffect,
    toRefs,
} from 'vue';
import { defaultSettingProps } from '../defaultSettings';
import { baseHeaderProps } from '../TopHeader';
import Header, { headerViewProps } from './Header';
import type { VueNode } from 'ant-design-vue/lib/_util/type';
import useConfigInject from 'ant-design-vue/lib/_util/hooks/useConfigInject';
import type { BreadcrumbProps, RouteContextProps } from '../RouteContext';
import { cloneDeep, pick } from 'lodash-es';
import { defaultRouteContext, routeContextInjectKey } from '../RouteContext';
import { getMenuFirstChildren, getSlot } from '../util';
import { Layout, LayoutContent } from '../../components';

export const basicLayoutProps = {
    ...defaultSettingProps,
    ...siderMenuProps,
    ...baseHeaderProps,
    ...headerViewProps,

    pure: Boolean,
    loading: Boolean,
    locale: {
        type: [Function, Boolean] as PropType<WithFalse<FormatMessage>>,
        default() {
            return (s: string) => s;
        },
    },
    /**
     * 是否禁用移动端模式，有的管理系统不需要移动端模式，此属性设置为true即可
     */
    disableMobile: {
        type: Boolean,
        required: false,
    },
    isChildrenLayout: {
        type: Boolean,
        required: false,
    },
    /**
     * 兼用 content 的 margin
     */
    disableContentMargin: {
        type: Boolean,
        required: false,
    },
    colSize: {
        type: Number,
        required: false,
    },
    contentStyle: {
        type: [String, Object] as PropType<CSSProperties>,
        default: () => {
            return null;
        },
    },
    breadcrumb: {
        type: [Object, Function] as PropType<BreadcrumbProps>,
        default: () => null,
    },
    collapsedButtonRender: {
        type: [Function, Object, Boolean] as PropType<
            WithFalse<(collapsed?: boolean) => VueNode>
        >,
        default: () => undefined,
    },
    breadcrumbRender: {
        type: [Object, Function, Boolean] as PropType<BreadcrumbRender>,
        default() {
            return null;
        },
    },
    headerContentRender: {
        type: [Function, Object, Boolean] as PropType<HeaderContentRender>,
        default: () => undefined,
    },
    headerRender: {
        type: [Object, Function, Boolean] as PropType<HeaderRender>,
        default: () => undefined,
    },
};

export type BasicLayoutProps = Partial<
    ExtractPropTypes<typeof basicLayoutProps>
>;

export default defineComponent({
    name: 'JProLayout',
    inheritAttrs: false,
    props: basicLayoutProps,
    emits: [
        'update:collapsed',
        'update:open-keys',
        'update:selected-keys',
        'collapse',
        'openKeys',
        'select',
        'menuHeaderClick',
        'menuClick',
        'backClick',
    ],
    setup(props, { emit, attrs, slots }) {
        const { prefixCls } = useConfigInject('layout', {});
        const isTop = computed(() => props.layout === 'top');
        const hasSide = computed(
            () => props.layout === 'mix' || props.layout === 'side' || false,
        );
        const hasSplitMenu = computed(
            () => props.layout === 'mix' && props.splitMenus,
        );
        const hasFlatMenu = computed(() => {
            return hasSide.value && hasSplitMenu.value;
        });
        const siderWidth = computed(() =>
            props.collapsed ? props.collapsedWidth : props.siderWidth,
        );

        const onCollapse = (collapsed: boolean) => {
            emit('update:collapsed', collapsed);
            emit('collapse', collapsed);
        };
        const onOpenKeys = (openKeys: string[] | false) => {
            emit('update:open-keys', openKeys);
            emit('openKeys', openKeys);
        };
        const onSelect = (selectedKeys: string[] | false) => {
            emit('update:selected-keys', selectedKeys);
            emit('select', selectedKeys);
        };
        const onMenuHeaderClick = (e: MouseEvent) => {
            emit('menuHeaderClick', e);
        };
        const onMenuClick = (args: any) => {
            emit('menuClick', args);
        };
        const onBack = (args: any) => {
            emit('backClick', args);
        };

        const baseClassName = computed(() => `${props.prefixCls}-basicLayout`);

        const className = computed(() => {
            return {
                [baseClassName.value]: true,
                [`${baseClassName.value}-top-menu`]: isTop.value,
                [`${baseClassName.value}-is-children`]: props.isChildrenLayout,
                [`${baseClassName.value}-fix-siderbar`]: props.fixSiderbar,
                [`${baseClassName.value}-${props.layout}`]: props.layout,
            };
        });

        const genLayoutStyle = reactive<CSSProperties>({
            position: 'relative',
        });

        watchEffect(() => {
            if (
                props.isChildrenLayout ||
                (props.contentStyle && props.contentStyle.minHeight)
            ) {
                genLayoutStyle.minHeight = 0;
            }
        });

        const headerRender = (
            p: BasicLayoutProps & {
                hasSiderMenu: boolean;
                headerRender: HeaderRender;
                rightContentRender: RightContentRender;
            },
            matchMenuKeys?: string[],
        ): VueNode | null => {
            if (p.headerRender === false || p.pure) {
                return null;
            }
            return <Header {...p} matchMenuKeys={matchMenuKeys || []} />;
        };

        const breadcrumb = computed<BreadcrumbProps>(() => ({
            ...props.breadcrumb,
            itemRender: getSlot<BreadcrumbRender>(
                slots,
                props,
                'breadcrumbRender',
            ) as BreadcrumbRender,
        }));

        const flatMenuData = computed(
            () =>
                (hasFlatMenu.value &&
                    props.selectedKeys &&
                    getMenuFirstChildren(
                        props.menuData,
                        props.selectedKeys[0],
                    )) ||
                [],
        );

        const routeContext = reactive<RouteContextProps>({
            ...defaultRouteContext,
            ...(pick(toRefs(props), [
                'pure',
                'locale',
                'menuData',
                'openKeys',
                'selectedKeys',
                'contentWidth',
                'disableMobile',
                'fixSiderbar',
                'fixedHeader',
                'headerHeight',
            ]) as any),
            siderWidth,
            breadcrumb,
            flatMenuData,
            hasSide,
            back: onBack,
            hasHeader: true,
            flatMenu: hasFlatMenu,
        });
        provide(routeContextInjectKey, routeContext);

        return () => {
            const {
                pure,
                onCollapse: propsOnCollapse,
                onOpenKeys: propsOnOpenKeys,
                onSelect: propsOnSelect,
                onMenuClick: propsOnMenuClick,
                ...restProps
            } = props;

            const collapsedButtonRender = getSlot<CollapsedButtonRender>(
                slots,
                props,
                'collapsedButtonRender',
            );
            const headerContentRender = getSlot<HeaderContentRender>(
                slots,
                props,
                'headerContentRender',
            );
            const rightContentRender = getSlot<RightContentRender>(
                slots,
                props,
                'rightContentRender',
            );
            const customHeaderRender = getSlot<HeaderRender>(
                slots,
                props,
                'headerRender',
            );

            // menu
            const menuHeaderRender = getSlot<MenuHeaderRender>(
                slots,
                props,
                'menuHeaderRender',
            );
            const menuExtraRender = getSlot<MenuExtraRender>(
                slots,
                props,
                'menuExtraRender',
            );
            const menuContentRender = getSlot<MenuContentRender>(
                slots,
                props,
                'menuContentRender',
            );
            const menuItemRender = getSlot<MenuItemRender>(
                slots,
                props,
                'menuItemRender',
            );
            const subMenuItemRender = getSlot<SubMenuItemRender>(
                slots,
                props,
                'subMenuItemRender',
            );

            const headerDom = computed(() =>
                headerRender(
                    {
                        ...props,
                        menuItemRender,
                        subMenuItemRender,
                        hasSiderMenu: !isTop.value,
                        menuData: props.menuData,
                        onCollapse,
                        onOpenKeys,
                        onSelect,
                        onMenuHeaderClick,
                        rightContentRender,
                        collapsedButtonRender,
                        headerTitleRender: menuHeaderRender,
                        menuExtraRender,
                        menuContentRender,
                        headerContentRender,
                        headerRender: customHeaderRender,
                        theme: (props.theme || 'dark')
                            .toLocaleLowerCase()
                            .includes('dark')
                            ? 'dark'
                            : 'light',
                    },
                    props.matchMenuKeys,
                ),
            );
            routeContext.hasHeader = !!headerDom.value;

            const contentClassName = computed(() => {
                return {
                    [`${baseClassName.value}-content`]: true,
                    [`${baseClassName.value}-has-header`]: headerDom,
                    [`${baseClassName.value}-content-disable-margin`]:
                        props.disableContentMargin,
                };
            });

            return (
                <>
                    {pure ? (
                        slots.default?.()
                    ) : (
                        <div class={className.value}>
                            <Layout
                                style={{
                                    minHeight: '100vh',
                                    ...((attrs.style as CSSProperties) || {}),
                                }}
                            >
                                {headerDom.value}
                                <Layout
                                    style={genLayoutStyle}
                                    class={prefixCls.value}
                                >
                                    {!isTop.value && (
                                        <SiderMenu
                                            {...restProps}
                                            menuHeaderRender={menuHeaderRender}
                                            menuExtraRender={menuExtraRender}
                                            menuContentRender={
                                                menuContentRender
                                            }
                                            menuItemRender={menuItemRender}
                                            subMenuItemRender={
                                                subMenuItemRender
                                            }
                                            collapsedButtonRender={
                                                collapsedButtonRender
                                            }
                                            onCollapse={onCollapse}
                                            onSelect={onSelect}
                                            onOpenKeys={onOpenKeys}
                                            onMenuClick={onMenuClick}
                                        />
                                    )}
                                    <Layout>
                                        <LayoutContent>
                                            {slots.default?.()}
                                        </LayoutContent>
                                    </Layout>
                                </Layout>
                            </Layout>
                        </div>
                    )}
                </>
            );
        };
    },
});
