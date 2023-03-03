import { withInstall } from '../util/type';
import Input from 'ant-design-vue/lib/input/index';
import InputGroup from 'ant-design-vue/lib/input/Group';
import InputPassword from 'ant-design-vue/lib/input/Password';
import InputSearch from 'ant-design-vue/lib/input/Search';
import Textarea from 'ant-design-vue/lib/input/TextArea';

export const JLInput = withInstall(Input, 'JInput');
export const JInputGroup = withInstall(InputGroup, 'JInputGroup');
export const JInputPassword = withInstall(InputPassword, 'JInputPassword');
export const JInputSearch = withInstall(InputSearch, 'JInputSearch');
export const JInputTextarea = withInstall(Textarea, 'JInputTextarea');

export default JLInput;
