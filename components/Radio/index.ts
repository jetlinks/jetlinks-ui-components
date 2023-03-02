import { withInstall } from "../util/type";
import Radio from 'ant-design-vue/lib/radio/Radio'
import RadioButton from 'ant-design-vue/lib/radio/RadioButton'
import RadioGroup from 'ant-design-vue/lib/radio/Group'

export type { RadioProps, RadioChangeEvent, RadioGroupProps } from 'ant-design-vue/lib/radio/index'
export const JRadio = withInstall(Radio, 'JRadio');
export const JRadioButton = withInstall(RadioButton, 'JRadioButton');
export const JRadioGroup = withInstall(RadioGroup, 'JRadioGroup');

export default JRadio