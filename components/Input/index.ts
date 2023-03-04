import type { App } from 'vue';
import Input from 'ant-design-vue/lib/input/Input';
import InputGroup from 'ant-design-vue/lib/input/Group';
import InputPassword from 'ant-design-vue/lib/input/Password';
import InputSearch from 'ant-design-vue/lib/input/Search';
import InputTextarea from 'ant-design-vue/lib/input/TextArea';

Input.name = 'JInput';
InputGroup.name = 'JInputGroup';
InputPassword.name = 'JInputPassword';
InputSearch.name = 'JInputSearch';
InputTextarea.name = 'JInputTextarea';

Input.Group = InputGroup;
Input.Search = InputSearch;
Input.Password = InputPassword;
Input.TextArea = InputTextarea;

Input.install = function (app: App) {
    app.component('JInput', Input);
    app.component('JInputGroup', Input.Group);
    app.component('JInputSearch', Input.Search);
    app.component('JInputTextarea', Input.TextArea);
    app.component('JInputPassword', Input.Password);
    return app;
};

export default Input;

export { InputPassword, InputGroup, InputSearch, InputTextarea };
