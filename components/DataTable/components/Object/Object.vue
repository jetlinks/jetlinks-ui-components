<template>
    <div>
        <DataTable  :columns='props.columns' :serial="true" :newSource="newSource" :childe="true" border></DataTable>
        <a-button @click="addList">添加</a-button>
    </div>
</template>

<script setup lang="ts" name="Object">
import DataTable from '../../dataTable.vue'
import { onMounted, reactive, Ref, ref } from "vue";
const props = defineProps({
    configData:{    
        type:Object,
        default: null,
    },
    configIndex:{
        type:Number,
        default: null,
    },
    columns:{
        type:Object,
        default: null,
    }
});
interface obj {
    [idx: string]: any
}
const title =  JSON.parse(JSON.stringify({...props.configData}))
const newSource= ref(title.config?title.config:title.config=[]) //将null类型转为数组
const listSource:obj={}
onMounted(() => {
    for(var i of props.columns){
        var name=i.dataIndex
        listSource[name]=null
    }
})

const addList=()=>{
    newSource.value.push(listSource)
}
const index=ref(props.configIndex)
defineExpose({
  title,index
})
</script>

<style scoped>

</style>
