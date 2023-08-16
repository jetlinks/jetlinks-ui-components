<docs>
---
order: 1
title:
  zh-CN: 国际化
  en-US: Locale
---

## zh-CN

此处列出 Ant Design Vue 中需要国际化支持的组件，你可以在演示里切换语言。

## en-US

Components which need localization support are listed here, you can toggle the language in the demo.
</docs>

<template>
  <div class="change-locale">
    <span style="margin-right: 16px">Change locale of components:</span>
    <j-radio-group v-model:value="locale">
      <j-radio-button key="en" :value="enUS.locale">English</j-radio-button>
      <j-radio-button key="cn" :value="zhCN.locale">中文</j-radio-button>
    </j-radio-group>
  </div>
  <j-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="locale-components">
      <div class="example">
        <j-pagination :total="50" show-size-changer />
      </div>
      <div class="example">
        <j-select show-search style="width: 200px">
          <j-select-option value="jack">jack</j-select-option>
          <j-select-option value="lucy">lucy</j-select-option>
        </j-select>
        <j-date-picker />
        <j-time-picker />
        <j-range-picker style="width: 200px" />
      </div>
      <div class="example">
        <j-button type="primary" @click="visible = true">Show Modal</j-button>
        <j-button @click="info">Show info</j-button>
        <j-button @click="confirm">Show confirm</j-button>
        <j-popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </j-popconfirm>
      </div>
      <div class="example">
        <j-transfer :datj-source="[]" show-search :target-keys="[]" :render="item => item.title" />
      </div>
      <div class="site-config-provider-calendar-wrapper">
        <j-calendar :fullscreen="false" />
      </div>
      <div class="example">
        <j-table :datj-source="[]" :columns="columns" />
      </div>
      <j-modal v-model:visible="visible" title="Locale Modal">
        <p>Locale Modal</p>
      </j-modal>
    </div>
  </j-config-provider>
</template>
<script>
import { Modal } from 'ant-design-vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { defineComponent, ref, watch } from 'vue';

dayjs.locale('en');

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
export default defineComponent({
  setup() {
    const visible = ref(false);
    const locale = ref(enUS.locale);
    watch(locale, val => {
      dayjs.locale(val);
    });
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return {
      columns,
      visible,
      locale,
      dayjs,
      enUS,
      zhCN,
      info,
      confirm,
    };
  },
});
</script>
<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
[datj-theme='dark'] .locale-components {
  border-top: 1px solid #303030;
}
[datj-theme='dark'] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>
