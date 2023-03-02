import { withInstall } from '../util/type';
import Checkbox from 'ant-design-vue/lib/checkbox/Checkbox';
import CheckboxGroup from 'ant-design-vue/lib/checkbox/Group';

export const JCheckbox = withInstall(Checkbox, 'JCheckbox');
export const JCheckboxGroup = withInstall(CheckboxGroup, 'JCheckboxGroup');

export type {
    CheckboxProps,
    CheckboxGroupProps,
    CheckboxOptionType,
} from 'ant-design-vue/lib/checkbox/interface';

export default JCheckbox;
