import type { App } from 'vue';
import Select from './select.vue';
import { SelectOptGroup, SelectOption } from 'ant-design-vue/lib/select';

Select.install = function (app: App) {
    app.component('JSelect', Select);
    app.component('JSelectOptGroup', SelectOptGroup);
    app.component('JSelectOption', SelectOption);
    return app;
};

export default Select;
