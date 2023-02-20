import { withInstall } from '../util/type';
import ProLayout from './Basic/BasicLayout'
import PageContainer from './PageContainer'

import './style.less'

export {
    PageContainer
}

export const JProLayout = withInstall(ProLayout, 'JProLayout')

export default JProLayout