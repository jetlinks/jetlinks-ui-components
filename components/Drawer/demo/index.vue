<template>
    <demo-sort>
        <basic />
        <extra />
        <placement />
        <render-in-current />
        <form-in-drawer />
        <multi-level-drawer />
        <user-profile />
        <size />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Extra from './extra.vue';
import Placement from './placement.vue';
import UserProfile from './user-profile.vue';
import MultiLevelDrawer from './multi-level-drawer.vue';
import FormInDrawer from './form-in-drawer.vue';
import RenderInCurrent from './render-in-current.vue';
import Size from './size.vue';

import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
    CN,
    components: {
        Basic,
        Extra,
        Placement,
        UserProfile,
        MultiLevelDrawer,
        FormInDrawer,
        RenderInCurrent,
        Size,
    },
    setup() {
        return {};
    },
});
</script>
