---
title: Upload
group:
  title: 组件
  order: 5
---

# Upload 上传文件组件

用于上传文件

## 何时使用

需要上传文件或者图片时使用

## 代码演示

### 基本用法

<code src="./demo/base.tsx"></code>

<code src="./demo/beforeUpload.tsx"></code>

| 属性       | 说明                                             | 类型                                         | 默认值 |
| ---------- | ------------------------------------------------ | -------------------------------------------- | ------ |
| name       | 文件上传给服务器的参数                           | string                                       | file   |
| style      | 根组件的内联类型                                 | object                                       | {}     |
| className  | 根组件的类名                                     | string                                       | -      |
| disabled   | 是否禁用                                         | boolean                                      | false  |
| action     | form action url                                  | string/function(file):string/Promsie<string> | -      |
| method     | 请求方法                                         | string                                       | post   |
| data       | 其他上传的数据类型或者一个返回任意数据类型的函数 | object/function(file)                        | -      |
| accept     | http 头部，现代浏览器支持                        | object                                       | {}     |
| onStart    | 开始上传文件                                     | function                                     | -      |
| onError    | 发生错误时的回调函数                             | function                                     | -      |
| onSuccess  | 上传成功的回调函数                               | fucntion                                     | -      |
| onProgress | 目前文件上传进度回调函数                         | function                                     | -      |
