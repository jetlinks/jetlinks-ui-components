import { withInstall } from '../util/type';
import Message from './demo/index.vue';
export { JMessage } from '../Message/messageType'

export const JLMessage = withInstall(Message, 'JMessage');

export default JLMessage;
