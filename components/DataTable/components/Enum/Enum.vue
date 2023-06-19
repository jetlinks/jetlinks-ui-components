<template>
    <j-form-item label="枚举项" required>
        <j-radio-group v-model:value="type"  button-style="solid">
            <j-space>
              <j-radio-button value="1">仅单选</j-radio-button>
              <j-radio-button value="2">支持多选</j-radio-button>
            </j-space>
        </j-radio-group>
        <Table :source="source" ref="list"/>
    </j-form-item>
</template>

<script setup lang="ts" name="Enum">
import { onBeforeMount, onUnmounted, reactive, ref } from "vue";
import Table from './Table.vue';

const props = defineProps({
    source: {
        type: Array,
        default: () => [],
    },
    configData:{    
        type:Object,
        default: null,
    },
    configIndex:{
        type:Number,
        default: null,
    }
});
const type = ref('1')

const list=ref()
const addList=()=>{
    title.config={enum:list.value.source}
}

const title=reactive( JSON.parse(JSON.stringify({...props.configData})) )


const index=ref(props.configIndex)
defineExpose({
  title,index,addList
})
</script>

<style scoped></style>
