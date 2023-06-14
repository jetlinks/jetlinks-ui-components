<template>
    <div>
        <table style="width: 100%">
            <draggable :list="dataSource" :animation="300" @end='move'>
                <!-- 表头 -->
                <template #header>
                    <tr class="header">
                        <th v-if="Serial"><div  style="width:30px">序号</div></th>
                        <th v-for="item in columns" :key="item">
                            {{ item.title }}
                        </th>
                    </tr>
                </template>
                <!-- 表内容 -->
                <template #item="{ element,index }">
                    <tr @click="onRow(index)"  >
                        <td  v-if="Serial"><div>{{index+1}}</div></td>
                        <td
                            v-for="(item,i) in columns"
                            :key="item"
                            :style="'width:'+[item.width?item.width:100]+'vw'"
                        >
                            <!-- 插槽 -->
                            <div>
                                <slot :name="item.slot" :data='{element,index}'></slot>
                            </div>
                            <div v-if="!item.slot" style="height:100%">
                                <!-- 默认输出文本 -->
                                <div v-if="item.type == 'text'||endRow!=index||!item.type">
                                        {{element[item.dataIndex]}}
                                </div>
                                <!-- 功能type -->
                                <div v-if="item.type == 'index'&& endRow==index">
                                    <j-input placeholder="Basic usage" v-model:value="element[item.dataIndex]"  @blur="addList"/>
                                </div>
                                <div v-if="item.type == 'select'&& endRow==index">
                                    <j-select value="jack" @click="offRow()">
                                        <j-select-option value="jack">Jack</j-select-option>
                                        <j-select-option value="lucy">Lucy</j-select-option>
                                    </j-select>
                                </div>
                            </div>
                        </td>
                    </tr>
                </template>
            </draggable>
        </table>
        <Integer></Integer>
    </div>
</template>
<script lang="ts" setup name="JDataTable">
import { onMounted, PropType, ref } from 'vue';
import { DataEntryData } from './typing';
import draggable from 'vuedraggable';
import { text } from 'stream/consumers';


const props = defineProps({
    data: {
        type: Array as PropType<DataEntryData[]>,
        default: null,
    },
    columns:{
        type:Object,
        default: null,
    },
    newSource:{},
    serial:{},
});
const Serial=ref<any>(true) //是否开启序号
const columns = ref<any>([
    {
        title: 'name',
        dataIndex: 'name',
        width: '100',
        type: 'text',
    },
    {
        title: 'age',
        dataIndex: 'age',
        width: '100',
        type: 'index',
    },
    {
        title: 'width',
        dataIndex: 'width',
        width: '100',
        type: 'select',
    },
]);
//  type为列的数据类型  width为列的宽度默认以100为基数，若要宽度为两倍则写200
const dataSource = ref<any>(); //展示数据
const dataSourceList = ref([]);  //用来撤销的数据
const newSource = ref([  //初始数据
    { name: 111, age: 18, width: 150 },
    { name: 222, age: 21, width: 160 },
    { name: 333, age: 21, width: 160 },
    { name: 444, age: 21, width: 160 },
]);
const endRow=ref<number>()
const onRow=(data:any)=>{
        endRow.value=data
}
const offRow=()=>{

}
onMounted(() => {
    //参数引入初始化
    if(props.newSource){
        columns.value=props.columns  
        dataSource.value=props.newSource
        Serial.value=props.serial
    }else{
        dataSource.value=newSource.value
    }

    // dataSourceList.value.push(dataSource.value) //给Ctrl+Z添加初始数据
    console.log('*******123*******')
    console.log(dataSource.value)
    // console.log(JSON.stringify(dataSource.value))
    // dataSourceList.value.push(JSON.parse(JSON.stringify(dataSource.value)))

    window.addEventListener("keydown", KeyDown, true); //开启键盘监听
    document.addEventListener('keydown', function(event) {   //数据撤销 Ctrl+Z
        if (event.ctrlKey && event.key === 'z'&&dataSourceList.value.length>1) {
            dataSourceList.value.pop();
            dataSource.value=JSON.parse(JSON.stringify(dataSourceList.value[dataSourceList.value.length-1]))   
        }
    });

});
const move=(e)=>{ //拖拽时动态改变编辑的行位置
    if(e.oldIndex-1==endRow.value){
        endRow.value=e.newIndex-1
    }  
    else if(e.newIndex>=endRow.value+1 && e.newIndex>e.oldIndex){
        endRow.value=endRow.value-1
    } 
    else if(e.newIndex<=endRow.value+1 && e.newIndex<e.oldIndex){
        endRow.value=endRow.value+1
    }  
}
const addList=()=>{
    if(JSON.stringify(dataSource.value) != JSON.stringify(dataSourceList.value[dataSourceList.value.length-1])){
        if(dataSourceList.value.length<19){ //超过20个数组删除第一个
            dataSourceList.value.push(JSON.parse(JSON.stringify(dataSource.value)))  //深拷贝 
        }else{
            dataSourceList.value=dataSourceList.value.slice(1)
            dataSourceList.value.push(JSON.parse(JSON.stringify(dataSource.value)))  //深拷贝 
        }
    }
    
    endRow.value=null
}
const KeyDown=(e:any)=>{
    if(e.keyCode==13){  //回车
        addList()
    }
    if(e.keyCode==38){  //上
        if(endRow.value){
            var dataList=null
            dataList=dataSource.value[endRow.value-1]
            dataSource.value[endRow.value-1]=dataSource.value[endRow.value]
            dataSource.value[endRow.value]=dataList
            endRow.value=endRow.value-1
        }
    }
    if(e.keyCode==40){  //下
        if(endRow.value==0||endRow.value&&endRow.value!=dataSource.value.length-1){
            var dataList=null
            dataList=dataSource.value[endRow.value+1]
            dataSource.value[endRow.value+1]=dataSource.value[endRow.value]
            dataSource.value[endRow.value]=dataList
            endRow.value=endRow.value+1
        }
    }
}


</script>

<style scoped>
.header {
    background-color: #f9f9f9;
}
td,th {
    height: 50px;
    border-bottom: 1px solid #f3f3f3;   
}
td>div{display: flex;justify-content: center;align-items: center;}
</style>
