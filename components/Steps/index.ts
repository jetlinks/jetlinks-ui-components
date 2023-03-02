import { withInstall } from "../util/type";
import Steps from 'ant-design-vue/lib/steps/index';

export type { StepProps, StepsProps } from 'ant-design-vue/lib/steps/index';

export const JSteps = withInstall(Steps, 'JSteps');

export default JSteps