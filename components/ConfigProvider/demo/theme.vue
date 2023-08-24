<docs>
---
order: 5
version: 3.0
title:
  zh-CN: 全局样式
  en-US: Global Theme
---

## zh-CN

通过 css variable 修改全局主题色（你可以切换到组件页面查看更详细的样式展示）。自动生成的变量可能会根据设计调整，请勿直接依赖。详细配置请[点击查看](/docs/vue/customize-theme-variable)。

## en-US

Modify global theme color by css variable. Css variable depends on the design, it may adjust so please do not directly use it. You can go to other components page for more detail style. [Check this](/docs/vue/customize-theme-variable) to view detail.

</docs>

<template>
  <j-row :gutter="16" :wrap="false">
    <j-col flex="none">
      <j-space direction="vertical" align="center">
        <!-- Primary Color -->
        <input
          type="color"
          :value="colorState.primaryColor"
          @input="e => onColorChange('primaryColor', e)"
        />

        <span style="color: var(--ant-primary-color)">var(`--ant-primary-color`)</span>

        <!-- Error Color -->
        <input
          type="color"
          :value="colorState.errorColor"
          @input="e => onColorChange('errorColor', e)"
        />

        <span style="color: var(--ant-error-color)">var(`--ant-error-color`)</span>

        <!-- Warning Color -->
        <input
          type="color"
          :value="colorState.warningColor"
          @input="e => onColorChange('warningColor', e)"
        />

        <span style="color: var(--ant-warning-color)">var(`--ant-warning-color`)</span>

        <!-- Success Color -->
        <input
          type="color"
          :value="colorState.successColor"
          @input="e => onColorChange('successColor', e)"
        />

        <span style="color: var(--ant-success-color)">var(`--ant-success-color`)</span>

        <!-- Info Color -->
        <input
          type="color"
          :value="colorState.infoColor"
          @input="e => onColorChange('infoColor', e)"
        />
        <span style="color: var(--ant-info-color)">var(`--ant-info-color`)</span>
      </j-space>
    </j-col>

    <j-col flex="auto">
      <j-space direction="vertical" style="width: 100%" :size="0">
        <template #split><j-divider /></template>
        <!-- Primary Button -->
        <SplitSpace>
          <j-button type="primary">Primary</j-button>
          <j-button>Default</j-button>
          <j-button type="dashed">Dashed</j-button>
          <j-button type="text">Text</j-button>
          <j-button type="link">Link</j-button>
        </SplitSpace>

        <!-- Danger Button -->
        <SplitSpace>
          <j-button danger type="primary">Primary</j-button>
          <j-button danger>Default</j-button>
          <j-button danger type="dashed">Dashed</j-button>
          <j-button danger type="text">Text</j-button>
          <j-button danger type="link">Link</j-button>
        </SplitSpace>

        <!-- Ghost Button -->
        <SplitSpace style="background: rgb(190, 200, 200)">
          <j-button type="primary" ghost>Primary</j-button>
          <j-button ghost>Default</j-button>
          <j-button type="dashed" ghost>Dashed</j-button>
          <j-button type="primary" ghost danger>Primary</j-button>
          <j-button ghost danger>Default</j-button>
          <j-button type="dashed" ghost danger>Dashed</j-button>
        </SplitSpace>

        <!-- Typography -->
        <SplitSpace>
          <j-typography-text type="success">Text (success)</j-typography-text>
          <j-typography-text type="warning">Text(warning)</j-typography-text>
          <j-typography-text type="danger">Text(danger)</j-typography-text>
          <j-typography-link href="https://ant.design" target="_blank">Link</j-typography-link>
          <j-typography-text copyable>Text</j-typography-text>

          <!-- Dropdown -->
          <j-dropdown>
            <template #overlay>
              <j-menu>
                <j-menu-item>1st menu item</j-menu-item>
                <j-menu-item danger>a danger item</j-menu-item>
              </j-menu>
            </template>
            <a class="ant-dropdown-link" @click.prevent>
              Hover me
              <DownOutlined />
            </a>
          </j-dropdown>

          <!-- Spin -->
          <j-spin />
        </SplitSpace>

        <!-- Menu - horizontal -->
        <j-row :gutter="16">
          <j-col :span="12">
            <j-menu v-model:selectedKeys="selectedKeys" mode="horizontal">
              <j-menu-item key="mail">
                Mail
                <template #icon>
                  <MailOutlined />
                </template>
              </j-menu-item>
              <j-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <j-menu-item-group title="Item 1">
                  <j-menu-item key="setting:1">Option 1</j-menu-item>
                  <j-menu-item key="setting:2">Option 2</j-menu-item>
                </j-menu-item-group>
              </j-sub-menu>
            </j-menu>
          </j-col>
          <j-col :span="12">
            <j-menu v-model:selectedKeys="selectedKeys" mode="horizontal" theme="dark">
              <j-menu-item key="mail">
                <template #icon><SettingOutlined /></template>
                Mail
              </j-menu-item>
              <j-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <j-menu-item-group title="Item 1">
                  <j-menu-item key="setting:1">Option 1</j-menu-item>
                  <j-menu-item key="setting:2">Option 2</j-menu-item>
                </j-menu-item-group>
              </j-sub-menu>
            </j-menu>
          </j-col>
        </j-row>

        <!-- Menu - vertical -->
        <j-row :gutter="16">
          <j-col :span="12">
            <j-menu v-model:selectedKeys="selectedKeys" mode="inline">
              <j-menu-item key="mail">
                <template #icon><MailOutlined /></template>
                Mail
              </j-menu-item>
              <j-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <j-menu-item-group title="Item 1">
                  <j-menu-item key="setting:1">Option 1</j-menu-item>
                  <j-menu-item key="setting:2">Option 2</j-menu-item>
                </j-menu-item-group>
              </j-sub-menu>
            </j-menu>
          </j-col>
          <j-col :span="12">
            <j-menu v-model:selectedKeys="selectedKeys" mode="vertical" theme="dark">
              <j-menu-item key="mail">
                <template #icon><MailOutlined /></template>
                Mail
              </j-menu-item>
              <j-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <j-menu-item-group title="Item 1">
                  <j-menu-item key="setting:1">Option 1</j-menu-item>
                  <j-menu-item key="setting:2">Option 2</j-menu-item>
                </j-menu-item-group>
              </j-sub-menu>
            </j-menu>
          </j-col>
        </j-row>

        <!-- Pagination -->
        <j-pagination show-quick-jumper :default-current="2" :total="500" />

        <!-- Steps -->
        <j-steps :current="1" :percent="60">
          <j-step title="Finished" description="This is a description." />
          <j-step
            title="In Progress"
            sub-title="Left 00:00:08"
            description="This is a description."
          />
          <j-step title="Waiting" description="This is a description." />
        </j-steps>

        <!-- Steps - dot -->
        <j-steps :current="2" status="error" progress-dot>
          <j-step title="Finished" description="You can hover on the dot." />
          <j-step title="In Progress" description="You can hover on the dot." />
          <j-step title="Error" description="You can hover on the dot." />
          <j-step title="Waiting" description="You can hover on the dot." />
        </j-steps>

        <!-- Form - Input -->
        <j-form>
          <SplitSpace>
            <j-form-item>
              <j-input v-bind="inputProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="success">
              <j-input v-bind="inputProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="warning">
              <j-input v-bind="inputProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="error">
              <j-input v-bind="inputProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="validating">
              <j-input v-bind="inputProps" />
            </j-form-item>
          </SplitSpace>
        </j-form>

        <!-- Form - Select -->
        <j-form>
          <SplitSpace>
            <j-form-item>
              <j-select v-bind="selectProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="success">
              <j-select v-bind="selectProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="warning">
              <j-select v-bind="selectProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="error">
              <j-select v-bind="selectProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="validating">
              <j-select v-bind="selectProps" />
            </j-form-item>
          </SplitSpace>
        </j-form>

        <!-- Form - TreeSelect -->
        <j-form>
          <SplitSpace>
            <j-form-item>
              <j-tree-select v-bind="treeSelectProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="success">
              <j-tree-select v-bind="treeSelectProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="warning">
              <j-tree-select v-bind="treeSelectProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="error">
              <j-tree-select v-bind="treeSelectProps" />
            </j-form-item>
            <j-form-item has-feedback validate-status="validating">
              <j-tree-select v-bind="treeSelectProps" />
            </j-form-item>
          </SplitSpace>
        </j-form>

        <!-- Form - InputNumber -->
        <j-form>
          <SplitSpace>
            <j-form-item>
              <j-input-number />
            </j-form-item>
            <j-form-item has-feedback validate-status="success">
              <j-input-number />
            </j-form-item>
            <j-form-item has-feedback validate-status="warning">
              <j-input-number />
            </j-form-item>
            <j-form-item has-feedback validate-status="error">
              <j-input-number />
            </j-form-item>
            <j-form-item has-feedback validate-status="validating">
              <j-input-number />
            </j-form-item>
          </SplitSpace>
        </j-form>

        <!-- Form - DatePicker -->
        <j-form>
          <SplitSpace>
            <j-form-item>
              <j-date-picker />
            </j-form-item>
            <j-form-item has-feedback validate-status="success">
              <j-date-picker />
            </j-form-item>
            <j-form-item has-feedback validate-status="warning">
              <j-date-picker />
            </j-form-item>
            <j-form-item has-feedback validate-status="error">
              <j-date-picker />
            </j-form-item>
            <j-form-item has-feedback validate-status="validating">
              <j-date-picker />
            </j-form-item>
          </SplitSpace>
        </j-form>

        <SplitSpace>
          <j-checkbox>Checkbox</j-checkbox>

          <j-radio-group default-value="bamboo">
            <j-radio value="bamboo">Bamboo</j-radio>
            <j-radio value="light">Light</j-radio>
            <j-radio value="little">Little</j-radio>
          </j-radio-group>

          <j-mentions placeholder="Mention by @">
            <j-mentions-option value="afc163">afc163</j-mentions-option>
            <j-mentions-option value="zombieJ">zombieJ</j-mentions-option>
            <j-mentions-option value="yesmeck">yesmeck</j-mentions-option>
          </j-mentions>

          <j-slider :default-value="30" style="width: 100px" />

          <j-switch default-checked />
        </SplitSpace>

        <SplitSpace>
          <j-range-picker />
          <j-time-range-picker />
        </SplitSpace>

        <j-row :gutter="16">
          <j-col :span="8">
            <!-- Card -->
            <j-card style="width: 100%" :tab-list="carTabListNoTitle">
              <template #tabBarExtraContent>
                <a href="#">More</a>
              </template>
            </j-card>
          </j-col>
          <j-col :span="8">
            <!-- Table -->
            <j-table
              size="small"
              bordered
              :row-selection="{}"
              :columns="[
                {
                  title: 'Key',
                  dataIndex: 'key',
                  filters: [
                    {
                      text: 'Little',
                      value: 'little',
                    },
                  ],
                  sorter: (a, b) => a.key.length - b.key.length,
                },
              ]"
              :datj-source="[
                {
                  key: 'Bamboo',
                },
                {
                  key: 'Light',
                },
                {
                  key: 'Little',
                },
              ]"
            />
          </j-col>
          <j-col :span="8">
            <!-- Table -->
            <j-tabs default-active-key="1">
              <j-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</j-tab-pane>
              <j-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</j-tab-pane>
              <j-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</j-tab-pane>
            </j-tabs>
          </j-col>
        </j-row>

        <SplitSpace>
          <j-tag color="success">success</j-tag>
          <j-tag color="processing">processing</j-tag>
          <j-tag color="error">error</j-tag>
          <j-tag color="warning">warning</j-tag>
          <j-tag color="default">default</j-tag>
          <j-checkable-tag checked>CheckableTag</j-checkable-tag>
        </SplitSpace>

        <j-row :gutter="16">
          <j-col :span="16">
            <j-timeline mode="alternate">
              <j-timeline-item>Create a services site 2015-09-01</j-timeline-item>
              <j-timeline-item color="gray">
                Solve initial network problems 2015-09-01
              </j-timeline-item>
              <j-timeline-item>
                <template #dot>
                  <ClockCircleOutlined style="font-size: 16px" />
                </template>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </j-timeline-item>
            </j-timeline>
          </j-col>

          <j-col :span="8">
            <j-tree :tree-data="treeData" :height="200" default-expand-all checkable />
          </j-col>
        </j-row>

        <!-- Alert -->
        <j-row :gutter="16">
          <j-col :span="6">
            <j-alert show-icon message="Success Text" type="success" />
          </j-col>
          <j-col :span="6">
            <j-alert show-icon message="Info Text" type="info" />
          </j-col>
          <j-col :span="6">
            <j-alert show-icon message="Warning Text" type="warning" />
          </j-col>
          <j-col :span="6">
            <j-alert show-icon message="Error Text" type="error" />
          </j-col>
        </j-row>

        <!-- Progress -->
        <j-row :gutter="16">
          <j-col flex="auto">
            <j-progress :percent="30" />
            <j-progress :percent="70" status="exception" />
            <j-progress :percent="100" />
          </j-col>
          <j-col flex="none">
            <j-progress type="circle" :percent="75" />
            <j-progress type="circle" :percent="70" status="exception" />
            <j-progress type="circle" :percent="100" />
          </j-col>
        </j-row>

        <j-transfer :datj-source="transferData" :target-keys="['18']" :selected-keys="['3']">
          <template #render="item">{{ item.title }}</template>
        </j-transfer>
      </j-space>
    </j-col>
  </j-row>
