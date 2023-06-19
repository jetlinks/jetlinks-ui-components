<template>
<<<<<<< HEAD
    <div>
=======
    <div class="data-table">
        {{props.childe}}
        <Form :model="form">
>>>>>>> d24605fb21716dd3b08e7202b11ae9aca0c3ad2b
        <table style="width: 100%" >
        
            <draggable :list="form.table" :animation="300" @end='move'>
                <!-- 表头 -->
                <template #header>
                  <thead>
                    <tr class="data-table--header">
                        <th v-if="Serial" :class="borderClass"><div style="width:64px;height:100%;"> 序号 </div></th>
                        <th v-for="item in columns" :key="item" :class="borderClass">
                            <div style="height:100%">{{ item.title }}</div>
                        </th>
                    </tr>
                  </thead>
                </template>
                <template #item="{ element,index }">
                  <tbody>
                    <tr @click="onRow(index)"  >
                        <td  v-if="Serial" :class="borderClass"><div>{{index+1}}</div></td>
                        <td
                            v-for="(item,i) in columns"
                            :key="item"
                            :class="borderClass"
                            :style="`width:${item.width || 100 }vw`"
                        >
                          <FormItem :name='["table", index, item.dataIndex]' :rules="item.form?.rules || []">
                              <!-- 插槽 -->
                              <div v-if="item.slot">
                                <slot :name="item.slot" :data='{element,index}'></slot>
                              </div>
                              <div v-else>
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
                                      <div class="data-table-config" v-if="valueType">
                                          <div class="data-table-config--text">
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
                                              <div style="float:right;"><AIcon class="data-table-config--icon" style="" type="EditTwoTone"/></div>
                                          </a-popconfirm>
                                      </div>
                                      <div v-else>空</div>
                                  </div>
                              </div>
                          </FormItem>
                        </td>
                    </tr>
                  </tbody>
                </template>
            </draggable>
        </table>
        </Form>
    </div>
</template>
<script lang="ts" setup name="JDataTable">
import {onMounted, PropType, ref, getCurrentInstance, reactive, computed} from 'vue';
import type { DataEntryData, DataTableColumnsType } from './typing';
import draggable from 'vuedraggable';
import { text } from 'stream/consumers';

import ObjectText from './components/Object'
<<<<<<< HEAD
import {Integer,Double,String,Boolean,Enum,Array,File,Date} from './components'
=======
import Array from './components/Array'
import File from './components/File'
import Date from './components/Date'
import TypeData from './components/Type/data'
import Form, { FormItem } from '../Form'
>>>>>>> d24605fb21716dd3b08e7202b11ae9aca0c3ad2b

const props = defineProps({
    data: {
        type: Array as PropType<DataEntryData[]>,
        default: null,
    },
    columns:{ },
    newSource:{},
    serial:{},
    border:{},
    childe:{},
});

const {proxy} = <any>getCurrentInstance()

const Serial=ref<any>(true) //是否开启序号
const typeList=ref(TypeData.map(item => item.value))
const columns = ref<any[]>([
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

const borderClass = computed(() => {
  return {
    'data-table--border': props.border !== false // 默认有
  }
})

//  表单值
const form = reactive({
  table: []
})
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
<<<<<<< HEAD
        dataSourceList.value.push(JSON.parse(JSON.stringify(dataSource.value))) //添加撤销初始数据
    }else{
        // dataSource.value=newSource.value
=======
        form.table = props.newSource as any[]
    }else{
      form.table=newSource.value
>>>>>>> d24605fb21716dd3b08e7202b11ae9aca0c3ad2b
    }

    // if(props.childe){  //子页面时没有object类型
    //     typeList.value=["int","long","double","float","text","boolean","enum","file","array","date","password","geoPoint",]
    // }
    
<<<<<<< HEAD
   
=======
    dataSourceList.value.push(JSON.parse(JSON.stringify(form.table))) //添加撤销初始数据
>>>>>>> d24605fb21716dd3b08e7202b11ae9aca0c3ad2b

    window.addEventListener("keydown", KeyDown, true); //开启键盘监听
    document.addEventListener('keydown', function(event) {   //数据撤销 Ctrl+Z
        if (event.ctrlKey && event.key === 'z'&&dataSourceList.value.length>1) {
            dataSourceList.value.pop();
          form.table=JSON.parse(JSON.stringify(dataSourceList.value[dataSourceList.value.length-1]))
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
    if(JSON.stringify(form.table) != JSON.stringify(dataSourceList.value[dataSourceList.value.length-1])){
        if(dataSourceList.value.length<19){ //超过20个数组删除第一个
            dataSourceList.value.push(JSON.parse(JSON.stringify(form.table)))  //深拷贝
        }else{
            dataSourceList.value=dataSourceList.value.slice(1)
            dataSourceList.value.push(JSON.parse(JSON.stringify(form.table)))  //深拷贝
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
            dataList=form.table[endRow.value-1]
            form.table[endRow.value-1]=form.table[endRow.value]
            form.table[endRow.value]=dataList
            endRow.value=endRow.value-1
        }
    }
    if(e.keyCode==40){  //下
    e.preventDefault(); //禁用浏览器上下 
        if(endRow.value==0||endRow.value&&endRow.value!=form.table.length-1){
            var dataList=null
            dataList=form.table[endRow.value+1]
            form.table[endRow.value+1]=form.table[endRow.value]
            form.table[endRow.value]=dataList
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
<<<<<<< HEAD
    dataSource.value[stringConfig.value[0].index]=stringConfig.value[0].title
    console.log(stringConfig.value[0].title)
=======
    form.table[stringConfig.value[0].index]=stringConfig.value[0].title
>>>>>>> d24605fb21716dd3b08e7202b11ae9aca0c3ad2b
    addList() //Ctrl+Z添加
}

</script>
