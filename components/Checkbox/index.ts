import type { App } from 'vue';
import Checkbox from 'ant-design-vue/lib/checkbox/Checkbox';
import CheckboxGroup from 'ant-design-vue/lib/checkbox/Group';

export type {
    CheckboxProps,
    CheckboxGroupProps,
    CheckboxOptionType,
} from 'ant-design-vue/lib/checkbox/interface';

CheckboxGroup.name = 'JCheckboxGroup';

Checkbox.name = 'JCheckbox';
Checkbox.install = function (app: App) {
    app.component('JCheckbox', Checkbox);
    app.component('JCheckboxGroup', CheckboxGroup);
    return app;
};

export default Checkbox;

export { CheckboxGroup };
