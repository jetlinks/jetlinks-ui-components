import MyEmpty from '../../components/Empty';
import NoData from '../../components/Empty/assets/nodata.svg';
export default {
    title: '导航/Empty',
    component: MyEmpty,
    argTypes: {},
};

const Template = (args) => ({
    components: { MyEmpty },
    setup() {
        return { args };
    },
    template: `<MyEmpty v-bind="args"></MyEmpty>`,
});

export const Empty = Template.bind({});

Empty.args = {
    description: '暂无数据',
    image: NoData,
    imageStyle: {
        height: '60px',
    },
};

Empty.parameters = {
    docs: {
        source: {
            code: '<Empty>',
            language: 'html',
            type: 'auto',
            format: true,
        },
    },
};
