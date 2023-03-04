import type { VNodeChild, CSSProperties, HTMLAttributes } from 'vue';
import type { Theme } from '../typings';

export type {
    MenuMode,
    MenuTheme,
} from 'ant-design-vue/lib/menu/src/interface';

export interface MenuInfo {
    key: string | number;
    keyPath: string[] | number[];
    item: VNodeChild;
    domEvent: MouseEvent;
}

export interface SelectInfo extends MenuInfo {
    selectedKeys: string[];
}

export type OpenEventHandler = (
    keys:
        | string[]
        | {
              key: string;
              item: VNodeChild;
              trigger: string;
              open: boolean;
          },
) => void;

export type SiderTheme = Theme;

export type CollapseType = 'clickTrigger' | 'responsive';

export interface SiderProps extends HTMLAttributes {
    prefixCls?: string;
    collapsible?: boolean;
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    reverseArrow?: boolean;
    onCollapse?: (collapsed: boolean, type: CollapseType) => void;
    zeroWidthTriggerStyle?: CSSProperties;
    trigger?: VNodeChild | JSX.Element;
    width?: number | string;
    collapsedWidth?: number | string;
    breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    theme?: SiderTheme;
    onBreakpoint?: (broken: boolean) => void;
}
