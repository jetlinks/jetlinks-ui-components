<template>
  <j-form-item label="元素类型" required>
    <TypeSelect  v-model:value="title.config.array"/>
  </j-form-item>
</template>

<script setup lang="ts">
import { FormItem } from '../../../components'
import { TypeSelect } from "../index";
import { reactive, ref } from "vue";
const props = defineProps({
    configData:{    
        type:Object,
        default: null,
    },
    configIndex:{
        type:Number,
        default: null,
    }
});

const title=reactive( JSON.parse(JSON.stringify({...props.configData})) )

title.config={array:null}

const index=ref(props.configIndex)
defineExpose({
  title,index
})
</script>

<style scoped>

</style>