import type { App } from 'vue';
import Radio from 'ant-design-vue/lib/radio/Radio';
import JRadioButton from 'ant-design-vue/lib/radio/RadioButton';
import JRadioGroup from 'ant-design-vue/lib/radio/Group';

export type {
    RadioProps,
    RadioChangeEvent,
    RadioGroupProps,
} from 'ant-design-vue/lib/radio/index';

Radio.name = 'JRadio';
JRadioButton.name = 'JRadioButton';
JRadioGroup.name = 'JRadioGroup';

Radio.install = function (app: App) {
    app.component('JRadio', Radio);
    app.component('JRadioButton', JRadioButton);
    app.component('JRadioGroup', JRadioGroup);
    return app;
};

export default Radio;

export { JRadioButton, JRadioGroup };
