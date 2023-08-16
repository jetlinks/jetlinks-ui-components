<docs>
---
order: 2
title:
  zh-CN: 方向
  en-US: Direction
---

## zh-CN

这里列出了支持 `rtl` 方向的组件，您可以在演示中切换方向。

## en-US

Components which support rtl direction are listed here, you can toggle the direction in the demo.

</docs>

<template>
  <span style="margin-right: 16px">Change direction of components:</span>
  <j-radio-group v-model:value="state.direction">
    <j-radio-button value="ltr">LTR</j-radio-button>
    <j-radio-button value="rtl">RTL</j-radio-button>
  </j-radio-group>
  <j-divider />
  <j-config-provider :direction="state.direction">
    <div class="direction-components">
      <j-row>
        <j-col :span="24">
          <j-divider orientation="left">Cascader example</j-divider>
          <j-cascader
            :options="cascaderOptions"
            placeholder="یک مورد انتخاب کنید"
            :placement="state.popupPlacement"
            @change="onCascaderChange"
          >
            <template #suffixIcon><SearchIcon /></template>
          </j-cascader>
          &nbsp;&nbsp;&nbsp;&nbsp; With search:
          <j-cascader
            :options="cascaderOptions"
            placeholder="Select an item"
            :placement="state.popupPlacement"
            :show-search="{ filter: cascaderFilter }"
            @change="onCascaderChange"
          >
            <template #suffixIcon><SmileOutlined /></template>
          </j-cascader>
        </j-col>
      </j-row>
      <br />
      <j-row>
        <j-col :span="12">
          <j-divider orientation="left">Switch example</j-divider>
          &nbsp;&nbsp;
          <j-switch default-checked />
          &nbsp;&nbsp;
          <j-switch loading default-checked />
          &nbsp;&nbsp;
          <j-switch size="small" loading />
        </j-col>
        <j-col :span="12">
          <j-divider orientation="left">Radio Group example</j-divider>

          <j-radio-group default-value="c" button-style="solid">
            <j-radio-button value="a">تهران</j-radio-button>
            <j-radio-button value="b" disabled>اصفهان</j-radio-button>
            <j-radio-button value="c">فارس</j-radio-button>
            <j-radio-button value="d">خوزستان</j-radio-button>
          </j-radio-group>
        </j-col>
      </j-row>
      <br />
      <j-row>
        <j-col :span="12">
          <j-divider orientation="left">Button example</j-divider>
          <div class="button-demo">
            <j-button type="primary">
              <template #icon><DownloadOutlined /></template>
            </j-button>
            <j-button type="primary" shape="circle">
              <template #icon><DownloadOutlined /></template>
            </j-button>
            <j-button type="primary" shape="round">
              <template #icon><DownloadOutlined /></template>
            </j-button>
            <j-button type="primary" shape="round">
              <template #icon><DownloadOutlined /></template>
              Download
            </j-button>
            <j-button type="primary">
              <template #icon><DownloadOutlined /></template>
              Download
            </j-button>
            <br />
            <j-button-group>
              <j-button type="primary">
                <LeftOutlined />
                Backward
              </j-button>
              <j-button type="primary">
                Forward
                <RightOutlined />
              </j-button>
            </j-button-group>
            <j-button type="primary" loading>Loading</j-button>
            <j-button type="primary" size="small" loading>Loading</j-button>
          </div>
        </j-col>
        <j-col :span="12">
          <j-divider orientation="left">Tree example</j-divider>
          <j-tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            show-line
            checkable
            :tree-data="treeData"
          >
            <template #title="{ title, key }">
              <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
              <template v-else>{{ title }}</template>
            </template>
          </j-tree>
        </j-col>
      </j-row>
      <br />
      <j-row>
        <j-col :span="24">
          <j-divider orientation="left">Input (Input Group) example</j-divider>
          <j-input-group size="large">
            <j-row :gutter="8">
              <j-col :span="5">
                <j-input default-value="0571" />
              </j-col>
              <j-col :span="8">
                <j-input default-value="26888888" />
              </j-col>
            </j-row>
          </j-input-group>
          <br />
          <j-input-group compact>
            <j-input style="width: 20%" default-value="0571" />
            <j-input style="width: 30%" default-value="26888888" />
          </j-input-group>
          <br />
          <j-input-group compact>
            <j-select default-value="Option1">
              <j-select-option value="Option1">Option1</j-select-option>
              <j-select-option value="Option2">Option2</j-select-option>
            </j-select>
            <j-input style="width: 50%" default-value="input content" />
            <j-inputNumber />
          </j-input-group>
          <br />
          <j-input-search placeholder="input search text" enter-button="Search" size="large" />
          <br />
          <br />
          <div style="margin-bottom: 16px">
            <j-input default-value="mysite">
              <template #selectBefore>
                <j-select default-value="Http://" style="width: 90px">
                  <j-select-option value="Http://">Http://</j-select-option>
                  <j-select-option value="Https://">Https://</j-select-option>
                </j-select>
              </template>
              <template #selectAfter>
                <j-select default-value=".com" style="width: 80px">
                  <j-select-option value=".com">.com</j-select-option>
                  <j-select-option value=".jp">.jp</j-select-option>
                  <j-select-option value=".cn">.cn</j-select-option>
                  <j-select-option value=".org">.org</j-select-option>
                </j-select>
              </template>
            </j-input>
          </div>
          <br />
          <j-row>
            <j-col :span="12">
              <j-divider orientation="left">Select example</j-divider>
              <j-select mode="multiple" default-value="مورچه" style="width: 120px">
                <j-select-option value="jack">Jack</j-select-option>
                <j-select-option value="مورچه">مورچه</j-select-option>
                <j-select-option value="disabled" disabled>Disabled</j-select-option>
                <j-select-option value="Yiminghe">yiminghe</j-select-option>
              </j-select>
              <j-select default-value="مورچه" style="width: 120px" disabled>
                <j-select-option value="مورچه">مورچه</j-select-option>
              </j-select>
              <j-select default-value="مورچه" style="width: 120px" loading>
                <j-select-option value="مورچه">مورچه</j-select-option>
              </j-select>
              <j-select
                show-search
                style="width: 200px"
                placeholder="Select a person"
                option-filter-prop="children"
                :filter-option="
                  (input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                "
              >
                <j-select-option value="jack">Jack</j-select-option>
                <j-select-option value="سعید">سعید</j-select-option>
                <j-select-option value="tom">Tom</j-select-option>
              </j-select>
            </j-col>
            <j-col :span="12">
              <j-divider orientation="left">TreeSelect example</j-divider>
              <div>
                <j-tree-select
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                  placeholder="Please select"
                  allow-clear
                  tree-default-expand-all
                  :tree-data="treeSelectData"
                ></j-tree-select>
              </div>
            </j-col>
          </j-row>
          <br />
          <j-row>
            <j-col :span="24">
              <j-divider orientation="left">Modal example</j-divider>
              <div>
                <j-button type="primary" @click="showModal">Open Modal</j-button>
                <j-modal v-model:visible="state.modalVisible" title="پنچره ساده">
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                </j-modal>
              </div>
            </j-col>
          </j-row>
          <br />
          <j-row>
            <j-col :span="24">
              <j-divider orientation="left">Steps example</j-divider>
              <div>
                <j-steps progress-dot :current="state.currentStep">
                  <j-step title="Finished" description="This is a description." />
                  <j-step title="In Progress" description="This is a description." />
                  <j-step title="Waiting" description="This is a description." />
                </j-steps>
                <br />
                <j-steps :current="state.currentStep" @change="onStepsChange">
                  <j-step title="Step 1" description="This is a description." />
                  <j-step title="Step 2" description="This is a description." />
                  <j-step title="Step 3" description="This is a description." />
                </j-steps>
              </div>
            </j-col>
          </j-row>
          <br />
          <j-row>
            <j-col :span="12">
              <j-divider orientation="left">Rate example</j-divider>
              <div>
                <j-rate v-model:value="rateValue" />
                <br />
                <strong>* Note:</strong>
                Half star not implemented in RTL direction.
              </div>
            </j-col>
            <j-col :span="12">
              <j-divider orientation="left">Badge example</j-divider>
              <div>
                <div>
                  <j-badge :count="state.badgeCount">
                    <a href="#" class="head-example" />
                  </j-badge>
                  <j-button-group>
                    <j-button @click="declineBadge">
                      <MinusOutlined />
                    </j-button>
                    <j-button @click="increaseBadge">
                      <PlusOutlined />
                    </j-button>
                  </j-button-group>
                </div>
                <div style="margin-top: 10px">
                  <j-badge :dot="state.showBadge">
                    <a href="#" class="head-example" />
                  </j-badge>
                  <j-switch :checked="state.showBadge" @change="onChangeBadge" />
                </div>
              </div>
            </j-col>
          </j-row>
        </j-col>
      </j-row>

      <br />
      <br />
      <j-row>
        <j-col :span="24">
          <j-divider orientation="left">Pagination example</j-divider>
          <j-pagination show-size-changer :default-current="3" :total="500" />
        </j-col>
      </j-row>
      <br />
      <j-row>
        <j-col :span="24">
          <j-divider orientation="left">Grid System example</j-divider>
          <div class="grid-demo">
            <div class="code-box-demo">
              <p>
                <strong>* Note:</strong>
                Every calculation in RTL grid system is from right side (offset, push, etc.)
              </p>
              <j-row>
                <j-col :span="8">col-8</j-col>
                <j-col :span="8" :offset="8">col-8</j-col>
              </j-row>
              <j-row>
                <j-col :span="6" :offset="6">col-6 col-offset-6</j-col>
                <j-col :span="6" :offset="6">col-6 col-offset-6</j-col>
              </j-row>
              <j-row>
                <j-col :span="12" :offset="6">col-12 col-offset-6</j-col>
              </j-row>
              <j-row>
                <j-col :span="18" :push="6">col-18 col-push-6</j-col>
                <j-col :span="6" :pull="18">col-6 col-pull-18</j-col>
              </j-row>
            </div>
          </div>
        </j-col>
      </j-row>
    </div>
  </j-config-provider>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, ref } from 'vue';

