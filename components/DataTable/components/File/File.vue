<template>
  <j-form-item label="文件类型" required>
    <j-radio-group v-model:value="title.config.file" button-style="solid">
      <j-space>
        <j-radio-button value="url">URL</j-radio-button>
        <j-radio-button value="base64">Base64</j-radio-button>
        <j-radio-button value="binary">binary</j-radio-button>
      </j-space>
    </j-radio-group>
  </j-form-item>
</template>

<script setup name="File" lang="ts">
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

title.config={file:null}

const index=ref(props.configIndex)
defineExpose({
  title,index
})

</script>

<style scoped>

</style>