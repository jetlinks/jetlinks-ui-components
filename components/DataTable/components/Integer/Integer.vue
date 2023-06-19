<template>
    <j-form-item label="单位" name="unit">
        <UnitSelect :options="options"  v-if="title.config"  v-model:value="title.config.selectValue"/>
    </j-form-item>
</template>

<script setup lang="ts" >
import UnitSelect, { UnitProps } from '../UnitSelect';
import { onMounted, reactive, ref } from "vue";
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
title.config={selectValue:null}

const index=ref(props.configIndex)
defineExpose({
  title,index
})

</script>
