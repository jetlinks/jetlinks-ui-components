<template>
    <div>
        {{props.childe}}
        <table style="width: 100%" >
        
            <draggable :list="dataSource" :animation="300" @end='move'>
                <!-- 表头 -->
                <template #header>
                    <tr class="header">
                        <th v-if="Serial" :style="props.border!=undefined?'border:1px solid #eee':''"><div  style="width:50px;height:100%;"> 序号 </div></th>
                        <th v-for="item in columns" :key="item"  :style="props.border!=undefined?'border:1px solid #eee':''">
                            <div style="height:100%">{{ item.title }}</div>
                        </th>
                    </tr>
                </template>
                <template #item="{ element,index }">
                    <tr @click="onRow(index)"  >
                        <td  v-if="Serial"  :style="props.border!=undefined?'border:1px solid #eee':''"><div>{{index+1}}</div></td>
                        <td 
                            v-for="(item,i) in columns"
                            :key="item"
                            :style="[props.border!=undefined?'border:1px solid #eee;':'']+'width:'+[item.width?item.width:100]+'vw;'"
                        >
                            <!-- 插槽 -->
                            <div>
                                <!-- <j-from-item :name='[element, index, ]'> -->
                                    <slot :name="item.slot" :data='{element,index}'></slot>
                                <!-- </j-from-item> -->
                            </div>
                            <div v-if="!item.slot" style="height:100%">
                                <!-- 默认输出文本 -->
                                <div v-if="item.type == 'text'||endRow!=index||!item.type">
                                        {{element[item.dataIndex]}}
                                </div>
                                <!-- 文本 -->
                                <div v-if="item.type == 'index'&& endRow==index">
                                    <j-input v-model:value="element[item.dataIndex]"  @blur="addList" style="width:100px" />
                                </div>
                                <div v-if="item.type == 'NumberIndex'&& endRow==index">
                                    <j-input-number v-model:value="element[item.dataIndex]"  @blur="addList" style="width:100px" />
                                </div>
                                <!-- 填写约束 -->
                                <div v-if="item.type == 'select'&& endRow==index">
                                    <j-select value="必填" style="width:100px">
                                        <j-select-option value="必填" >必填</j-select-option>
                                        <j-select-option value="非必填" >非必填</j-select-option>
                                    </j-select>
                                </div>
                                <!-- 数据类型 -->
                                <div v-if="item.type == 'TypeSelect'&& endRow==index">
                                    <j-select :value="valueType" v-model:value="valueType"  style="width:100px">
                                        <j-select-option :value="item" v-for="item in typeList" :key="item">
                                            {{item}}
                                        </j-select-option>
                                    </j-select>
                                </div>
                                <!-- 其他配置 -->
                                <div v-if="item.type == 'config'&& endRow==index" style="">
                                    <div class="configDiv" v-if="valueType">
                                        <div class="configText">
                                            {{element[item.dataIndex]}}
                                        </div>
                                        <a-popconfirm 
                                            ok-text="完成" placement="bottomRight" @confirm='onConfig'
                                            cancel-text="取消" icon=" " :overlayStyle="{ width: '800px' }"
                                        >   
                                            <template #title>
                                                <!-- {{element}} -->
                                                <Integer v-if="valueType=='int'||valueType=='long'" :configData='element' :configIndex="index" ref="stringConfig"></Integer>
                                                <Double  v-if="valueType=='double'||valueType=='float'" :configData='element' :configIndex="index" ref="stringConfig"></Double>
                                                <String  v-if="valueType=='text'||valueType=='password'" :configData='element' :configIndex="index" ref="stringConfig"></String>
                                                <Boolean v-if="valueType=='boolean'" :configData='element' :configIndex="index" ref="stringConfig"></Boolean>
                                                <Enum  v-if="valueType=='enum'" :configData='element' :configIndex="index" ref="stringConfig"></Enum>
                                                <ObjectText  v-if="valueType=='object'"  :configData='element' :configIndex="index" ref="stringConfig"
                                                 :columns='columns'></ObjectText>
                                                <Array  v-if="valueType=='array'" :configData='element' :configIndex="index" ref="stringConfig"></Array>
                                                <File  v-if="valueType=='file'"  :configData='element' :configIndex="index" ref="stringConfig"></File>
                                                <Date  v-if="valueType=='date'"  :configData='element' :configIndex="index" ref="stringConfig"></Date>
                                            </template>
                                            <div style="float:right;"><AIcon class="configImg" style="" type="EditTwoTone"/></div>
                                        </a-popconfirm>
                                    </div>
                                    <div v-else>空</div>
                                </div>
                                    
 
                            </div>
                        </td>
                    </tr>   
                </template>
            </draggable>
        </table>
    </div>
</template>
<script lang="ts" setup name="JDataTable">
import { onMounted, PropType, ref, getCurrentInstance } from 'vue';
import { DataEntryData } from './typing';
import draggable from 'vuedraggable';
import { text } from 'stream/consumers';

import Integer from './components/Integer'
import Double from './components/Double'
import String from './components/String' //最大长度
import Boolean from './components/Boolean' //布尔值
import Enum from './components/Enum'   //枚举
import ObjectText from './components/Object'
import Array from './components/Array'
import File from './components/File'
import Date from './components/Date'

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
    border:{},
    childe:{},
});

const {proxy} = <any>getCurrentInstance()

const Serial=ref<any>(true) //是否开启序号
const typeList=ref([
    "int","long","double","float","text","boolean","enum","object","file","array","date","password","geoPoint",
])
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
        type: 'TypeSelect',
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

    // if(props.childe){  //子页面时没有object类型
    //     typeList.value=["int","long","double","float","text","boolean","enum","file","array","date","password","geoPoint",]
    // }
    
    dataSourceList.value.push(JSON.parse(JSON.stringify(dataSource.value))) //添加撤销初始数据

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
    e.preventDefault(); //禁用浏览器上下 
        if(endRow.value){
            var dataList=null
            dataList=dataSource.value[endRow.value-1]
            dataSource.value[endRow.value-1]=dataSource.value[endRow.value]
            dataSource.value[endRow.value]=dataList
            endRow.value=endRow.value-1
        }
    }
    if(e.keyCode==40){  //下
    e.preventDefault(); //禁用浏览器上下 
        if(endRow.value==0||endRow.value&&endRow.value!=dataSource.value.length-1){
            var dataList=null
            dataList=dataSource.value[endRow.value+1]
            dataSource.value[endRow.value+1]=dataSource.value[endRow.value]
            dataSource.value[endRow.value]=dataList
            endRow.value=endRow.value+1
        }
    }
}

const valueType=ref<any>()

const stringConfig=ref()
const onConfig=()=>{  //其他配置保存
    if(valueType.value=='enum'){
        stringConfig.value[0].addList()
    }
    dataSource.value[stringConfig.value[0].index]=stringConfig.value[0].title
    addList() //Ctrl+Z添加
}

</script>

<style scoped>
.header {
    background-color: #f9f9f9;
}
td,th {
    height: 50px;
    border-bottom: 1px solid #f3f3f3;
    /* overflow: hidden; */
}
th>div{display: flex;justify-content: center;align-items: center;}
td>div{display: flex;justify-content: center;align-items: center;}
td>div>div{width:100%;text-align: center;}
.configDiv{display: flex;justify-content: space-between;padding: 0 10px;align-items: center;}
.configText{padding: 4px;background-color:#F0E68C;border-radius: 5px;}
.configImg{font-size:20px;border-radius: 5px;}
</style>
