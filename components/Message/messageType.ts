import { MessageArgsProps } from 'ant-design-vue/lib/message';
import { message } from 'ant-design-vue';

message.config({
    maxCount: 1,
});
export const JMessage = (config: MessageArgsProps) => {
    message[config.type](config);
};
