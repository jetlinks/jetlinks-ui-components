<template>
    <div class="noFound">
        <div class="noFound-img">
            <img src="./mascot.png" alt="noFound" />
        </div>
        <div class="noFound-content">
            <div class="content">
                <img src="./404.png" alt="404" />
                <div class="title">
                    {{ props.title ? props.title : '抱歉，页面不存在' }}
                </div>
                <div class="sub-title">
                    {{ props.subTitle ? props.subTitle : '' }}
                </div>
                <slot name="extra"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ResultProps from 'ant-design-vue/es/result';

const props = defineProps({
    ...ResultProps.props,
});
</script>

<style lang="less" scoped>
.noFound {
    width: 100%;
    height: 100%;
    min-height: 760px;
    min-width: 1080px;
    display: flex;
    .noFound-img {
        flex: 0.6;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 80%;
            // min-width: 670px;
            // min-height: 560px;
        }
    }
    .noFound-content {
        flex: 0.4;
        display: flex;
        align-items: center;

        .content {
            width: 60%;
            height: 30%;
            flex-direction: column;
            img {
                width: 50%;
                // min-width: 670px;
                // min-height: 560px;
                margin-bottom: 20px;
            }
            .title {
                font-style: normal;
                font-weight: 400;
                font-size: 36px;
                line-height: 50px;
                text-align: justify;
                color: #333333;
                margin-bottom: 10px;
            }
            .sub-title {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: #999999;
                text-align: justify;
                word-break: break-word;
                margin-bottom: 10px;
            }
            button {
                margin-right: 12px;
            }
        }
    }
}
</style>
