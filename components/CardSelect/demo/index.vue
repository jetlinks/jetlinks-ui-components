<template>
    <demo-sort>
        <Radio />
        <Checkbox />
        <Disabled />
        <SingleDisabled />
        <vertical />
        <NoColumn />
    </demo-sort>
    <demo-sort :cols="1">
        <CustomStyle />
    </demo-sort>
</template>

<script>
import Radio from './radio.vue';
import Checkbox from './checkbox.vue';
import CN from '../index.md';
import Disabled from './disabled.vue';
import SingleDisabled from './single-disabled.vue';
import vertical from './vertical.vue';
import CustomStyle from './customStyle.vue';
import NoColumn from './noColumn.vue';
export default {
    CN,
    components: {
        vertical,
        SingleDisabled,
        Disabled,
        Checkbox,
        Radio,
        CustomStyle,
        NoColumn,
    },
};
</script>

<style scoped></style>
