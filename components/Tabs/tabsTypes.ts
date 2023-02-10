import { tabsProps as TabsProps } from "ant-design-vue/lib/tabs/src/Tabs";

export const tabsProps = {
  ...TabsProps(),
  animated: {
    type: Object || Boolean,
    default: {inkBar: true, tabPane: false}
  }
}