<template>
    <demo-sort>
        <basic />
        <addonVue />
        <size />
        <disabled />
        <digit />
        <formatter />
        <keyboardVue />
        <outOfRangeVue />
        <borderlessVue />
        <prefixVue />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Disabled from './disabled.vue';
import Digit from './digit.vue';
import Formatter from './formatter.vue';
import Size from './size.vue';
import addonVue from './addon.vue';
import borderlessVue from './borderless.vue';
import keyboardVue from './keyboard.vue';
import outOfRangeVue from './out-of-range.vue';
import prefixVue from './prefix.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
    CN,
    components: {
        prefixVue,
        Basic,
        Disabled,
        Digit,
        Formatter,
        Size,
        addonVue,
        borderlessVue,
        keyboardVue,
        outOfRangeVue,
    },
});
</script>
