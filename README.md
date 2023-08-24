# Jetlinks-ui-components

前端 UI 组件库，采用 [vue3](https://v3.cn.vuejs.org) + [TypeScript](https://www.typescriptlang.org/zh/docs/handbook/2/basic-types.html) + [ant-design-vue](https://www.antdv.com/components/overview-cn) 开发

## 特性

整合 [element-plus](https://element-plus.org/zh-CN/) 、 [ant-design-vue](https://www.antdv.com/components/overview-cn) 和 [naive-ui](https://www.naiveui.com/zh-CN/os-theme) 组件和方法，更加全面、方便快捷于项目开发

## 代码规范

本项目采用 [Airbnb](./airbnb.md) 前端代码规范

## 安装、运行

需要 node 16.x 环境及以上

```bash
#安装依赖
yarn

# 运行
yarn dev

# 打包组件示例页面
yarn site

# 打包组件库
yarn compile
```

## 组件库发布

```bash
# 发布组件库到npm库
npm publish

# 撤销已发布的组件
npm unpublish jetlinks-ui-components@版本号
```
