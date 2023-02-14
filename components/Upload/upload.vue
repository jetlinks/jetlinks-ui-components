<template>
    <div v-if="dragger" class="drag-container">
        <UploadDragger v-bind="props">
            <slot name="default" />
            <!--自定义上传列表-->
            <template
                v-if="props.listType !== 'picture-card'"
                #itemRender="{ file, actions, fileList, originNode }"
            >
                <slot
                    name="itemRender"
                    :file="file"
                    :actions="actions"
                    :file-list="fileList"
                    :origin-node="originNode"
                >
                    <div v-if="!$slots.itemRender" class="upload-inner">
                        <div class="upload-inner-context">
                            <div class="upload-list-item-info">
                                <div class="upload-span">
                                    <!--自定义上传缩略图-->
                                    <div v-if="props.listType !== 'picture'">
                                        <slot
                                            v-if="$slots.iconRender"
                                            name="iconRender"
                                        ></slot>
                                        <img
                                            v-else
                                            class="previewIcon"
                                            src="../Upload/asset/uploadIcon.svg"
                                        />
                                    </div>
                                    <!--图片上传-->
                                    <div v-else>
                                        <span>
                                            <slot
                                                v-if="$slots.iconRender"
                                                name="iconRender"
                                            ></slot>
                                            <img
                                                v-if="
                                                    !$slots.iconRender &&
                                                    file.status === 'done'
                                                "
                                                class="picture-img"
                                                :src="file.url ?? file.thumbUrl"
                                            />
                                            <img
                                                v-if="file.status === 'error'"
                                                class="picture-img"
                                                src="./asset/picture-upload-fail.svg"
                                            />
                                        </span>
                                    </div>
                                    <span
                                        class="file-name"
                                        :style="
                                            file.status === 'error'
                                                ? 'color: red'
                                                : ''
                                        "
                                        >{{ file.name }}</span
                                    >
                                    <span
                                        v-if="file.status === 'uploading'"
                                        class="tips"
                                        style="color: #315efb"
                                    >
                                        已上传{{ parseInt(file.percent) }}%
                                    </span>
                                    <span
                                        v-else
                                        class="tips"
                                        :style="
                                            file.status === 'error'
                                                ? 'color: red'
                                                : 'color: #315EFB'
                                        "
                                    >
                                        {{
                                            file.status === 'error'
                                                ? '上传失败'
                                                : '上传成功'
                                        }}
                                    </span>
                                    <div style="min-width: 20px">
                                        <!--自定义上传删除icon-->
                                        <span
                                            class="img-remove"
                                            @click="actions.remove"
                                        >
                                            <slot
                                                v-if="$slots.removeIcon"
                                                name="removeIcon"
                                            ></slot>
                                            <img
                                                v-else
                                                src="../Upload/asset/uploadRemoveIcon.svg"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="file.status === 'uploading'">
                            <a-progress
                                class="upload-progress"
                                :percent="file.percent"
                                :show-info="false"
                                size="small"
                            />
                        </div>
                    </div>
                </slot>
            </template>
        </UploadDragger>
    </div>

    <div v-else>
        <Upload v-bind="props">
            <slot name="default" />
            <!--照片墙-->
            <template
                v-if="props.listType === 'picture-card'"
                #iconRender="{ file }"
            >
                <slot name="iconRender">
                    <div v-if="file.status === 'error'" class="error-pic">
                        <div style="padding: 10px">
                            <img src="../Upload/asset/Group.svg" />
                        </div>
                    </div>
                    <img
                        v-if="file.status === 'uploading'"
                        :src="file.url ?? file.thumbUrl"
                    />
                </slot>
            </template>
            <!--自定义上传列表-->
            <template
                v-if="props.listType !== 'picture-card'"
                #itemRender="{ file, actions, fileList, originNode }"
            >
                <slot
                    name="itemRender"
                    :file="file"
                    :actions="actions"
                    :file-list="fileList"
                    :origin-node="originNode"
                >
                    <div v-if="!$slots.itemRender" class="upload-inner">
                        <div class="upload-inner-context">
                            <div class="upload-list-item-info">
                                <div class="upload-span">
                                    <!--自定义上传缩略图-->
                                    <div v-if="props.listType !== 'picture'">
                                        <slot
                                            v-if="$slots.iconRender"
                                            name="iconRender"
                                        ></slot>
                                        <img
                                            v-else
                                            class="previewIcon"
                                            src="../Upload/asset/uploadIcon.svg"
                                        />
                                    </div>
                                    <!--图片上传-->
                                    <div v-else>
                                        <span>
                                            <slot
                                                v-if="$slots.iconRender"
                                                name="iconRender"
                                            ></slot>
                                            <img
                                                v-if="
                                                    !$slots.iconRender &&
                                                    file.status === 'done'
                                                "
                                                class="picture-img"
                                                :src="file.url ?? file.thumbUrl"
                                                @click="
                                                    preview(
                                                        file.url ??
                                                            file.thumbUrl,
                                                    )
                                                "
                                            />
                                            <img
                                                v-if="file.status === 'error'"
                                                class="picture-img"
                                                src="./asset/picture-upload-fail.svg"
                                            />
                                        </span>
                                    </div>
                                    <span
                                        class="file-name"
                                        :style="
                                            file.status === 'error'
                                                ? 'color: red'
                                                : ''
                                        "
                                        >{{ file.name }}</span
                                    >
                                    <span
                                        v-if="file.status === 'uploading'"
                                        class="tips"
                                        style="color: #315efb"
                                    >
                                        已上传{{ parseInt(file.percent) }}%
                                    </span>
                                    <span
                                        v-else
                                        class="tips"
                                        :style="
                                            file.status === 'error'
                                                ? 'color: red'
                                                : 'color: #315EFB'
                                        "
                                    >
                                        {{
                                            file.status === 'error'
                                                ? '上传失败'
                                                : '上传成功'
                                        }}
                                    </span>
                                    <div style="min-width: 20px">
                                        <!--自定义上传删除icon-->
                                        <span
                                            class="img-remove"
                                            @click="actions.remove"
                                        >
                                            <slot
                                                v-if="$slots.removeIcon"
                                                name="removeIcon"
                                            ></slot>
                                            <img
                                                v-else
                                                src="../Upload/asset/uploadRemoveIcon.svg"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="file.status === 'uploading'">
                            <a-progress
                                class="upload-progress"
                                :percent="file.percent"
                                :show-info="false"
                                size="small"
                            />
                        </div>
                    </div>
                </slot>
            </template>
        </Upload>
    </div>
