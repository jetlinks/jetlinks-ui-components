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
                                    >
                                        已上传{{ parseInt(file.percent) }}%
                                    </span>
                                    <span
                                        v-else
                                        class="tips"
                                        :style="
                                            file.status === 'error'
                                                ? 'color: red'
                                                : ''
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
                                    >
                                        已上传{{ parseInt(file.percent) }}%
                                    </span>
                                    <span
                                        v-else
                                        class="tips"
                                        :style="
                                            file.status === 'error'
                                                ? 'color: red'
                                                : ''
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

<script lang="ts" setup>
import { Upload, UploadDragger } from 'ant-design-vue';
import { CloseCircleFilled, StarOutlined } from '@ant-design/icons-vue';
import type { UploadProps } from 'ant-design-vue';
import { defineProps, useSlots } from 'vue';
import {
    uploadProps,
    uploadListProps,
} from 'ant-design-vue/lib/upload/interface';
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
