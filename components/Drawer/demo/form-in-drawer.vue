<docs>
---
order: 4
title: 抽屉表单
---

## zh-CN

在抽屉中使用表单。

</docs>

<template>
    <j-button type="primary" @click="showDrawer">
        <template #icon><PlusOutlined /></template>
        New account
    </j-button>
    <j-drawer
        title="Create a new account"
        :width="720"
        :visible="visible"
        :body-style="{ paddingBottom: '80px' }"
        :footer-style="{ textAlign: 'right' }"
        @close="onClose"
    >
        <j-form :model="form" :rules="rules" layout="vertical">
            <j-row :gutter="16">
                <j-col :span="12">
                    <j-form-item label="Name" name="name">
                        <j-input
                            v-model:value="form.name"
                            placeholder="Please enter user name"
                        />
                    </j-form-item>
                </j-col>
                <j-col :span="12">
                    <j-form-item label="Url" name="url">
                        <j-input
                            v-model:value="form.url"
                            style="width: 100%"
                            addon-before="http://"
                            addon-after=".com"
                            placeholder="please enter url"
                        />
                    </j-form-item>
                </j-col>
            </j-row>
            <j-row :gutter="16">
                <j-col :span="12">
                    <j-form-item label="Owner" name="owner">
                        <j-select
                            v-model:value="form.owner"
                            placeholder="Please j-s an owner"
                        >
                            <j-select-option value="xiao"
                                >Xiaoxiao Fu</j-select-option
                            >
                            <j-select-option value="mao"
                                >Maomao Zhou</j-select-option
                            >
                        </j-select>
                    </j-form-item>
                </j-col>
                <j-col :span="12">
                    <j-form-item label="Type" name="type">
                        <j-select
                            v-model:value="form.type"
                            placeholder="Please choose the type"
                        >
                            <j-select-option value="private"
                                >Private</j-select-option
                            >
                            <j-select-option value="public"
                                >Public</j-select-option
                            >
                        </j-select>
                    </j-form-item>
                </j-col>
            </j-row>
            <j-row :gutter="16">
                <j-col :span="12">
                    <j-form-item label="Approver" name="approver">
                        <j-select
                            v-model:value="form.approver"
                            placeholder="Please choose the approver"
                        >
                            <j-select-option value="jack"
                                >Jack Ma</j-select-option
                            >
                            <j-select-option value="tom"
                                >Tom Liu</j-select-option
                            >
                        </j-select>
                    </j-form-item>
                </j-col>
                <j-col :span="12">
                    <j-form-item label="DateTime" name="dateTime">
                        <j-date-picker
                            v-model:value="form.dateTime"
                            style="width: 100%"
                            :get-popup-container="
                                (trigger) => trigger.parentElement
                            "
                        />
                    </j-form-item>
                </j-col>
            </j-row>
            <j-row :gutter="16">
                <j-col :span="24">
                    <j-form-item label="Description" name="description">
                        <j-textarea
                            v-model:value="form.description"
                            :rows="4"
                            placeholder="please enter url description"
                        />
                    </j-form-item>
                </j-col>
            </j-row>
        </j-form>
        <template #extra>
            <j-space>
                <j-button @click="onClose">Cancel</j-button>
                <j-button type="primary" @click="onClose">Submit</j-button>
            </j-space>
        </template>
    </j-drawer>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
export default defineComponent({
    components: {
        PlusOutlined,
    },
    setup() {
        const form = reactive({
            name: '',
            url: '',
            owner: '',
            type: '',
            approver: '',
            dateTime: null,
            description: '',
        });

        const rules: Record<string, Rule[]> = {
            name: [{ required: true, message: 'Please enter user name' }],
            url: [{ required: true, message: 'please enter url' }],
            owner: [{ required: true, message: 'Please select an owner' }],
            type: [{ required: true, message: 'Please choose the type' }],
            approver: [
                { required: true, message: 'Please choose the approver' },
            ],
            dateTime: [
                {
                    required: true,
                    message: 'Please choose the dateTime',
                    type: 'object',
                },
            ],
            description: [
                { required: true, message: 'Please enter url description' },
            ],
        };

        const visible = ref<boolean>(false);

        const showDrawer = () => {
            visible.value = true;
        };

        const onClose = () => {
            visible.value = false;
        };
        return {
            form,
            rules,
            visible,
            showDrawer,
            onClose,
        };
    },
});
</script>
