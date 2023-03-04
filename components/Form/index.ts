import type { App } from 'vue';
import JForm from 'ant-design-vue/lib/form/Form';
import JFormItem from 'ant-design-vue/lib/form/FormItem';
import FormItemRest from 'ant-design-vue/lib/form/FormItemContext';

export type {
    FormProps,
    FormItemProps,
    FormInstance,
    FormItemInstance,
} from 'ant-design-vue/lib/form/index';

JForm.name = 'JForm';
JForm.install = function (app: App) {
    app.component('JForm', JForm);
    app.component('JFormItem', JFormItem);
    app.component('FormItemRest', FormItemRest);
    return app;
};

export default JForm;

export { JFormItem };
