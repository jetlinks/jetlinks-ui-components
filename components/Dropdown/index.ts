import { withInstall } from "../util/type";
import Dropdown from "ant-design-vue/lib/dropdown/dropdown";
import DropdownButton from "ant-design-vue/lib/dropdown/dropdown-button";

export const JDropdown = withInstall(Dropdown, 'JDropdown');
export const JDropdownButton = withInstall(DropdownButton, 'JDropdownButton');

export type { DropdownProps } from 'ant-design-vue/lib/dropdown/index';

export default JDropdown;