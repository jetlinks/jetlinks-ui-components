import { withInstall } from '../util/type';
import Breadcrumb from 'ant-design-vue/lib/breadcrumb/Breadcrumb';
import BreadcrumbItem from 'ant-design-vue/lib/breadcrumb/BreadcrumbItem';
import BreadcrumbSeparator from 'ant-design-vue/lib/breadcrumb/BreadcrumbSeparator';

Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Sepatator = BreadcrumbSeparator
export const JBreadcrumb = withInstall(Breadcrumb, 'JBreadcrumb');
export const JBreadcrumbItem = withInstall(BreadcrumbItem, 'JBreadcrumbItem');
export const JBreadcrumbSeparator = withInstall(BreadcrumbSeparator, 'JBreadcrumbSeparator');

export type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbSeparatorProps } from 'ant-design-vue/lib/breadcrumb/index';

export default JBreadcrumb;
