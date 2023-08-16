import { withInstall } from '../util/type';
import Cascader from 'ant-design-vue/lib/cascader/index';

export const JCascader = withInstall(Cascader, 'JCascader');

export { cascaderProps } from 'ant-design-vue/lib/cascader/index';

export type { CascaderProps,
              BaseOptionType,
              DefaultOptionType,
              ShowSearchType,
              FieldNamesType,
              FilledFieldNamesType,
              CascaderOptionType,
              CascaderRef
            } from 'ant-design-vue/lib/cascader/index';

export default JCascader;
