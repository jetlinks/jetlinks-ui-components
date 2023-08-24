import type { App } from 'vue';
import Breadcrumb from 'ant-design-vue/lib/breadcrumb/Breadcrumb';
import BreadcrumbItem from 'ant-design-vue/lib/breadcrumb/BreadcrumbItem';
import BreadcrumbSeparator from 'ant-design-vue/lib/breadcrumb/BreadcrumbSeparator';

Breadcrumb.name = 'JBreadcrumb';
BreadcrumbItem.name = 'JBreadcrumbItem';
BreadcrumbSeparator.name = 'JBreadcrumbSeparator';

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Sepatator = BreadcrumbSeparator;

export type {
    BreadcrumbProps,
    BreadcrumbItemProps,
    BreadcrumbSeparatorProps,
} from 'ant-design-vue/lib/breadcrumb/index';

Breadcrumb.install = function (app: App) {
    app.component('JBreadcrumb', Breadcrumb);
    app.component('JBreadcrumbItem', BreadcrumbItem);
    app.component('JBreadcrumbSeparator', BreadcrumbSeparator);
    return app;
};

export default Breadcrumb;

export { BreadcrumbItem, BreadcrumbSeparator };
