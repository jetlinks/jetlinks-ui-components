import type { VNode } from 'vue';
import type { BreadcrumbProps } from './RouteContext';
import type { VueNode } from 'ant-design-vue/lib/_util/type';

export type Theme = 'dark' | 'light';
export type LayoutType = 'side' | 'top' | 'mix';
export type TargetType = '_blank' | '_self' | unknown;
export type ProProps = Record<never, never>;
export type ContentWidth = 'Fluid' | 'Fixed';

export interface MetaRecord {
    /**
     * @name 菜单的icon
     */
    icon?: string | VNode;
    /**
     * @name 自定义菜单的国际化 key，如果没有则返回自身
     */
    title?: string;
    /**
     * @name 打开目标位置 '_blank' | '_self' | null | undefined
     */
    target?: TargetType;
    /**
     * @name 在菜单中隐藏子节点
     */
    hideChildInMenu?: boolean;
    /**
     * @name 在菜单中隐藏自己和子节点
     */
    hideInMenu?: boolean;
    /**
     * @name disable 菜单选项
     */
    disabled?: boolean;
    /**
     * @name 隐藏自己，并且将子节点提升到与自己平级
     */
    flatMenu?: boolean;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface MenuDataItem {
    /**
     * @name 用于标定选中的值，默认是 path
     */
    path: string;
    name?: string | symbol;
    meta?: MetaRecord;
    /**
     * @name 子菜单
     */
    children?: MenuDataItem[];
}

export type WithFalse<T> = T | false;

export type FormatMessage = (message?: string) => string;

export type BreadcrumbRender = BreadcrumbProps['itemRender'];
export type HeaderContentRender = WithFalse<() => VueNode>;
export type HeaderRender = WithFalse<(props: ProProps) => VueNode>;
export type RightContentRender = WithFalse<(props: ProProps) => VueNode>;
export type MenuItemRender = WithFalse<
    (args: {
        item: MenuDataItem;
        title?: JSX.Element;
        icon?: JSX.Element;
    }) => VueNode
>;
export type SubMenuItemRender = WithFalse<
    (args: { item: MenuDataItem; children?: VueNode[] }) => VueNode
>;
export type MenuHeaderRender = WithFalse<
    (logo: VueNode, title: VueNode, props?: ProProps) => VueNode
>;
export type MenuContentRender = WithFalse<
    (props: ProProps, defaultDom: VueNode) => VueNode
>;
export type MenuExtraRender = WithFalse<(props?: ProProps) => VueNode>;
export type LogoRender = WithFalse<VueNode>;

export type CollapsedButtonRender = WithFalse<(collapsed?: boolean) => VueNode>;
export type DefaultPropRender = WithFalse<VueNode>;
export type PageHeaderRender = WithFalse<(props?: ProProps) => VueNode>;
