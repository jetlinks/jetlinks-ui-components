import type { App } from 'vue';
import Layout, {
    LayoutHeader,
    LayoutSider,
    LayoutFooter,
    LayoutContent,
} from 'ant-design-vue/lib/layout';

export type { LayoutProps, SiderProps } from 'ant-design-vue/lib/layout';

Layout.name = 'JLayout';
LayoutHeader.name = 'JLayoutHeader';
LayoutSider.name = 'JLayoutSider';
LayoutFooter.name = 'JLayoutFooter';
LayoutContent.name = 'JLayoutContent';

Layout.install = function (app: App) {
    app.component(Layout.name, Layout);
    app.component(LayoutHeader.name, LayoutHeader);
    app.component(LayoutSider.name, LayoutSider);
    app.component(LayoutFooter.name, LayoutFooter);
    app.component(LayoutContent.name, LayoutContent);
    return app;
};

export default Layout;

export { LayoutContent, LayoutFooter, LayoutHeader, LayoutSider };
