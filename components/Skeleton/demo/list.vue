<docs>
---
order: 5
title: 列表
---

## zh-CN

在列表组件中使用加载占位符。

</docs>

<template>
    <div>
        <j-switch :checked="!loading" @change="onChange" />
        <j-list item-layout="vertical" size="large" :data-source="listData">
            <template #renderItem="{ item }">
                <j-list-item key="item.title">
                    <template v-if="!loading" #actions>
                        <span v-for="{ type, text } in actions" :key="type">
                            <component
                                :is="type"
                                style="margin-right: 8px"
                            ></component>
                            {{ text }}
                        </span>
                    </template>
                    <template #extra>
                        <img
                            v-if="!loading"
                            width="272"
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    </template>
                    <j-skeleton :loading="loading" active avatar>
                        <j-list-item-meta :description="item.description">
                            <template #title>
                                <a :href="item.href">{{ item.title }}</a>
                            </template>
                            <template #avatar
                                ><j-avatar :src="item.avatar"
                            /></template>
                        </j-list-item-meta>
                        {{ item.content }}
                    </j-skeleton>
                </j-list-item>
            </template>
        </j-list>
    </div>
</template>
<script lang="ts">
import {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
interface DataItem {
    href: string;
    title: string;
    avatar: string;
    description: string;
    content: string;
}
const listData: DataItem[] = [];
for (let i = 0; i < 3; i++) {
    listData.push({
        href: 'https://www.antdv.com/',
        title: `Jetlinks vue part ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Jetlinks ui component, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}
export default defineComponent({
    components: {
        StarOutlined,
        LikeOutlined,
        MessageOutlined,
    },
    setup() {
        const loading = ref<boolean>(true);

        const actions = [
            { type: 'star-outlined', text: '156' },
            { type: 'like-outlined', text: '156' },
            { type: 'message-outlined', text: '2' },
        ];

        const onChange = (checked: boolean) => {
            loading.value = !checked;
        };

        return {
            loading,
            listData,
            actions,
            onChange,
        };
    },
});
</script>
<style scoped>
.skeleton-demo {
    border: 1px solid #f4f4f4;
}
</style>
