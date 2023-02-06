import MyScrollbar from '../../components/Scrollbar'
import { mount } from '@vue/test-utils'
export default {
    title: '导航/Scrollbar',
    component: MyScrollbar,
    argTypes: { // props属性的类型，用于复杂类型
    }
}
const outerHeight = 204
const innerHeight = 500

const Template = (args) => ({
    components: { MyScrollbar },
    setup() {
        return { args };
    },
    template: '<MyScrollbar v-bind="args" style="height: 204px">'
                + '<div style="background: #66bf3c;height:500px">1</div>'+
              '</MyScrollbar>',
});
console.log(MyScrollbar,111);

export const Scrollbar = Template.bind({});
Scrollbar.args = {
    /**
     * props属性
     */
    always:true,
    maxHeight: 204,
    minSize:20,
    native:false,
    noresize:false,
    tag:'div',
    viewClass:'',
    viewStyle:'',
    wrapClass:'',
    wrapStyle:'',
}
console.log(Scrollbar.args);
Scrollbar.parameters = {
    docs: {
        source: {
            code: '<Scrollbar :height="400"/>',
            language: "html",
            type: 'auto',
            format: true
        }
    }
}