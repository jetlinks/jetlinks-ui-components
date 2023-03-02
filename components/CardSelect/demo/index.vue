<template>
    <demo-sort>
        <Radio />
        <Checkbox />
        <Disabled />
        <SingleDisabled />
        <Horizontal />
    </demo-sort>
</template>

<script>
import Radio from './radio.vue';
import Checkbox from './checkbox.vue';
import CN from '../index.md';
import Disabled from './disabled.vue';
import SingleDisabled from './single-disabled.vue';
import Horizontal from './horizontal.vue';

export default {
    CN,
    components: { Horizontal, SingleDisabled, Disabled, Checkbox, Radio },
};
</script>

<style scoped></style>
