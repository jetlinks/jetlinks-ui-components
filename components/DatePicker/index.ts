import { withInstall } from '../util/type';
import type { Dayjs } from 'dayjs';
import DatePicker, {
    MonthPicker,
    WeekPicker,
    RangePicker,
    QuarterPicker,
} from 'ant-design-vue/lib/date-picker/index';

import type { PickerProps } from 'ant-design-vue/lib/date-picker/generatePicker';
import type { ExtraDatePickerProps } from 'ant-design-vue/lib/date-picker/generatePicker/props';

export const JDatePicker = withInstall(DatePicker, 'JDatePicker');
export const JMonthPicker = withInstall(MonthPicker, 'JDatePicker');
export const JWeekPicker = withInstall(WeekPicker, 'JWeekPicker');
export const JRangePicker = withInstall(RangePicker, 'JRangePicker');
export const JQuarterPicker = withInstall(QuarterPicker, 'JQuarterPicker');

export type DatePickerProps = PickerProps<Dayjs> & ExtraDatePickerProps<Dayjs>;

export default JDatePicker;
