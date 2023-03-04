import type { App } from 'vue';
import TimePicker, {
    TimeRangePicker as JTimeRangePicker,
} from 'ant-design-vue/lib/time-picker/dayjs';

export type {
    TimePickerProps,
    TimeRangePickerProps,
} from 'ant-design-vue/lib/time-picker/index';

TimePicker.name = 'JTimePicker';
JTimeRangePicker.name = 'JTimeRangePicker';

TimePicker.install = function (app: App) {
    app.component('JTimePicker', TimePicker);
    app.component('JTimeRangePicker', JTimeRangePicker);
    return app;
};

export default TimePicker;

export { JTimeRangePicker };
