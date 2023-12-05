<docs>
---
order: 0
title: 基本用法
---

基本用法, 简单的json输入

</docs>
<template>
    <div style="height: 300px">
        <j-monaco-editor
            v-model="value"
            ref="monaco"
            :init="init"
            @errorChange="errorChange"
            @focus="focus"
        />
        <j-button @click="insert">插入</j-button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRaw } from 'vue';
export default defineComponent({
    setup() {
        const value = ref<string>(
            `{ "name": "string", "object": { "code": 12}}`,
        );
        const _instance = ref();
        const monaco = ref();

        const focus = () => {
            console.log('focus');
        };

        const init = (instance) => {
            console.log(instance);
            _instance.value = instance;

            setTimeout(() => {
                //                 value.value = `{ "message": "success", "result": { "code": 200,
                //         "data": {
                //             "message": "success",
                //             "result": {
                //                 "pageIndex": 0,
                //                 "pageSize": 25,
                //                 "total": 1027,
                //                 "data": [
                //                     {
                //                         "id": "1548503768183234560",
                //                         "path": "ctyv",
                //                         "sortIndex": 2,
                //                         "level": 1,
                //                         "name": "系统素材",
                //                         "folder": true,
                //                         "iconUrl": "icon-xitongsucai",
                //                         "type": {
                //                             "text": "图片",
                //                             "value": "material_img"
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680487556710,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680487556710
                //                     },
                //                     {
                //                         "id": "1548503743399092224",
                //                         "path": "8Uj1",
                //                         "sortIndex": 1,
                //                         "level": 1,
                //                         "name": "我的素材",
                //                         "folder": true,
                //                         "iconUrl": "icon-wodesucai",
                //                         "type": {
                //                             "text": "图片",
                //                             "value": "material_img"
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680487556704,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680487556704
                //                     },
                //                     {
                //                         "id": "1548504290101452800",
                //                         "path": "6vsY",
                //                         "sortIndex": 2,
                //                         "level": 1,
                //                         "name": "图表组件",
                //                         "folder": true,
                //                         "iconUrl": "icon-tubiao",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377125,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377125
                //                     },
                //                     {
                //                         "id": "1548504247491518464",
                //                         "path": "ReVJ",
                //                         "sortIndex": 1,
                //                         "level": 1,
                //                         "name": "基础组件",
                //                         "folder": true,
                //                         "iconUrl": "icon-jichu",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377039,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377039
                //                     },
                //                     {
                //                         "id": "1548504306668953600",
                //                         "path": "KzDD",
                //                         "sortIndex": 3,
                //                         "level": 1,
                //                         "name": "我的组件",
                //                         "folder": true,
                //                         "iconUrl": "icon-wodezujian",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377039,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377039
                //                     },
                //                     {
                //                         "id": "1548503743399092233",
                //                         "path": "2a51",
                //                         "sortIndex": 3,
                //                         "level": 1,
                //                         "name": "我的三维模型",
                //                         "folder": true,
                //                         "iconUrl": "icon-sandi",
                //                         "type": {
                //                             "text": "3d模型",
                //                             "value": "material_model3d"
                //                         },
                //                         "del": false,
                //                         "createTime": 1658027036891,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1676256797940
                //                     },
                //                     {
                //                         "id": "1555504702849585152",
                //                         "parentId": "1548504290101452800",
                //                         "path": "6vsY-j1hb",
                //                         "sortIndex": 19,
                //                         "level": 2,
                //                         "name": "地图",
                //                         "folder": true,
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "explain": "地图",
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377126,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377126
                //                     },
                //                     {
                //                         "id": "1555507733477494784",
                //                         "parentId": "1555504702849585152",
                //                         "path": "6vsY-j1hb-XYaf",
                //                         "sortIndex": 1,
                //                         "level": 3,
                //                         "name": "系列分布地图",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Series-distribution-map.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "explain": "伪3D地图",
                //                         "data": {
                //                             "visible": true,
                //                             "code": "pseudo3d",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "name": "系列分布地图",
                //                             "optionData": {
                //                                 "name": [
                //                                     "湖北",
                //                                     "湖南",
                //                                     "四川",
                //                                     "重庆",
                //                                     "山东"
                //                                 ],
                //                                 "dimension": [
                //                                     31.42,
                //                                     27,
                //                                     30.630737,
                //                                     30.630737,
                //                                     36.22
                //                                 ],
                //                                 "value": [
                //                                     2000,
                //                                     200000,
                //                                     5000,
                //                                     60000,
                //                                     20050
                //                                 ],
                //                                 "longitude": [
                //                                     113.289984,
                //                                     112.03042,
                //                                     102.112035,
                //                                     108.112035,
                //                                     118.19
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "background",
                //                                 "mapConfig"
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377125,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377125
                //                     },
                //                     {
                //                         "id": "1555504668007501824",
                //                         "parentId": "1548504290101452800",
                //                         "path": "6vsY-48z1",
                //                         "sortIndex": 13,
                //                         "level": 2,
                //                         "name": "进度条",
                //                         "folder": true,
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "explain": "进度条",
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377126,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377126
                //                     },
                //                     {
                //                         "id": "1626518534985277440",
                //                         "parentId": "1555504668007501824",
                //                         "path": "6vsY-48z1-CMNG",
                //                         "sortIndex": 4,
                //                         "level": 3,
                //                         "name": "预值进度条",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Pre-value-progress-bar.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "prevalueProgressChart",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             30
                //                                         ]
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "progressBar",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "进度",
                //                                     "id": 1
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377039,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377039
                //                     },
                //                     {
                //                         "id": "1627595014942257152",
                //                         "parentId": "1555504668007501824",
                //                         "path": "6vsY-48z1-YZvQ",
                //                         "sortIndex": 6,
                //                         "level": 3,
                //                         "name": "圆环进度条",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Ring-progress-bar.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "ringProgress",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             30
                //                                         ]
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "progressBar",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "进度",
                //                                     "id": 1
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377039,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377039
                //                     },
                //                     {
                //                         "id": "1626475793957969920",
                //                         "parentId": "1555504668007501824",
                //                         "path": "6vsY-48z1-ckcE",
                //                         "sortIndex": 2,
                //                         "level": 3,
                //                         "name": "基础进度条2",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Basic-progress-bar-2.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "progress2Chart",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             30
                //                                         ]
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "progressBar",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "进度",
                //                                     "id": 1
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377062,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377062
                //                     },
                //                     {
                //                         "id": "1626483832840708096",
                //                         "parentId": "1555504668007501824",
                //                         "path": "6vsY-48z1-A9FP",
                //                         "sortIndex": 3,
                //                         "level": 3,
                //                         "name": "基础进度条3",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Basic-progress-bar-3.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "progress3Chart",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             30
                //                                         ]
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "progressBar",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "进度",
                //                                     "id": 1
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377099,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377099
                //                     },
                //                     {
                //                         "id": "1555507146119745536",
                //                         "parentId": "1555504668007501824",
                //                         "path": "6vsY-48z1-UpqC",
                //                         "sortIndex": 5,
                //                         "level": 3,
                //                         "name": "电量进度条",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Power-progress-bar.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "explain": "电量进度条",
                //                         "data": {
                //                             "visible": true,
                //                             "code": "powerBarChart",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "name": "电量进度条",
                //                             "optionData": {
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             30
                //                                         ]
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "progressBar",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "进度",
                //                                     "id": 1
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377125,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377125
                //                     },
                //                     {
                //                         "id": "1555504628824313856",
                //                         "parentId": "1548504290101452800",
                //                         "path": "6vsY-BXUP",
                //                         "sortIndex": 18,
                //                         "level": 2,
                //                         "name": "漏斗图",
                //                         "folder": true,
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "explain": "漏斗图",
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377126,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377126
                //                     },
                //                     {
                //                         "id": "1628678537838788608",
                //                         "parentId": "1555504628824313856",
                //                         "path": "6vsY-BXUP-2pPf",
                //                         "sortIndex": 2,
                //                         "level": 3,
                //                         "name": "基础漏斗图2",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Foundation-funnel-diagram.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "funnel2Chart",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             {
                //                                                 "name": "A",
                //                                                 "value": 60
                //                                             },
                //                                             {
                //                                                 "name": "B",
                //                                                 "value": 30
                //                                             },
                //                                             {
                //                                                 "name": "D",
                //                                                 "value": 100
                //                                             },
                //                                             {
                //                                                 "name": "E",
                //                                                 "value": 40
                //                                             },
                //                                             {
                //                                                 "name": "F",
                //                                                 "value": 80
                //                                             }
                //                                         ]
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "legend",
                //                                 "funnel",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "值",
                //                                     "id": 1
                //                                 },
                //                                 {
                //                                     "name": "分类",
                //                                     "id": 2
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377040,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377040
                //                     },
                //                     {
                //                         "id": "1555504586788999168",
                //                         "parentId": "1548504290101452800",
                //                         "path": "6vsY-wc5L",
                //                         "sortIndex": 15,
                //                         "level": 2,
                //                         "name": "波纹图",
                //                         "folder": true,
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "explain": "波纹图",
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377126,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377126
                //                     },
                //                     {
                //                         "id": "1628314193609424896",
                //                         "parentId": "1555504586788999168",
                //                         "path": "6vsY-wc5L-pvMK",
                //                         "sortIndex": 3,
                //                         "level": 3,
                //                         "name": "水波图3",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/waterimg3.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "liquidChart3",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "series": [
                //                                     {
                //                                         "data": 65
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "rangeLimit",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "波纹图",
                //                                     "id": 1
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377053,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377053
                //                     },
                //                     {
                //                         "id": "1628313799470678016",
                //                         "parentId": "1555504586788999168",
                //                         "path": "6vsY-wc5L-Mta8",
                //                         "sortIndex": 2,
                //                         "level": 3,
                //                         "name": "水波图2",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/waterimg2.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "liquidChart2",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "series": [
                //                                     {
                //                                         "data": 65
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "rangeLimit",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "波纹图",
                //                                     "id": 1
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377053,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377053
                //                     },
                //                     {
                //                         "id": "1555504482392772608",
                //                         "parentId": "1548504290101452800",
                //                         "path": "6vsY-fANg",
                //                         "sortIndex": 17,
                //                         "level": 2,
                //                         "name": "雷达图",
                //                         "folder": true,
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "explain": "雷达图",
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377126,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377126
                //                     },
                //                     {
                //                         "id": "1628659409384046592",
                //                         "parentId": "1555504482392772608",
                //                         "path": "6vsY-fANg-toM2",
                //                         "sortIndex": 3,
                //                         "level": 3,
                //                         "name": "区域雷达面积图",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Regional-rada-area-map.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "regionalRadarChart",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "radar": {
                //                                     "indicator": [
                //                                         {
                //                                             "max": 100,
                //                                             "name": "销售"
                //                                         },
                //                                         {
                //                                             "max": 100,
                //                                             "name": "管理"
                //                                         },
                //                                         {
                //                                             "max": 100,
                //                                             "name": "信息技术"
                //                                         },
                //                                         {
                //                                             "max": 100,
                //                                             "name": "客服"
                //                                         },
                //                                         {
                //                                             "max": 100,
                //                                             "name": "研发"
                //                                         },
                //                                         {
                //                                             "max": 100,
                //                                             "name": "市场"
                //                                         }
                //                                     ]
                //                                 },
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             {
                //                                                 "name": "预算分配",
                //                                                 "value": [
                //                                                     44,
                //                                                     10,
                //                                                     24,
                //                                                     35,
                //                                                     50,
                //                                                     19
                //                                                 ]
                //                                             },
                //                                             {
                //                                                 "name": "实际开销",
                //                                                 "value": [
                //                                                     4,
                //                                                     12,
                //                                                     26,
                //                                                     31,
                //                                                     42,
                //                                                     21
                //                                                 ]
                //                                             }
                //                                         ]
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "rangeLimit",
                //                                 "radar",
                //                                 "legend",
                //                                 "themeColor"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "值",
                //                                     "id": 1
                //                                 },
                //                                 {
                //                                     "name": "分类",
                //                                     "id": 2
                //                                 },
                //                                 {
                //                                     "name": "维度",
                //                                     "id": 3
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377099,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377099
                //                     },
                //                     {
                //                         "id": "1555504353053020160",
                //                         "parentId": "1548504290101452800",
                //                         "path": "6vsY-5fIt",
                //                         "sortIndex": 11,
                //                         "level": 2,
                //                         "name": "折线图",
                //                         "folder": true,
                //                         "iconUrl": "",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "explain": "折线图",
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377126,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377126
                //                     },
                //                     {
                //                         "id": "1625735003288850432",
                //                         "parentId": "1555504353053020160",
                //                         "path": "6vsY-5fIt-7OHB",
                //                         "sortIndex": 3,
                //                         "level": 3,
                //                         "name": "阶梯折线图",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/Step-Line.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "lineLadderChart",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "xAxis": [
                //                                     "周一",
                //                                     "周二",
                //                                     "周三",
                //                                     "周四",
                //                                     "周五"
                //                                 ],
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             10,
                //                                             20,
                //                                             60,
                //                                             12,
                //                                             4
                //                                         ],
                //                                         "name": "2021访问量",
                //                                         "type": "line"
                //                                     },
                //                                     {
                //                                         "data": [
                //                                             10,
                //                                             20,
                //                                             60,
                //                                             12,
                //                                             4
                //                                         ],
                //                                         "name": "2022访问量",
                //                                         "type": "line"
                //                                     },
                //                                     {
                //                                         "data": [
                //                                             10,
                //                                             20,
                //                                             60,
                //                                             12,
                //                                             4
                //                                         ],
                //                                         "name": "2023访问量",
                //                                         "type": "line"
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "xAxis",
                //                                 "yAxis",
                //                                 "legend",
                //                                 "brokenline",
                //                                 "themeColor",
                //                                 "dynamicEffect"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "折线",
                //                                     "id": 1
                //                                 },
                //                                 {
                //                                     "name": "x轴",
                //                                     "id": 2
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377061,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377061
                //                     },
                //                     {
                //                         "id": "1625700794750947328",
                //                         "parentId": "1555504353053020160",
                //                         "path": "6vsY-5fIt-xxmX",
                //                         "sortIndex": 2,
                //                         "level": 3,
                //                         "name": "堆叠面积图",
                //                         "folder": false,
                //                         "iconUrl": "/api/upload/system-img/comp/stacking-area.svg",
                //                         "type": {
                //                             "text": "组件",
                //                             "value": "material_component"
                //                         },
                //                         "data": {
                //                             "visible": true,
                //                             "code": "lineStackChart",
                //                             "otherTabConfig": [
                //                                 "dataSourceConfig"
                //                             ],
                //                             "optionData": {
                //                                 "xAxis": [
                //                                     "周一",
                //                                     "周二",
                //                                     "周三",
                //                                     "周四",
                //                                     "周五"
                //                                 ],
                //                                 "series": [
                //                                     {
                //                                         "data": [
                //                                             10,
                //                                             20,
                //                                             60,
                //                                             12,
                //                                             4
                //                                         ],
                //                                         "name": "2021访问量",
                //                                         "type": "line"
                //                                     },
                //                                     {
                //                                         "data": [
                //                                             10,
                //                                             20,
                //                                             60,
                //                                             12,
                //                                             4
                //                                         ],
                //                                         "name": "2022访问量",
                //                                         "type": "line"
                //                                     },
                //                                     {
                //                                         "data": [
                //                                             10,
                //                                             20,
                //                                             60,
                //                                             12,
                //                                             4
                //                                         ],
                //                                         "name": "2023访问量",
                //                                         "type": "line"
                //                                     }
                //                                 ]
                //                             },
                //                             "config": [
                //                                 "titleConfig",
                //                                 "background",
                //                                 "xAxis",
                //                                 "yAxis",
                //                                 "legend",
                //                                 "brokenline",
                //                                 "themeColor",
                //                                 "dynamicEffect"
                //                             ],
                //                             "option": [
                //                                 {
                //                                     "name": "折线",
                //                                     "id": 1
                //                                 },
                //                                 {
                //                                     "name": "x轴",
                //                                     "id": 2
                //                                 }
                //                             ]
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680250377061,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680250377061
                //                     },
                //                     {
                //                         "id": "1555458433771143168",
                //                         "parentId": "1548503768183234560",
                //                         "path": "ctyv-OlKR",
                //                         "sortIndex": 1,
                //                         "level": 2,
                //                         "name": "样式",
                //                         "folder": true,
                //                         "type": {
                //                             "text": "图片",
                //                             "value": "material_img"
                //                         },
                //                         "del": false,
                //                         "creatorId": "1199596756811550720",
                //                         "creatorName": "超级管理员",
                //                         "createTime": 1680487556712,
                //                         "modifierId": "1199596756811550720",
                //                         "modifierName": "超级管理员",
                //                         "modifyTime": 1680487556712
                //                     }
                //                 ]
                //             },
                //             "status": 200,
                //             "timestamp": 1689582840424
                //         }
                //     },
                //     "status": 200,
                //     "timestamp": 1689582840426
                // }`;
            }, 3000);
        };

        const insert = () => {
            const model = toRaw(_instance.value).getModel();
            const lastLine = model.getLineCount();
            const lastColumn = model.getLineMaxColumn(lastLine);
            const positionNew = { lineNumber: lastLine, column: lastColumn };

            toRaw(_instance.value).focus();
            monaco.value.insert('123123', positionNew);
        };

        const errorChange = (msg) => {
            console.log(msg);
        };

        return {
            errorChange,
            value,
            init,
            focus,
            insert,
            monaco,
        };
    },
});
</script>
