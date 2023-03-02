import { withInstall } from '../util/type';
import Progress from 'ant-design-vue/lib/progress/progress';

export type { ProgressProps } from 'ant-design-vue/lib/progress/index';

export const JProgress = withInstall(Progress, 'JProgress');

export default JProgress;
