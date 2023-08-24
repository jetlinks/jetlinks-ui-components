import { withInstall } from "../util/type";
import Alert, {alertProps} from 'ant-design-vue/lib/alert/index';

export {alertProps};

export type { AlertProps, AlertType } from 'ant-design-vue/lib/alert/index';

export const JAlert = withInstall(Alert, 'JAlert');

export default JAlert