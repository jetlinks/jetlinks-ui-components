
<template>
    <j-form-item name="" label="最大长度">
        <j-input-number :precision="0" :max="999" v-if="title.config" v-model:value="title.config.text"/>
        {{title.config?.text}}
        <!-- v-model:value="title.text" -->
    </j-form-item>
</template>

<script setup lang="ts" name="String">
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
const index=ref(props.configIndex)
defineExpose({
  title,index
})
</script>

<style scoped></style>
