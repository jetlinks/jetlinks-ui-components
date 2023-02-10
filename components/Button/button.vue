<template>
  <Button v-bind="props" :style="{borderRadius: '6px'}" :class="className">
    <j-aIcon :type="props.myIcon" v-if="props.myIcon"/>
    <slot name="icon"></slot>
    <slot name="default"></slot>
  </Button>
</template>

<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import { buttonProps } from 'ant-design-vue/lib/button/buttonTypes';
import { computed, defineProps } from 'vue';

const props = defineProps({
    ...buttonProps(),
    tag: {
      type: Boolean,
      default: false
    },
    iconDanger: {
      type: Boolean,
      default: false
    },
    myIcon: {
      type: String,
      default: ''
    }
});

const className = computed(() => {
    return {
        'tag-btn': props.tag,
        'icon-danger': String(props.type) === 'icon-danger'
    };
});

</script>

<style lang="less" scoped>
@import 'ant-design-vue/es/style/themes/default.less';
.tag-btn{
  height: 20px;
  padding: 0 15px !important;
  font-size: 12px ;
  line-height: 12px; 
}

.icon-danger{
  border: none;
  background-color: #f1f1f1;

  &:hover {
    color: #fff;
    background-color: #e50012;
  }

  &:disabled {
    color: @btn-disable-color;
    background-color: @btn-disable-bg;
  }
}

</style>
