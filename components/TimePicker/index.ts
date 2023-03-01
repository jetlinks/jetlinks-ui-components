import { withInstall } from "../util/type";
import TimePicker, { TimeRangePicker } from 'ant-design-vue/lib/time-picker/index'

export type { TimePickerProps, TimeRangePickerProps } from 'ant-design-vue/lib/time-picker/index'
export const JTimePicker = withInstall(TimePicker, 'JTimePicker');
export const JTimeRangePicker = withInstall(TimeRangePicker, 'JTimeRangePicker');

export default JTimePicker