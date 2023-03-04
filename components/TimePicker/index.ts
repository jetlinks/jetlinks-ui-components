import type { App } from 'vue';
import TimePicker, {
    TimeRangePicker,
} from 'ant-design-vue/lib/time-picker/dayjs';

export type {
    TimePickerProps,
    TimeRangePickerProps,
} from 'ant-design-vue/lib/time-picker/index';

TimePicker.name = 'JTimePicker';
TimeRangePicker.name = 'JTimeRangePicker';

TimePicker.install = function (app: App) {
    app.component('JTimePicker', TimePicker);
    app.component('JTimeRangePicker', TimeRangePicker);
    return app;
};

export default TimePicker;

export { TimeRangePicker };
