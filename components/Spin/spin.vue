<template>
    <Spin v-bind="props">
        <template v-for="item in Object.keys(slots)" :key="item">
            <slot :name="item"></slot>
        </template>
        <template v-if="!Object.keys(slots).includes('indicator')" #indicator>
            <img class="spinning" src="./logo.png" />
        </template>
    </Spin>
</template>

<script lang="ts" setup>
import { Spin } from 'ant-design-vue';
import { useSlots } from 'vue';
import SpinProps from 'ant-design-vue/es/spin';

const slots = useSlots();

const props = defineProps({
    ...SpinProps.props,
});
</script>

<style lang="less" scoped>
.spinning {
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 1.2s linear infinite;
    -moz-animation: rotate 1.2s linear infinite;
    -o-animation: rotate 1.2s linear infinite;
    animation: rotate 1.2s linear infinite;
}

@-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes rotate {
    from {
        -moz-transform: rotate(0deg);
    }
    to {
        -moz-transform: rotate(359deg);
    }
}

@-o-keyframes rotate {
    from {
        -o-transform: rotate(0deg);
    }
    to {
        -o-transform: rotate(359deg);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}
</style>
