import type { VueNode } from 'ant-design-vue/lib/_util/type';
import message from 'ant-design-vue/lib/message';
import type {
    MessageApi,
    ConfigOnClose,
    MessageArgsProps,
    MessageType,
} from 'ant-design-vue/lib/message';

function isArgsProps(content: JointContent): content is MessageArgsProps {
    return (
        Object.prototype.toString.call(content) === '[object Object]' &&
        !!(content as MessageArgsProps).content
    );
}

type JointContent = VueNode | MessageArgsProps;

const Message: any = {};

Message.warning = (
    content: JointContent,
    duration?: number,
    onClose?: ConfigOnClose,
): MessageType => {
    const _content = isArgsProps(content)
        ? { maxCount: 1, ...content }
        : { maxCount: 1, content };
    return message.warning(_content, duration, onClose);
};

Message.success = (
    content: JointContent,
    duration?: number,
    onClose?: ConfigOnClose,
): MessageType => {
    const _content = isArgsProps(content)
        ? { maxCount: 1, ...content }
        : { maxCount: 1, content };
    return message.success(_content, duration, onClose);
};

Message.warn = Message.warning;

Message.error = (
    content: JointContent,
    duration?: number,
    onClose?: ConfigOnClose,
): MessageType => {
    const _content = isArgsProps(content)
        ? { maxCount: 1, ...content }
        : { maxCount: 1, content };
    return message.error(_content, duration, onClose);
};

Message.open = (arg: MessageArgsProps): MessageType => {
    return message.open(arg);
};

Message.loading = (
    content: JointContent,
    duration?: number,
    onClose?: ConfigOnClose,
): MessageType => {
    const _content = isArgsProps(content)
        ? { maxCount: 1, ...content }
        : { maxCount: 1, content };
    return message.loading(_content, duration, onClose);
};

Message.info = (
    content: JointContent,
    duration?: number,
    onClose?: ConfigOnClose,
): MessageType => {
    const _content = isArgsProps(content)
        ? { maxCount: 1, ...content }
        : { maxCount: 1, content };
    return message.info(_content, duration, onClose);
};

export default Message as MessageApi;
