import { withInstall } from '../../util/type';
import { TabPaneProps } from 'ant-design-vue'
import type { ExtractPropTypes, FunctionalComponent, PropType, VNodeChild } from 'vue'
import { defineComponent, unref, toRefs, computed } from 'vue'
import { pageHeaderProps } from 'ant-design-vue/es/page-header';
import type { DefaultPropRender, PageHeaderRender } from '../typings'
import type { AffixProps, TabBarExtraContent } from './typings'
import { useRouteContext } from '../RouteContext'
import { getSlotVNode } from '../util'
import { Affix, Spin, PageHeader, Tabs } from 'ant-design-vue';
import './index.less'
import {VueNode} from "ant-design-vue/es/_util/type";

export const pageHeaderTabConfig = {
    /**
     * @name tabs 的列表
     */
    tabList: {
        type: [Object, Function, Array] as PropType<(Omit<TabPaneProps, 'id'> & { key?: string })[]>,
        default: () => undefined,
    },
    /**
     * @name 当前选中 tab 的 key
     */
    tabActiveKey: String, //PropTypes.string,
    /**
     * @name tab 上多余的区域
     */
    tabBarExtraContent: {
        type: [Object, Function] as PropType<TabBarExtraContent>,
        default: () => undefined,
    },
    /**
     * @name tabs 的其他配置
     */
    tabProps: {
        type: Object, //as PropType<TabsProps>,
        default: () => undefined,
    },
    /**
     * @name 固定 PageHeader 到页面顶部
     */
    fixedHeader: Boolean, //PropTypes.looseBool,
    // events
    onTabChange: Function, //PropTypes.func,
};
export type PageHeaderTabConfig = Partial<ExtractPropTypes<typeof pageHeaderTabConfig>>;


export const pageContainerProps = {
    ...pageHeaderTabConfig,
    ...pageHeaderProps,
    prefixCls: {
        type: String,
        default: 'ant-pro',
    }, //PropTypes.string.def('ant-pro'),
    title: {
        type: [Object, String, Boolean, Function] as PropType<DefaultPropRender>,
        default: () => null,
    },
    subTitle: {
        type: [Object, String, Boolean, Function] as PropType<DefaultPropRender>,
        default: () => null,
    },
    content: {
        type: [Object, String, Boolean, Function] as PropType<DefaultPropRender>,
        default: () => null,
    },
    extra: {
        type: [Object, String, Boolean, Function] as PropType<DefaultPropRender>,
        default: () => null,
    },
    extraContent: {
        type: [Object, String, Boolean, Function] as PropType<DefaultPropRender>,
        default: () => null,
    },
    header: {
        type: [Object, String, Boolean, Function] as PropType<DefaultPropRender>,
        default: () => null,
    },
    pageHeaderRender: {
        type: [Object, Function, Boolean] as PropType<PageHeaderRender>,
        default: () => undefined,
    },
    affixProps: {
        type: [Object, Function] as PropType<AffixProps>,
    },
    ghost: {
        type: Boolean,
        default: () => false,
    }, //PropTypes.looseBool,
    loading: {
        type: Boolean,
        default: () => undefined,
    }, //PropTypes.looseBool,
    childrenFullHeight: {
        type: Boolean,
        default: () => true,
    }
};

export type PageContainerProps = Partial<ExtractPropTypes<typeof pageContainerProps>>;

const renderFooter = (
    props: Omit< PageContainerProps, 'title' >
): VNodeChild | JSX.Element => {
    const { tabList, tabActiveKey, onTabChange, tabBarExtraContent, tabProps } = props;
    if (tabList && tabList.length) {
        return (
            <Tabs
                class={`page-container-tabs`}
                activeKey={tabActiveKey}
                onChange={(key: string | number) => {
                    if (onTabChange) {
                        onTabChange(key);
                    }
                }}
                tabBarExtraContent={tabBarExtraContent}
                {...tabProps}
            >
                {tabList.map((item) => (
                    <Tabs.TabPane {...item} tab={item.tab} key={item.key} />
                ))}
            </Tabs>
        );
    }
    return null;
}


