---
title: Button
group:
  title: 组件
  order: 2
---

# Button 按钮

按钮用于开始一个即时操作。

### 何时使用

标记了一组操作命令，响应用户点击行为，触发相应业务逻辑

## 代码演示

### 基本用法

常用的五种按钮类型：主按钮，次按钮，虚线按钮，文本按钮和链接按钮。主按钮在同一个操作区域·最多出现一次
<code src="./demo/basic.tsx"></code>

## API

| 属性     | 说明                                                | 类型                             | 默认值    |
| -------- | --------------------------------------------------- | -------------------------------- | --------- |
| disabled | 按钮失效状态                                        | boolean                          | false     |
| href     | 点击跳转地址，指定此属性 button 的行为和 a 链接一致 | string                           | -         |
| shape    | 设置按钮形状                                        | default/circle/round             | 'default' |
| size     | 设置按钮大小                                        | large/middle/small               | middle    |
| target   | 相当于 a 链接的 target 属性，href 存在时生效        | string                           |
| type     | 设置按钮类型                                        | primary/dashed/link/text/default | default   |
| onClick  | 点击按钮时的回调                                    | (event)=>void                    | -         |
