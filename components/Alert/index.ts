import { withInstall } from "../util/type";
import Alert from 'ant-design-vue/lib/alert/index';

export type { AlertProps } from 'ant-design-vue/lib/alert/index';

export const JAlert = withInstall(Alert, 'JAlert');

export default JAlert