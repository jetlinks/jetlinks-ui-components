import type { App } from 'vue';
import DatePicker, {
    MonthPicker,
    WeekPicker,
    RangePicker,
    QuarterPicker,
} from 'ant-design-vue/lib/date-picker/dayjs';

export type {DatePickerProps, MonthPickerProps, WeekPickerProps, RangePickerProps} from 'ant-design-vue/lib/date-picker/dayjs';

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
