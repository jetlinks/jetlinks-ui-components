<docs>
---
order: 2
iframe: 600
iframePath: Top
title: 固定顶部
---

一般用于固定顶部导航，方便页面切换

</docs>
<template>
    <div class="content">
        <j-pro-layout
            v-model:collapsed="baseState.collapsed"
            v-model:selectedKeys="baseState.selectedKeys"
            v-model:openKeys="baseState.openKeys"
            v-bind="state"
            style="min-height: 600px"
        >
            <j-page-container
                title="Page 1"
                sub-title="is a sub-title."
                :tabList="pageState.tabList"
                :tabActiveKey="pageState.active"
                @tabChange="onTabChange"
            >
                <template v-if="pageState.active === 'tab1'">
                    <div>tab1</div>
                </template>
                <template v-else-if="pageState.active === 'tab2'">
                    <div>tab2</div>
                </template>
                <template v-else>
                    <div>tab3</div>
                </template>
            </j-page-container>
        </j-pro-layout>
    </div>
</template>

<script>
import { reactive, defineComponent } from 'vue';
import Menus from './menuData';
export default defineComponent({
    name: 'Top',
    setup() {
        const baseState = reactive({
            selectedKeys: ['/admin', '/admin/sub-page1'],
            openKeys: ['/admin'],
            // default
            collapsed: false,
        });

        const state = reactive({
            menuData: Menus,
            layout: 'top',
        });

        const pageState = reactive({
            tabList: [
                {
                    tab: 'tab1',
                    key: 'tab1',
                },
                {
                    tab: 'tab2',
                    key: 'tab2',
                },
                {
                    tab: 'tab3',
                    key: 'tab3',
                },
            ],
            active: 'tab1',
        });

        const onTabChange = (key) => {
            pageState.active = key;
        };

        return {
            state,
            baseState,
            pageState,
            onTabChange,
        };
    },
});
</script>
<style lang="less">
.content {
    min-height: 600px;
    > div {
        min-height: 100%;
    }
}
</style>
