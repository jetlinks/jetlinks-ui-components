import { withInstall } from "../util/type";
import Statistic from 'ant-design-vue/lib/statistic/Statistic'
import StatisticCountdown from 'ant-design-vue/lib/statistic/Countdown'

export type { StatisticProps } from 'ant-design-vue/lib/statistic/index';
export const JStatistic = withInstall(Statistic, 'JStatistic');
export const JStatisticCountdown = withInstall(StatisticCountdown, 'JStatisticCountdown');

export default JStatisticCountdown