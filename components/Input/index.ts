import type { App } from 'vue';
import { withInstall } from '../util/type';
import Input from 'ant-design-vue/lib/input/Input';
import InputGroup from 'ant-design-vue/lib/input/Group';
import InputPassword from 'ant-design-vue/lib/input/Password';
import InputSearch from 'ant-design-vue/lib/input/Search';
import Textarea from 'ant-design-vue/lib/input/TextArea';

export const JInputGroup = withInstall(InputGroup, 'JInputGroup');
export const JInputPassword = withInstall(InputPassword, 'JInputPassword');
export const JInputSearch = withInstall(InputSearch, 'JInputSearch');
export const JInputTextarea = withInstall(Textarea, 'JInputTextarea');
Input.name = 'JInput';
Input.install = function (app: App) {
    app.component('JInput', Input);
    app.component('JInputGroup', Input.Group);
    app.component('JInputSearch', Input.Search);
    app.component('JInputTextarea', Input.TextArea);
    app.component('JInputPassword', Input.Password);
    return app;
};

export default Input;
