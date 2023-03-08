<template>
    <h2>线框风格</h2>
    <div>
        <h3>方向性图标</h3>
        <a-row class="icon-display">
            <a-col
                v-for="direction in categories.direction"
                :key="direction"
                :span="4"
                class="icon-display-item"
            >
                <div class="icon-display-item-icon">
                    <aIcon :type="direction + 'Outlined'" />
                </div>
                <div class="icon-display-item-title">
                    {{ direction + 'Outlined' }}
                </div>
            </a-col>
        </a-row>
    </div>
    <div>
        <h3>提示建议性图标</h3>
        <a-row class="icon-display">
            <a-col
                v-for="suggestion in categories.suggestion"
                :key="suggestion"
                :span="4"
                class="icon-display-item"
            >
                <div class="icon-display-item-icon">
                    <aIcon :type="suggestion + 'Outlined'" />
                </div>
                <div class="icon-display-item-title">
                    {{ suggestion + 'Outlined' }}
                </div>
            </a-col>
        </a-row>
    </div>
    <div>
        <h3>编辑类图标</h3>
        <a-row class="icon-display">
            <a-col
                v-for="editor in categories.editor"
                :key="editor"
                :span="4"
                class="icon-display-item"
            >
                <div class="icon-display-item-icon">
                    <aIcon :type="editor + 'Outlined'" />
                </div>
                <div class="icon-display-item-title">
                    {{ editor + 'Outlined' }}
                </div>
            </a-col>
        </a-row>
    </div>
    <div>
        <h3>数据类图标</h3>
        <a-row class="icon-display">
            <a-col
                v-for="data in categories.data"
                :key="data"
                :span="4"
                class="icon-display-item"
            >
                <div class="icon-display-item-icon">
                    <aIcon :type="data + 'Outlined'" />
                </div>
                <div class="icon-display-item-title">
                    {{ data + 'Outlined' }}
                </div>
            </a-col>
        </a-row>
    </div>
    <div>
        <h3>网站通用图标</h3>
        <a-row class="icon-display">
            <a-col
                v-for="other in categories.other"
                :key="other"
                :span="4"
                class="icon-display-item"
            >
                <div class="icon-display-item-icon">
                    <aIcon :type="other + 'Outlined'" />
                </div>
                <div class="icon-display-item-title">
                    {{ other + 'Outlined' }}
                </div>
            </a-col>
        </a-row>
    </div>
    <h2>线框风格、实底风格、双色风格</h2>
    <div>
        <h3>风格对比</h3>
        <a-row class="icon-display">
            <a-col class="icon-display-item">
                <div class="icon-display-item-icon">
                    <aIcon type="UpCircleOutlined" />
                </div>
                <div class="icon-display-item-title">UpCircleOutlined</div>
            </a-col>
            <a-col class="icon-display-item">
                <div class="icon-display-item-icon">
                    <aIcon type="UpCircleFilled" />
                </div>
                <div class="icon-display-item-title">UpCircleFilled</div>
            </a-col>
            <a-col class="icon-display-item">
                <div class="icon-display-item-icon">
                    <aIcon type="UpCircleTwoTone" />
                </div>
                <div class="icon-display-item-title">UpCircleTwoTone</div>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup>
import { categories } from './fields';
</script>
