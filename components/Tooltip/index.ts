import { withInstall } from '../util/type';
import Tooltip from 'ant-design-vue/lib/tooltip/Tooltip';

export type {
    TooltipProps,
    AdjustOverflow,
    PlacementsConfig,
    TooltipAlignConfig,
    TooltipPlacement,
  } from 'ant-design-vue/lib/tooltip/index';

  export { tooltipProps } from 'ant-design-vue/lib/tooltip/index';


export const JTooltip = withInstall(Tooltip, 'JTooltip');

export default JTooltip;