</template>

<script lang="ts" setup name="JUpload">
import { Upload, UploadDragger } from 'ant-design-vue';
import { CloseCircleFilled, StarOutlined } from '@ant-design/icons-vue';
import type { UploadProps } from 'ant-design-vue';
import { defineProps, useSlots } from 'vue';
import {
    uploadProps,
    uploadListProps,
} from 'ant-design-vue/es/upload/interface';
const props = defineProps({
    ...uploadProps(),
    ...uploadListProps(),
    dragger: {
        type: Boolean,
        default: false,
    },
});
//上传图片点击缩略图预览
const preview = (url: string) => {
    window.open(url);
};
const $slots = useSlots();
</script>

<style scoped lang="less">
@import 'ant-design-vue/es/style/themes/default.less';
.upload-inner {
    .upload-inner-context {
        position: relative;
        height: 100%;
        margin-top: 12px;
        font-size: 14px;
        .upload-list-item-info {
            height: 100%;
            padding: 0 6px;
            transition: background-color 0.3s;
            .upload-span {
                display: flex;
                align-items: center;
                .img-remove {
                    display: none;
                }
                .picture-img {
                    display: block;
                    width: 36px;
                    height: 36px;
                    overflow: hidden;
                    border-radius: 6px;
                }
                .tips {
                    margin-right: 8px;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 20px;
                }
                .file-name {
                    flex: auto;
                    margin: 0;
                    padding: 0 8px;
                }
            }
        }
    }
    .upload-progress {
        bottom: 8px;
        width: 93%;
        padding-left: 40px;
        font-size: 14px;
        line-height: 0;
        :deep(.ant-progress-bg) {
            background-color: #315efb;
        }
        :deep(.ant-progress-inner) {
            background-color: rgba(49, 94, 251, 0.1);
        }
    }
}
//上传文件
:deep(.ant-upload-list-text-container) {
    width: 423px;
    height: 60px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    margin-top: 0.5rem;

    &:hover {
        box-shadow: 0px 4px 18px #f3f3f3;
        border: none;

        .upload-inner
            .upload-inner-context
            .upload-list-item-info
            .upload-span
            .img-remove {
            display: block;
        }
    }

    .ant-upload-list-item {
        position: relative;
        height: 100%;
        font-size: 14px;
        display: block;
        align-items: center;
        margin-top: 0;

        &:hover .ant-upload-list-item-info {
            background: #ffffff;
        }

        .ant-upload-list-item-progress {
            position: absolute;
            bottom: 0px;
            padding-left: 26px;
            font-size: 14px;
            line-height: 0;

            .ant-progress-bg {
                height: 6px !important;
                background-color: var(--ant-primary-color);
            }

            .ant-progress-inner {
                background-color: rgba(49, 94, 251, 0.1);
            }
        }
    }
}
//上传图片
:deep(.ant-upload-list-picture-container) {
    width: 423px;
    height: 60px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    margin-top: 0.5rem;

    &:hover {
        box-shadow: 0px 4px 18px #f3f3f3;
        border: none;

        .upload-inner
            .upload-inner-context
            .upload-list-item-info
            .upload-span
            .img-remove {
            display: block;
        }
    }

    .ant-upload-list-item {
        position: relative;
        height: 100%;
        font-size: 14px;
        display: block;
        align-items: center;
        margin-top: 0;

        &:hover .ant-upload-list-item-info {
            background: #ffffff;
        }

        .ant-upload-list-item-progress {
            position: absolute;
            bottom: 0px;
            padding-left: 26px;
            font-size: 14px;
            line-height: 0;

            .ant-progress-bg {
                height: 6px !important;
                background-color: var(--ant-primary-color);
            }

            .ant-progress-inner {
                background-color: rgba(49, 94, 251, 0.1);
            }
        }
    }
}
//上传照片墙
:deep(.ant-upload-list-picture-card .ant-upload-list-item) {
    border: 1px solid #d9d9d9;
    border-radius: 6px !important;
    .ant-upload-list-item-info {
        border-radius: 6px !important;
    }
    .ant-progress-status-success .ant-progress-bg {
        background-color: var(--ant-primary-color);
    }
}
.error-pic {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 6px;
    border: 1px dashed #e6e6e6;
}
//拖拽上传

:deep(.ant-upload.ant-upload-drag) {
    background-color: #ffffff;
    border: 2px dashed #eaedf0;
    border-radius: 2px;
}
.drag-container {
    :deep(.ant-upload-list-text-container) {
        width: 100% !important;
    }
}
</style>
