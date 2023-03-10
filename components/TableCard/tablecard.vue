<template>
    <div class="costom-table-card" :style="{ width }">
        <div class="table-card-title">
            <span>{{ name }}</span>
        </div>
        <div
            v-if="status"
            class="table-card-status"
            :style="{
                backgroundColor: status.color
                    ? getRgb(status.color, 0.3)
                    : getRgb(StatusType[status.value], 0.3),
            }"
        >
            <Badge
                :color="
                    status?.color ? status?.color : StatusType[status.value]
                "
                :text="status?.text"
            />
        </div>
        <div class="table-card-content">
            <slot name="content"></slot>
        </div>
        <div class="table-card-btns">
            <div
                v-for="item in actions.filter((val, index) => index < 3)"
                :key="item.name"
                class="card-btn"
                @click="handleClick(item)"
            >
                <JButton type="link" :disabled="item.disabled">
                    {{ item.name }}
                    <template #icon>
                        <AIcon v-if="item.icon" :type="item.icon"></AIcon>
                    </template>
                </JButton>
            </div>
            <div v-if="moreActions?.length" class="card-btn-more">
                <Popover
                    v-model:visible="visible"
                    trigger="click"
                    placement="bottomRight"
                    overlay-class-name="card-popover"
                >
                    <JButton type="link">...</JButton>
                    <template #content>
                        <div
                            v-for="item in moreActions"
                            :key="item.name"
                            class="card-popover-item"
                            @click="handleClick(item)"
                        >
                            <AIcon v-if="item.icon" :type="item.icon"></AIcon>
                            <span>{{ item.name }}</span>
                        </div>
                    </template>
                </Popover>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Badge, Popover } from 'ant-design-vue';
import JButton from '../Button';
import { ref } from 'vue';
import type { PropType } from 'vue';
import { ActionType, StatusType } from './tablecardType';
import { AIcon } from '../components';

const props = defineProps({
    /**
     * 卡片样式
     */
    width: {
        type: String,
        default: '400px',
    },
    /**
     * 卡片数据，用于按钮操作传递数据
     */
    cardData: {
        type: Object,
        default: () => {},
    },
    /**
     * 卡片title名称
     */
    name: {
        type: String,
        default: '',
    },
    /**
     * 卡片状态
     */
    status: {
        type: Object,
        default: () => {},
    },
    /**
     * 卡片按钮
     */
    actions: {
        type: Array as PropType<ActionType[]>,
        default: () => [],
    },
    moreActions: {
        type: Array as PropType<ActionType[]>,
        default: () => [],
    },
});

const getRgb = (str: string, opacity: number): string => {
    if (!str) {
        return;
    }
    var arr = str.split('');
    var myred = arr[1] + arr[2];
    var mygreen = arr[3] + arr[4];
    var myblue = arr[5] + arr[6];
    return `rgba(${parseInt(myred, 16)}, ${parseInt(mygreen, 16)}, ${parseInt(
        myblue,
        16,
    )}, ${opacity})`;
};

const visible = ref(false);
const handleClick = (item: ActionType) => {
    visible.value = false;
    item.onClick(props.cardData);
};
</script>