</template>
<script lang="ts">
import { defineComponent, h, reactive, ref } from 'vue';
import { ConfigProvider, Space, Divider } from 'ant-design-vue';
import type { TreeSelectProps } from 'ant-design-vue';
import {
  DownOutlined,
  MailOutlined,
  SettingOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
    MailOutlined,
    SettingOutlined,
    ClockCircleOutlined,
    SplitSpace: (props, { slots }) =>
      h(Space, { size: 4, ...props }, { ...slots, split: () => h(Divider, { type: 'vertical' }) }),
  },
  setup() {
    const inputProps = {
      style: { width: '128px' },
    };

    const selectProps = {
      ...inputProps,
      options: [
        { value: 'light', label: 'Light' },
        { value: 'bamboo', label: 'Bamboo' },
        { value: 'little', label: 'Little' },
      ],
    };

    const treeData = [
      {
        value: 'little',
        key: 'little',
        label: 'Little',
        title: 'Little',
        children: [
          { value: 'light', key: 'light', label: 'Light', title: 'Light' },
          { value: 'bamboo', key: 'bamboo', label: 'Bamboo', title: 'Bamboo' },
        ],
      },
    ];

    const treeSelectProps: TreeSelectProps = {
      ...inputProps,
      treeCheckable: true,
      maxTagCount: 'responsive',
      treeData,
    };

    const carTabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];

    const transferData = [];

    for (let i = 0; i < 20; i++) {
      transferData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      });
    }

    const colorState = reactive({
      primaryColor: '#1890ff',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    });

    const onColorChange = (type: string, e: any) => {
      Object.assign(colorState, { [type]: e.target.value });
      ConfigProvider.config({
        theme: colorState,
      });
    };
    return {
      selectProps,
      carTabListNoTitle,
      onColorChange,
      treeData,
      treeSelectProps,
      transferData,
      colorState,
      inputProps,
      selectedKeys: ref(['mail']),
    };
  },
});
</script>
