<template>
    <demo-sort>
        <Radio />
        <Checkbox />
        <Disabled />
        <SingleDisabled />
        <vertical />
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
export default {
    CN,
    components: {
        vertical,
        SingleDisabled,
        Disabled,
        Checkbox,
        Radio,
        CustomStyle,
    },
};
</script>

<style scoped></style>
