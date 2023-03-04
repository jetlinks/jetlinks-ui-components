import type { App } from 'vue';
import Timeline from 'ant-design-vue/lib/timeline/Timeline';
import TimelineItem from 'ant-design-vue/lib/timeline/TimelineItem';

export type {
    TimelineProps,
    TimelineItemProps,
} from 'ant-design-vue/lib/timeline/index';

Timeline.name = 'JTimeline';
TimelineItem.name = 'JTimelineItem';

Timeline.install = function (app: App) {
    app.component(Timeline.name, Timeline);
    app.component(TimelineItem.name, TimelineItem);
    return app;
};

export default Timeline;

export { TimelineItem };
