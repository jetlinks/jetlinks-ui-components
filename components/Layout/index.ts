import { withInstall } from '../util/type';
import Layout, {
    LayoutHeader,
    LayoutSider,
    LayoutFooter,
    LayoutContent,
} from 'ant-design-vue/lib/layout';

const JLayout = withInstall(Layout, 'JLayout');
export const JLayoutHeader = withInstall(LayoutHeader, 'JLayoutHeader');
export const JLayoutSider = withInstall(LayoutSider, 'JLayoutSider');
export const JLayoutFooter = withInstall(LayoutFooter, 'JLayoutFooter');
export const JLayoutContent = withInstall(LayoutContent, 'JLayoutContent');

export type { LayoutProps, SiderProps } from 'ant-design-vue/lib/layout';

export default JLayout;
