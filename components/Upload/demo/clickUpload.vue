<docs>
---
order: 0
title: 点击上传
---

经典款式，用户点击按钮弹出文件选择框。

</docs>
<template>
    <j-upload
        v-model:file-list="fileList"
        name="file"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :headers="headers"
        @change="handleChange"
    >
        <j-button>
            <upload-outlined></upload-outlined>
            点击上传
        </j-button>
    </j-upload>
</template>
<script lang="ts">
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam } from 'ant-design-vue';

export default defineComponent({
    components: {
        UploadOutlined,
    },
    setup() {
        const handleChange = (info: UploadChangeParam) => {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        };

        const fileList = ref([]);
        return {
            fileList,
            headers: {
                authorization: 'authorization-text',
            },
            handleChange,
        };
    },
});
</script>
