<template>
    <form-item label="最大长度">
        <input-number :precision="0" :max="4" />
    </form-item>
</template>

<script setup lang="ts">
import { FormItem, InputNumber } from '../../../components'
</script>
