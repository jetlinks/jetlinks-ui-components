import type { App } from 'vue';
import Radio from 'ant-design-vue/lib/radio/Radio';
import RadioButton from 'ant-design-vue/lib/radio/RadioButton';
import RadioGroup from 'ant-design-vue/lib/radio/Group';

export type {
    RadioProps,
    RadioChangeEvent,
    RadioGroupProps,
} from 'ant-design-vue/lib/radio/index';

Radio.name = 'JRadio';
RadioButton.name = 'JRadioButton';
RadioGroup.name = 'JRadioGroup';

Radio.install = function (app: App) {
    app.component('JRadio', Radio);
    app.component('JRadioButton', RadioButton);
    app.component('JRadioGroup', RadioGroup);
    return app;
};

export default Radio;

export { RadioButton, RadioGroup };
