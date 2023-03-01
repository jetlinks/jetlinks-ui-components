import { baseHeaderProps, TopNavHeader } from '../TopHeader';
import type { BaseHeaderPropsType } from '../TopHeader';
import PropTypes from 'ant-design-vue/es/_util/vue-types';
import type { ExtractPropTypes, PropType } from 'vue';
import type { WithFalse } from '../typings';
import type { VueNode } from 'ant-design-vue/es/_util/type';
import { defineComponent, computed, toRefs } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { useRouteContext } from '../RouteContext';
import { Layout } from 'ant-design-vue';
import { clearMenuItem } from '../util';

export const headerViewProps = {
    ...baseHeaderProps,
    headerRender: {
        type: [Object, Function, Boolean] as PropType<
            WithFalse<(props: any, defaultDom: VueNode) => VueNode>
        >,
        default: () => undefined,
    },
    headerTitleRender: {
        type: [Object, Function, Boolean] as PropType<
            WithFalse<(props: any, defaultDom: VueNode) => VueNode>
        >,
        default: () => undefined,
    },
    headerContentRender: {
        type: [Object, Function, Boolean] as PropType<
            WithFalse<(props: any) => VueNode>
        >,
        default: () => undefined,
    },
    hasSiderMenu: PropTypes.looseBool,
    siderWidth: PropTypes.number.def(208),
};

export type HeaderViewProps = Partial<
    ExtractPropTypes<typeof headerViewProps> & BaseHeaderPropsType
>;

export default defineComponent({
    name: 'HeaderView',
    inheritAttrs: false,
    props: headerViewProps,
    setup(props) {
        const {
            prefixCls,
            fixedHeader,
            hasSiderMenu,
            headerHeight,
            layout,
            theme,
            onCollapse,
        } = toRefs(props);
        const context = useRouteContext();
        const needFixedHeader = computed(
            () =>
                fixedHeader.value ||
                context.fixedHeader ||
                layout.value === 'mix',
        );
        const isMix = computed(() => layout.value === 'mix');
        const isTop = computed(() => layout.value === 'top');
        const needSettingWidth = computed(
            () => needFixedHeader.value && hasSiderMenu.value && !isTop.value,
        );
        const clearMenuData = computed(
            () =>
                (context.menuData &&
                    clearMenuItem(context.menuData as RouteRecordRaw[])) ||
                [],
        );
        const className = computed(() => {
            return {
                [`${prefixCls.value}-fixed-header`]: needFixedHeader.value,
                [`${prefixCls.value}-top-menu`]: isTop.value,
            };
        });

        const renderContent = () => {
            console.log('renderContent', clearMenuData.value);
            const defaultDom = (
                <TopNavHeader
                    theme={theme.value}
                    mode="horizontal"
                    {...props}
                    onCollapse={onCollapse.value}
                    menuData={clearMenuData.value}
                />
            );
            if (props.headerRender) {
                return props.headerRender(props, defaultDom);
            }
            return defaultDom;
        };

        const width = computed(() => {
            return layout.value !== 'mix' && needSettingWidth.value
                ? `calc(100% - ${props.collapsed ? 48 : props.siderWidth}px)`
                : '100%';
        });
        const right = computed(() => (needFixedHeader.value ? 0 : undefined));

        return () => (
            <>
                {needFixedHeader.value && (
                    <Layout.Header
                        style={{
                            height: `${headerHeight.value}px`,
                            lineHeight: `${headerHeight.value}px`,
                            background: 'transparent',
                        }}
                    />
                )}
                <Layout.Header
                    style={{
                        padding: 0,
                        height: `${headerHeight.value}px`,
                        lineHeight: `${headerHeight.value}px`,
                        width: width.value,
                        zIndex: layout.value === 'mix' ? 100 : 19,
                        right: right.value,
                    }}
                    class={className.value}
                >
                    {renderContent()}
                </Layout.Header>
            </>
        );
    },
});
