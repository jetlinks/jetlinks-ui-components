import { withInstall } from '../util/type';
import Steps, { Step } from 'ant-design-vue/lib/steps/index';

export type { StepProps, StepsProps } from 'ant-design-vue/lib/steps/index';

export const JSteps = withInstall(Steps, 'JSteps');
export const JStep = withInstall(Step, 'JStep');

export default JSteps;
