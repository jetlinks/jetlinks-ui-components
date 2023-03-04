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
import ResultProps from 'ant-design-vue/lib/result';

const props = defineProps({
    ...ResultProps.props,
});
</script>
