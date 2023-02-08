<template>
  <a-button type="primary" @click="openMessage(config[0])">open</a-button>
  <a-button type="primary" @click="openMessage(config[1])">success</a-button>
  <a-button type="primary" @click="openMessage(config[2])">error</a-button>
  <a-button type="primary" @click="openMessage(config[3])">info</a-button>
  <a-button type="primary" @click="openMessage(config[4])">warning</a-button>
  <a-button type="primary" @click="openMessage(config[5])">loading</a-button>
</template>

<script lang="ts" setup>
import { omit } from 'lodash'
import { message } from 'ant-design-vue'
import { config, JMessage } from './messageType'
import { MessageArgsProps, ConfigOptions } from 'ant-design-vue/es/message'

const openMessage = (config: MessageArgsProps) => {
  JMessage(config)
}
</script>

<style scoped lang="less">
.font {
  font-size: 14px;
  color: white;
  border-radius: 50%;
}
.info {
  background: #4293ff;
}
</style>
