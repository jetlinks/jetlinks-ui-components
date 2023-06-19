<template>
    <div>
        <DataTable  :columns='props.columns' :serial="true" :newSource="newSource" :childe="true" border></DataTable>
    </div>
</template>

<script setup lang="ts" name="Object">
import DataTable from '../../dataTable.vue'
import { onMounted, reactive, ref } from "vue";
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

onMounted(() => {
    console.log('props.columns******************')
    // console.log(props.columns)
})

const newSource = ref([  //初始数据
    { name: 1, age: 18, width: 150 },
    { name: 2, age: 21, width: 160 },
    { name: 3, age: 21, width: 160 },
    { name: 4, age: 21, width: 160 },
])
</script>

<style scoped>

</style>