const renderPageHeader = (
    content: VueNode,
    extraContent: VueNode,
    prefixedClassName: string
): VNodeChild | JSX.Element | null => {
    if (!content && !extraContent) {
        return null;
    }
    return (
        <div class={`${prefixedClassName}-detail`}>
            <div class={`${prefixedClassName}-main`}>
                <div class={`${prefixedClassName}-row`}>
                    {content && (
                        <div class={`${prefixedClassName}-content`}>{
                            // @ts-ignore
                            (typeof content === 'function' && content()) || content
                        }</div>
                    )}
                    {extraContent && (
                        <div class={`${prefixedClassName}-extraContent`}>
                            {
                                // @ts-ignore
                                (typeof extraContent === 'function' && extraContent()) || extraContent
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProPageHeader: FunctionalComponent<PageContainerProps & { prefixedClassName: string }> = (props) => {
    const {
        title,
        tabList,
        tabActiveKey,
        content,
        pageHeaderRender,
        header,
        extraContent,
        prefixedClassName,
        prefixCls,
        fixedHeader: _,
        ...restProps
    } = props;

    const value = useRouteContext()

    if (pageHeaderRender === false) {
        return null;
    }

    if (pageHeaderRender) {
        return pageHeaderRender({ ...props });
    }
    let pageHeaderTitle = title;
    if (!title && title !== false) {
        pageHeaderTitle = value.title;
    }

    const unrefBreadcrumb = unref(value.breadcrumb || {});
    const breadcrumb = (props as any).breadcrumb || {
        ...unrefBreadcrumb,
        routes: unrefBreadcrumb.routes,
        itemRender: unrefBreadcrumb.itemRender,
    };

    return (
        <div class={`${prefixedClassName}-wrap`}>
            <PageHeader
                {...restProps}
                // {...value}
                title={pageHeaderTitle}
                breadcrumb={breadcrumb}
                footer={renderFooter({
                    ...restProps,
                    tabList,
                    tabActiveKey
                })}
                prefixCls={prefixCls}
            >
                {header || renderPageHeader(content, extraContent, prefixedClassName)}
            </PageHeader>
        </div>
    );
}

const PageContainer = defineComponent({
    name: 'JPageContainer',
    inheritAttrs: false,
    props: pageContainerProps,
    setup(props, { slots }) {
        const { loading, affixProps, ghost, childrenFullHeight } = toRefs(props);

        const value = useRouteContext();
        const { getPrefixCls } = value;
        const prefixCls = props.prefixCls || getPrefixCls();

        const prefixedClassName = computed(() => `${prefixCls}-page-container`);
        const classNames = computed(() => {
            return {
                [prefixedClassName.value]: true,
                [`${prefixCls}-page-container-ghost`]: ghost.value,
            };
        });


        const headerDom = computed(() => {
            // const tags = getSlotVNode<DefaultPropRender>(slots, props, 'tags');
            const headerContent = getSlotVNode<DefaultPropRender>(slots, props, 'content');
            const extra = getSlotVNode<DefaultPropRender>(slots, props, 'extra');
            const extraContent = getSlotVNode<DefaultPropRender>(slots, props, 'extraContent');
            const subTitle = getSlotVNode<DefaultPropRender>(slots, props, 'subTitle');
            const title = getSlotVNode<DefaultPropRender>(slots, props, 'title');

            // @ts-ignore
            return (
                <ProPageHeader
                    {...props}
                    prefixCls={undefined}
                    prefixedClassName={prefixedClassName.value}
                    ghost={ghost.value}
                    title={title}
                    subTitle={subTitle}
                    content={headerContent}
                    // tags={tags}
                    extra={extra}
                    extraContent={extraContent}
                />
            );
        })

        return () => {
            const { fixedHeader } = props;
            return (
                <div class={classNames.value}>
                    {fixedHeader && headerDom.value ? (
                        <Affix {...affixProps.value} offsetTop={value.hasHeader && value.fixedHeader ? value.headerHeight : 0}>
                            {headerDom.value}
                        </Affix>
                    ) : (
                        headerDom.value
                    )}
                    <div class={`${prefixedClassName.value}-grid-content`}>
                        {loading.value ? (
                            <Spin />
                        ) : slots.default ? (
                            <div>
                                <div class={`${prefixedClassName.value}-children-content ${childrenFullHeight.value ? 'children-full-height' : ''}`}>{slots.default()}</div>
                                {value.hasFooterToolbar && (
                                    <div
                                        style={{
                                            height: 48,
                                            marginTop: 24,
                                        }}
                                    />
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            );
        };
    }
})

export default withInstall(PageContainer, 'JPageContainer')