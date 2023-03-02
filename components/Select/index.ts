import { withInstall } from '../util/type';
import Select from './select.vue';
import { SelectOptGroup, SelectOption } from 'ant-design-vue/es/select';

export const JLSelect = withInstall(Select, 'JSelect');
export const JLSelectOptGroup = withInstall(SelectOptGroup, 'JSelectOptGroup');
export const JLSelectOption = withInstall(SelectOption, 'JSelectOption');

export default JLSelect;
