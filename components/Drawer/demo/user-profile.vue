<docs>
---
order: 6
title: 信息预览抽屉
---

## zh-CN

需要快速预览对象概要时使用，点击遮罩区关闭。

</docs>

<template>
    <j-list
        :data-source="[
            {
                name: 'Lily',
            },
            {
                name: 'Lily',
            },
        ]"
        bordered
    >
        <template #renderItem="{ item }">
            <j-list-item :key="`j-${item.id}`">
                <template #actions
                    ><a @click="showDrawer">View Profile</a></template
                >
                <j-list-item-meta description="Progresser XTech">
                    <template #title>
                        <a href="https://www.antdv.com/">{{ item.name }}</a>
                    </template>
                    <template #avatar>
                        <j-avatar
                            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                        />
                    </template>
                </j-list-item-meta>
            </j-list-item>
        </template>
    </j-list>
    <j-drawer
        width="640"
        placement="right"
        :closable="false"
        :visible="visible"
        @close="onClose"
    >
        <p :style="[pStyle, pStyle2]">User Profile</p>
        <p :style="pStyle">Personal</p>
        <j-row>
            <j-col :span="12">
                <description-item title="Full Name" content="Lily" />
            </j-col>
            <j-col :span="12">
                <description-item
                    title="Account"
                    content="AntDesign@example.com"
                />
            </j-col>
        </j-row>
        <j-row>
            <j-col :span="12">
                <description-item title="City" content="HangZhou" />
            </j-col>
            <j-col :span="12">
                <description-item title="Country" content="China🇨🇳" />
            </j-col>
        </j-row>
        <j-row>
            <j-col :span="12">
                <description-item title="Birthday" content="February 2,1900" />
            </j-col>
            <j-col :span="12">
                <description-item title="Website" content="-" />
            </j-col>
        </j-row>
        <j-row>
            <j-col :span="12">
                <description-item
                    title="Message"
                    content="Make things as simple as possible but no simpler."
                />
            </j-col>
        </j-row>
        <j-divider />
        <p :style="pStyle">Company</p>
        <j-row>
            <j-col :span="12">
                <description-item title="Position" content="Programmer" />
            </j-col>
            <j-col :span="12">
                <description-item title="Responsibilities" content="Coding" />
            </j-col>
        </j-row>
        <j-row>
            <j-col :span="12">
                <description-item title="Department" content="XTech" />
            </j-col>
            <j-col :span="12">
                <description-item title="Supervisor">
                    <template #content><a>Lin</a></template>
                </description-item>
            </j-col>
        </j-row>
        <j-row>
            <j-col :span="24">
                <description-item
                    title="Skills"
                    content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                />
            </j-col>
        </j-row>
        <j-divider />
        <p :style="pStyle">Contacts</p>
        <j-row>
            <j-col :span="12">
                <description-item
                    title="Email"
                    content="ant-design-vue@example.com"
                />
            </j-col>
            <j-col :span="12">
                <description-item
                    title="Phone Number"
                    content="+86 181 0000 0000"
                />
            </j-col>
        </j-row>
        <j-row>
            <j-col :span="24">
                <description-item title="Github">
                    <template #content>
                        <a
                            href="https://github.com/vueComponent/ant-design-vue"
                        >
                            github.com/vueComponent/ant-design-vue
                        </a>
                    </template>
                </description-item>
            </j-col>
        </j-row>
    </j-drawer>
</template>
<script lang="ts">
import descriptionItem from './descriptionItem/index.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
        descriptionItem,
    },
    setup() {
        const visible = ref<boolean>(false);
        const pStyle = {
            fontSize: '16px',
            color: 'rgba(0,0,0,0.85)',
            lineHeight: '24px',
            display: 'block',
            marginBottom: '16px',
        };
        const pStyle2 = {
            marginBottom: '24px',
        };

        const showDrawer = () => {
            visible.value = true;
        };
        const onClose = () => {
            visible.value = false;
        };
        return {
            visible,
            pStyle,
            pStyle2,
            showDrawer,
            onClose,
        };
    },
});
</script>
