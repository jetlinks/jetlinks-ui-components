import MyProTable from '../../components/ProTable';

export default {
    title: '导航/ProTable',
    component: MyProTable,
    argTypes: { // props属性的类型，用于复杂类型

    }
}

const Template = (args) => ({
    components: { MyProTable },
    setup() {
        return { args };
    },
    template: '<MyProTable v-bind="args"></MyProTable>',
});

export const ProTable = Template.bind({});

ProTable.args = {
    /**
     * props属性
     */
    type: '',
    columns: [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ],
    dataSource: [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ],
}

ProTable.parameters = {
    docs: {
        source: {
            code: '<ProTable v-bind="args />',
            language: "html",
            type: 'auto',
            format: true
        }
    }
}

// /**
//  * 滑动加载table
//  */
// export const ScrollTable = Template.bind({});

// ScrollTable.args = {
//     type: 'scroll',
//     request: (param) => new Promise((resolve) => {
//         console.log(param)
//         resolve({
//             data: Array(100).fill(1).map((i, index) => i + index)
//         })
//     })
// };

// ScrollTable.parameters = {
//     docs: {
//         source: {
//             code: '<ScrollTable v-bind="args">',
//             language: "html",
//             type: 'auto',
//             format: true
//         }
//     }
// }