import {
  SearchOutlined as SearchIcon,
  SmileOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons-vue';
import type { TreeProps, TreeSelectProps, CascaderProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    SmileOutlined,
    DownloadOutlined,
    LeftOutlined,
    RightOutlined,
    MinusOutlined,
    PlusOutlined,
    SearchIcon,
  },
  setup() {
    const state = reactive({
      currentStep: 0,
      modalVisible: false,

      badgeCount: 5,
      showBadge: true,
      direction: 'ltr' as 'ltr' | 'rtl',
      popupPlacement: 'bottomLeft' as CascaderProps['placement'],
    });
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    const treeData: TreeProps['treeData'] = [
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            disabled: true,
            children: [
              { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
              { title: 'leaf', key: '0-0-0-1' },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [{ key: '0-0-1-0', title: 'sss' }],
          },
        ],
      },
    ];

    const treeSelectData = ref<TreeSelectProps['treeData']>([
      {
        title: 'parent 1',
        value: 'parent 1',
        children: [
          {
            title: 'parent 1-0',
            value: 'parent 1-0',
            children: [
              {
                title: 'my leaf',
                value: 'leaf1',
              },
              {
                title: 'your leaf',
                value: 'leaf2',
              },
            ],
          },
          {
            title: 'parent 1-1',
            value: 'parent 1-1',
          },
        ],
      },
    ]);
    watch(
      () => state.direction,
      directionValue => {
        if (directionValue === 'rtl') {
          state.popupPlacement = 'bottomRight';
        } else {
          state.popupPlacement = 'bottomLeft';
        }
      },
    );
    const cascaderOptions = [
      {
        value: 'tehran',
        label: 'تهران',
        children: [
          {
            value: 'tehran-c',
            label: 'تهران',
            children: [
              {
                value: 'saadat-abad',
                label: 'سعادت آیاد',
              },
            ],
          },
        ],
      },
      {
        value: 'ardabil',
        label: 'اردبیل',
        children: [
          {
            value: 'ardabil-c',
            label: 'اردبیل',
            children: [
              {
                value: 'primadar',
                label: 'پیرمادر',
              },
            ],
          },
        ],
      },
      {
        value: 'gilan',
        label: 'گیلان',
        children: [
          {
            value: 'rasht',
            label: 'رشت',
            children: [
              {
                value: 'district-3',
                label: 'منطقه ۳',
              },
            ],
          },
        ],
      },
    ];

    // ==== Cascader ====
    const cascaderFilter = (inputValue, path) =>
      path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    const onCascaderChange = value => {
      console.log(value);
    };
    // ==== End Cascader ====

    // ==== Modal ====
    const showModal = () => {
      state.modalVisible = true;
    };

    // ==== End Modal ====

    const onStepsChange = currentStep => {
      console.log('onChange:', currentStep);
      state.currentStep = currentStep;
    };

    // ==== Badge ====

    const increaseBadge = () => {
      const badgeCount = state.badgeCount + 1;
      state.badgeCount = badgeCount;
    };

    const declineBadge = () => {
      let badgeCount = state.badgeCount - 1;
      if (badgeCount < 0) {
        badgeCount = 0;
      }
      state.badgeCount = badgeCount;
    };

    const onChangeBadge = showBadge => {
      state.showBadge = showBadge;
    };
    return {
      state,
      cascaderOptions,
      cascaderFilter,
      onCascaderChange,
      showModal,
      onStepsChange,
      increaseBadge,
      declineBadge,
      onChangeBadge,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      treeData,
      treeSelectData,
      rateValue: ref(2),
    };
  },
});
</script>
<style lang="less">
.direction-components {
  .button-demo .ant-btn,
  .button-demo .ant-btn-group {
    margin-right: 8px;
    margin-bottom: 12px;
  }
  .button-demo .ant-btn-group > .ant-btn,
  .button-demo .ant-btn-group > span > .ant-btn {
    margin-right: 0;
    margin-left: 0;
  }

  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    vertical-align: middle;
    background: #eee;
    border-radius: 4px;
  }

  .ant-badge:not(.ant-badge-not-j-wrapper) {
    margin-right: 20px;
  }
  .ant-badge-rtl:not(.ant-badge-not-j-wrapper) {
    margin-right: 0;
    margin-left: 20px;
  }
}

[datj-theme='dark'] .head-example {
  background: rgba(255, 255, 255, 0.12);
}
</style>
