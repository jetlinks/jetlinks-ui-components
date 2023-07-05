import type { App } from 'vue';
import Select from './select.vue';
import { SelectOptGroup, SelectOption } from 'ant-design-vue/lib/select';
import SelectBoolean from './Boolean.vue';

Select.name = 'JSelect';
SelectOption.displayName = 'JSelectOption';
SelectOptGroup.displayName = 'JSelectOptGroup';
SelectBoolean.name = 'JSelectBoolean';

Select.install = function (app: App) {
    app.component('JSelect', Select);
    app.component('JSelectOptGroup', SelectOptGroup);
    app.component('JSelectOption', SelectOption);

    return app;
};

SelectBoolean.install = function (app: App) {
    app.component('JSelectBoolean', SelectBoolean);
    return app;
};

export default Select;

export { SelectOptGroup, SelectOption, SelectBoolean };
