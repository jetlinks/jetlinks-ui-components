---
category: Components
subtitle: 上传
cols: 1
type: 导航
title: Upload
cover: https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Upload.svg
---

## API

```html
<j-upload /><j-button>上传文件</j-button></j-upload>
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |  |
| --- | --- | --- | --- | --- | --- |
| accept | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | 无 |  |  |
| action | 上传的地址 | string\|(file) => `Promise` | 无 |  |  |
| drag | 是否拖拽上传 | boolean | false |  |  |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）。 | (file, fileList) => `boolean` \| `Promise` | 无 |  |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | function | 无 |  |  |
| data | 上传所需参数或返回上传参数的方法 | object\|(file) => object | 无 |  |  |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false | 3.0 |  |
| disabled | 是否禁用 | boolean | false |  |  |
| downloadIcon | 自定义下载 icon | v-slot:iconRender="{file: UploadFile}" | - | 3.0 |  |
| fileList | 已经上传的文件列表（受控） | object\[] | 无 |  |  |
| headers | 设置上传的请求头部，IE10 以上有效 | object | 无 |  |  |
| iconRender | 自定义显示 icon | v-slot:iconRender="{file: UploadFile, listType?: UploadListType}" | - | 3.0 |  |
| isImageUrl | 自定义缩略图是否使用 &lt;img /> 标签进行显示 | (file: UploadFile) => boolean | - | 3.0 |  |
| itemRender | 自定义上传列表项 | v-slot:itemRender="{originNode: VNode, file: UploadFile, fileList: object\[], actions: { download: function, preview: function, remove: function }" | - | 3.0 |  |
| listType | 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card` | string | `text` |  |  |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - | 3.0 |  |
| method | 上传请求的 http method | string | `post` | 1.5.0 |  |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件。 | boolean | false |  |  |
| name | 发到后台的文件参数名 | string | `file` |  |  |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true | 3.0 |  |
| previewFile | 自定义文件预览逻辑 | (file: File \| Blob) => Promise&lt;dataURL: string> | 无 | 1.5.0 |  |
| previewIcon | 自定义预览 icon | v-slot:iconRender="{file: UploadFile}" | - | 3.0 |  |
| progress | 自定义进度条样式 | [ProgressProps](/components/progress/#API)（仅支持 `type="line"`） | { strokeWidth: 2, showInfo: false } | 3.0 |  |
| removeIcon | 自定义删除 icon | v-slot:iconRender="{file: UploadFile}" | - | 3.0 |  |
| showUploadList | 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon 和 showDownloadIcon | boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean } | true | showDownloadIcon(3.0) |  |
| supportServerRender | 服务端渲染时需要打开这个 | boolean | false |  |  |
| withCredentials | 上传请求时是否携带 cookie | boolean | false |  |  |