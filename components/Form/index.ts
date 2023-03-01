import { withInstall } from "../util/type";
import Form from 'ant-design-vue/lib/form/Form';
import FormItem from 'ant-design-vue/lib/form/FormItem'
import FormItemRest from 'ant-design-vue/lib/form/FormItemContext'

export const JForm = withInstall(Form, 'JForm');
export const JFormItem = withInstall(FormItem, 'JFormItem')

export type { FormProps, FormItemProps, FormInstance, FormItemInstance } from 'ant-design-vue/es/form/index';

export default JForm