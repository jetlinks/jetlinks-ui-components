<template>
    <ProTable v-if="type !== 'scroll'" />
    <ScrollTable v-else />
</template>

<script lang="ts" setup>
import ProTable from './ProTable.vue'
import ScrollTable from './ScrollTable.vue'

const props = defineProps({
    type: {
        type: String,
        default: ''
    }
})
</script>