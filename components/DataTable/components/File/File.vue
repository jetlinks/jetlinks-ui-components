<template>
  <j-form-item label="文件类型" required>
    <j-radio-group v-model:value="type" button-style="solid">
      <j-space>
        <j-radio-button value="url">URL</j-radio-button>
        <j-radio-button value="base64">Base64</j-radio-button>
        <j-radio-button value="binary">binary</j-radio-button>
      </j-space>
    </j-radio-group>
  </j-form-item>
</template>

<script setup name="File" lang="ts">
import {ref} from "vue";
import { FormItem as JFormItem, RadioGroup as JRadioGroup, Space as JSpace, RadioButton as JRadioButton } from '../../../components'

const type = ref('url')

</script>

<style scoped>

</style>