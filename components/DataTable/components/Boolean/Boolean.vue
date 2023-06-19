<template>
    <j-form-item no-style require label="布尔值">
        <div class="data-table-boolean-item">
            <div class="data-table-boolean-item--value">
                <j-form-item name="trueText" >
                    <j-input v-model:value="title.config.boolean[0].title"/>
                </j-form-item>
            </div>
            <div>-</div>
            <div class="data-table-boolean-item--value">
                <j-form-item  name="trueValue">
                    <j-input v-model:value="title.config.boolean[0].value"/>
                </j-form-item>
            </div>
        </div>
        <div class="data-table-boolean-item">
            <div class="data-table-boolean-item--value">
                <j-form-item name="falseText">
                    <j-input v-model:value="title.config.boolean[1].title"/>
                </j-form-item>
            </div>
            <div>-</div>
            <div class="data-table-boolean-item--value">
                <j-form-item  name="falseValue">
                    <j-input v-model:value="title.config.boolean[1].value"/>
                </j-form-item>
            </div>
        </div>
         <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
    </j-form-item>
</template>

<script setup lang="ts" name="Boolean">
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
title.config={boolean:[
    {title:'',value:''},
    {title:'',value:''},
]}

const index=ref(props.configIndex)
defineExpose({
  title,index
})
</script>
