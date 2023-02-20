import { provide, reactive } from 'vue';
import type { InjectionKey, Ref, VNodeChild, ComputedRef } from 'vue';
import { useContext } from '../hooks/context';
import type { MenuDataItem, FormatMessage, WithFalse } from './typings';
import type { DefaultSettingProps } from './defaultSettings';

export interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}

export interface BreadcrumbProps {
    prefixCls?: string;
    routes?: Route[];
    params?: any;
    separator?: VNodeChild;
    itemRender?: (opts: { route: Route; params: any; routes: Array<Route>; paths: Array<string> }) => VNodeChild;
}

export type BreadcrumbListReturn = Pick<BreadcrumbProps, Extract<keyof BreadcrumbProps, 'routes' | 'itemRender'>>;

export interface MenuState {
    selectedKeys: string[];
    openKeys: string[];
}

export interface RouteContextProps extends Partial<DefaultSettingProps>, MenuState {
    menuData: MenuDataItem[];
    flatMenuData?: MenuDataItem[];

    getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
    locale?: WithFalse<FormatMessage>;
    breadcrumb?: BreadcrumbListReturn | ComputedRef<BreadcrumbListReturn>;
    prefixCls?: string;
    collapsed?: boolean;
    hasSideMenu?: boolean;
    hasHeader?: boolean;
    siderWidth?: number;
    headerHeight?: number;
    hasSide?: boolean;
    /* 附加属性 */
    [key: string]: any;
}

export const defaultPrefixCls = 'ant-pro';

export const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};

export const defaultRouteContext = reactive({
    getPrefixCls,
    locale: (t: string) => t,
    contentWidth: 'Fluid',
    hasFooterToolbar: false,
});

export const routeContextInjectKey: InjectionKey<RouteContextProps> = Symbol('route-context');

export const provideRouteContext = (value: RouteContextProps | Ref<RouteContextProps>) => {
    provide(routeContextInjectKey, value);
};

export const useRouteContext = () =>
    useContext<Required<RouteContextProps>>(routeContextInjectKey, defaultRouteContext);

