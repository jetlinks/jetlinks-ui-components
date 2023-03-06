import type { App } from 'vue';
import Statistic from 'ant-design-vue/lib/statistic/Statistic';
import StatisticCountdown from 'ant-design-vue/lib/statistic/Countdown';

export type { StatisticProps } from 'ant-design-vue/lib/statistic/index';

Statistic.name = 'JStatistic';
StatisticCountdown.name = 'JStatisticCountdown';

Statistic.install = function (app: App) {
    app.component(Statistic.name, Statistic);
    app.component(StatisticCountdown.name, StatisticCountdown);
    return app;
};

export default Statistic;

export { StatisticCountdown };
