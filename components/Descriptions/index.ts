import { withInstall } from "../util/type";
import Descriptions from './descriptions.vue';
import { DescriptionsItem } from "ant-design-vue";

export const JLDescriptions = withInstall(Descriptions, 'JDescriptions')
export const JDescriptionsItem = withInstall(DescriptionsItem, 'JDescriptionsItem')

export default JLDescriptions