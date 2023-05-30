import type { App } from 'vue';
import Form from 'ant-design-vue/lib/form/Form';
import FormItem from 'ant-design-vue/lib/form/FormItem';
import FormItemRest, {
    useInjectFormItemContext,
} from 'ant-design-vue/lib/form/FormItemContext';

export type {
    FormProps,
    FormItemProps,
    FormInstance,
    FormItemInstance,
} from 'ant-design-vue/lib/form/index';

Form.name = 'JForm';
FormItem.name = 'JFormItem';
FormItemRest.name = 'JFormItemRest';

Form.ItemRest = FormItemRest;
Form.useInjectFormItemContext = useInjectFormItemContext;

Form.install = function (app: App) {
    app.component('JForm', Form);
    app.component('JFormItem', FormItem);
    app.component('FormItemRest', FormItemRest);
    return app;
};

export default Form;

export { FormItem, FormItemRest };
