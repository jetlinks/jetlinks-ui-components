import { withInstall } from '../util/type';
import Collapse from 'ant-design-vue/lib/collapse/Collapse';
import CollapsePanel from 'ant-design-vue/lib/collapse/CollapsePanel';

export type {
    CollapseProps,
    CollapsePanelProps,
} from 'ant-design-vue/lib/collapse/index';

export const JCollapse = withInstall(Collapse, 'JCollapse');
export const JCollapsePanel = withInstall(CollapsePanel, 'JCollapsePanel');

export default JCollapse;
