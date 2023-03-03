import { withInstall } from '../util/type';
import Checkbox, {CheckboxGroup} from 'ant-design-vue/lib/checkbox/index';

export const JCheckbox = withInstall(Checkbox, 'JCheckbox');
export const JCheckboxGroup = withInstall(CheckboxGroup, 'JCheckboxGroup');

export type {
    CheckboxProps,
    CheckboxGroupProps,
    CheckboxOptionType,
} from 'ant-design-vue/lib/checkbox/interface';

export default JCheckbox;
