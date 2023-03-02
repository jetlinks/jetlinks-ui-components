import { withInstall } from '../util/type';
import Spin from 'ant-design-vue/lib/spin/Spin';

export type { SpinProps } from 'ant-design-vue/lib/spin/index';

export const JSpin = withInstall(Spin, 'JSpin');

export default JSpin;
