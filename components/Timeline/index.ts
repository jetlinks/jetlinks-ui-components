import { withInstall } from "../util/type";
import Timeline from 'ant-design-vue/lib/timeline/Timeline';
import TimelineItem from 'ant-design-vue/lib/timeline/TimelineItem';

export type { TimelineProps, TimelineItemProps } from 'ant-design-vue/lib/timeline/index';

export const JTimeline = withInstall(Timeline, 'JTimeline');
export const JTimelineItem = withInstall(TimelineItem, 'JTimelineItem');

export default JTimeline