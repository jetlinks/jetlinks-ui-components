<docs>
---
order: 2
title: 在卡片中使用
---

## zh-CN

在卡片中展示统计数值。

</docs>

<template>
    <div style="background: #ececec; padding: 30px">
        <j-row :gutter="16">
            <j-col :span="12">
                <j-card>
                    <j-statistic
                        title="Feedback"
                        :value="11.28"
                        :precision="2"
                        suffix="%"
                        :value-style="{ color: '#3f8600' }"
                        style="margin-right: 50px"
                    >
                        <template #prefix>
                            <arrow-up-outlined />
                        </template>
                    </j-statistic>
                </j-card>
            </j-col>
            <j-col :span="12">
                <j-card>
                    <j-statistic
                        title="Idle"
                        :value="9.3"
                        :precision="2"
                        suffix="%"
                        class="demo-class"
                        :value-style="{ color: '#cf1322' }"
                    >
                        <template #prefix>
                            <arrow-down-outlined />
                        </template>
                    </j-statistic>
                </j-card>
            </j-col>
        </j-row>
    </div>
</template>
<script lang="ts">
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        ArrowUpOutlined,
        ArrowDownOutlined,
    },
});
</script>
