import type { App } from 'vue';
import Dropdown from 'ant-design-vue/lib/dropdown/index';
import DropdownButton from 'ant-design-vue/lib/dropdown/dropdown-button';

Dropdown.name = 'JDropdown';
DropdownButton.name = 'JDropdownButton';

export { dropdownProps, dropdownButtonProps } from 'ant-design-vue/lib/dropdown/index';
export type { DropdownProps, DropdownButtonProps } from 'ant-design-vue/lib/dropdown/index';

Dropdown.install = function (app: App) {
    app.component(Dropdown.name, Dropdown);
    app.component(DropdownButton.name, DropdownButton);
    return app;
};

export default Dropdown;

export { DropdownButton };
