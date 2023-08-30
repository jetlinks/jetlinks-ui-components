import { withInstall } from '../util/type';
import BackTop, { backTopProps } from 'ant-design-vue/lib/back-top/index';

export { backTopProps };

export type { BackTopProps } from 'ant-design-vue/lib/back-top/index';

export const JBackTop = withInstall(BackTop, 'JBackTop');

export default JBackTop;
