import { withInstall } from '../util/type';
import Calendar from 'ant-design-vue/lib/calendar/index';

export type { CalendarProps } from 'ant-design-vue/lib/calendar/index';

export const JCalendar = withInstall(Calendar, 'JCalendar');

export default JCalendar;
