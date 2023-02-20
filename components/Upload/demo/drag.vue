<docs>
---
order: 0
title: 拖拽上传
---

把文件拖入指定区域，完成上传，同样支持点击上传。
设置<code>multiple </code>后，可以一次上传多个文件。

</docs>
<template>
    <j-upload
        v-model:fileList="fileList"
        :dragger="true"
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
        @drop="handleDrop"
    >
        <p class="ant-upload-drag-icon">
            <img src="../asset/drag-upload-icon.svg" />
        </p>
        <p class="ant-upload-text">拖拽文件到此区域或点击上传</p>
        <p class="ant-upload-hint">
            请使用模板上传
            <j-button type="link" @click.stop="downloadModel">
                <img src="../asset/drag-download.svg" />
                下载模板
            </j-button>
        </p>
    </j-upload>
</template>
<script lang="ts">
import { message, UploadProps } from 'ant-design-vue';
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
        const downloadModel = () => {
            message.error(`暂无模板`);
        };
        return {
            fileList: ref([]),
            headers: {
                authorization: 'authorization-text',
            },
            handleChange,
            downloadModel,
        };
    },
});
</script>
<style scoped lang="less">
.upload-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #272e37;
}
.upload-hint {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #999999;
}
</style>
