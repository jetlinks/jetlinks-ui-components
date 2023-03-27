import { defineComponent, createVNode, watchEffect } from 'vue';
import * as $Icon from '@ant-design/icons-vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
import './iconfont';

let MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
});

const aIcon = $Icon;

const AntdIcon = (props: { type: string }) => createVNode(aIcon[props.type]);

const Icon = (props) =>
    Object.keys(aIcon).includes(props.type) ? (
        <AntdIcon {...props} />
    ) : (
        <MyIcon {...props} />
    );

export default defineComponent({
    name: 'AIcon',
    // 传入组件配置
    props: ['type', 'scriptUrl', 'class'],
    emits: ['click'],
    setup(props, { emit, attrs }) {
        watchEffect(() => {
            if (props.scriptUrl) {
                MyIcon = createFromIconfontCN({
                    scriptUrl: props.scriptUrl,
                });
            }
        });

        const click = () => {
            emit('click');
        };

        // const render = () => {
        //     return
        // };
        return () => <Icon {...props} style={attrs.style} onClick={click} />;
    },
});
