<template>
    <div class="box">
        <h1>popconfirm</h1>
        <p></p>
        <p></p>
        <a-row>
            <a-col :span="11">
                <JPopconfirm
                    placement="topLeft"
                    ok-text="ok"
                    cancel-text="不想ok"
                    title="ok？"
                >
                    <a>topLeft</a>
                </JPopconfirm>
            </a-col>
            <a-col :span="12">
                <JPopconfirm>
                    <a>top</a>
                </JPopconfirm>
            </a-col>
            <a-col :span="1">
                <JPopconfirm
                    placement="topRight"
                    :loading="true"
                    @confirm="confirm"
                >
                    <a>topRight</a>
                </JPopconfirm>
            </a-col>
        </a-row>
        <p></p>
        <h1>自定义JPopconfirm</h1>
        <p></p>
        <JPopconfirm v-bind="props">
            <a>自定义JPopconfirm</a>
        </JPopconfirm>
    </div>
</template>

<script lang="ts" setup>
import JPopconfirm from './JPopconfirm.vue';
import { popconfirmProps } from 'ant-design-vue/es/popconfirm';

const props = defineProps({
    ...popconfirmProps(),
    /**
     * 是否添加loading状态
     */
    loading: {
        type: Boolean,
        default: false,
    },
});

const confirm = (e: MouseEvent) => {
    console.log(1, e);
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000);
    });
};
</script>

<style scoped lang="less">
// .box {
//     margin-top: 100px;
// }
</style>
