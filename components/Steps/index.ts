import type { App } from 'vue';
import Steps, { Step } from 'ant-design-vue/lib/steps/index';

export type { StepProps, StepsProps } from 'ant-design-vue/lib/steps/index';

Steps.name = 'JSteps';
Step.name = 'JStep';

Steps.install = function (app: App) {
    app.component(Steps.name, Steps);
    app.component(Step.name, Step);
    return app;
};

export default Steps;

export { Step };
