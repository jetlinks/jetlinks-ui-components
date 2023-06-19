<template>
    <j-form-item name="unit" label="单位">
        <UnitSelect :options="options"  v-model:value="title.config.double.selectValue"/>
    </j-form-item>
    <j-form-item name="" label="精度">
        <j-input-number :precision="0" :max="999" v-if="title.config" v-model:value="title.config.double.text"/>
    </j-form-item>
</template>

<script setup lang="ts">
import UnitSelect, { UnitProps } from '../UnitSelect';
import { reactive, ref } from "vue";
const props = defineProps({
    ...UnitProps,
    configData:{    
        type:Object,
        default: null,
    },
    configIndex:{
        type:Number,
        default: null,
    }
});

const options=ref([{
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
},])

const title=reactive( JSON.parse(JSON.stringify({...props.configData})) )
// title.value.config.double=''
title.config={double:{
    selectValue:null,
    text:null,
}}
// console.log(title.config)
const index=ref(props.configIndex)
defineExpose({
  title,index
})
</script>

<style scoped></style>
