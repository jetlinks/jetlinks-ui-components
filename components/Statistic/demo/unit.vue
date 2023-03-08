<docs>
---
order: 1
title: 单位
---

## zh-CN

通过前缀和后缀添加单位。

</docs>

<template>
    <j-row :gutter="16">
        <j-col :span="12">
            <j-statistic
                title="Feedback"
                :value="1128"
                style="margin-right: 50px"
            >
                <template #suffix>
                    <like-outlined />
                </template>
            </j-statistic>
        </j-col>
        <j-col :span="12">
            <j-statistic title="Unmerged" :value="93" class="demo-class">
                <template #suffix>
                    <span>/ 100</span>
                </template>
            </j-statistic>
        </j-col>
    </j-row>
</template>
<script lang="ts">
import { LikeOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        LikeOutlined,
    },
});
</script>
