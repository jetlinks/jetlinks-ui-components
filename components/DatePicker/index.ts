import type { App } from 'vue';
import type { Dayjs } from 'dayjs';
import DatePicker, {
    MonthPicker,
    WeekPicker,
    RangePicker,
    QuarterPicker,
} from 'ant-design-vue/lib/date-picker/dayjs';

import type { PickerProps } from 'ant-design-vue/lib/date-picker/generatePicker';
import type { ExtraDatePickerProps } from 'ant-design-vue/lib/date-picker/generatePicker/props';

export type DatePickerProps = PickerProps<Dayjs> & ExtraDatePickerProps<Dayjs>;

DatePicker.name = 'JDatePicker';
RangePicker.name = 'JRangePicker';
MonthPicker.name = 'JMonthPicker';
WeekPicker.name = 'JWeekPicker';
QuarterPicker.name = 'JQuarterPicker';

DatePicker.install = function (app: App) {
    app.component('JDatePicker', DatePicker);
    app.component('JRangePicker', RangePicker);
    app.component('JMonthPicker', MonthPicker);
    app.component('JWeekPicker', WeekPicker);
    app.component('JQuarterPicker', QuarterPicker);
    return app;
};

export default DatePicker;

export { RangePicker, MonthPicker, WeekPicker, QuarterPicker };
