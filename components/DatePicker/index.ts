import { withInstall } from "../util/type";
import type { Dayjs } from 'dayjs';
import DatePicker from 'ant-design-vue/lib/date-picker/index';
export const JDatePicker = withInstall(DatePicker, 'JDatePicker');
import type {
    PickerProps,
  } from 'ant-design-vue/lib/date-picker/generatePicker';
import type { ExtraDatePickerProps } from 'ant-design-vue/lib/date-picker/generatePicker/props';
export type DatePickerProps = PickerProps<Dayjs> & ExtraDatePickerProps<Dayjs>;
export default JDatePicker