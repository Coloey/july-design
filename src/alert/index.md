---
title: Alert 警告提示
group:
  title: 组件
  order: 1
---

# Alert 警告提示

警告提示，展现需要关注的信息。

## 代码演示

### 基本用法

<code src="./demo/basic.tsx"></code>

## API

| 属性        | 说明                     | 类型                               | 默认值 |
| ----------- | ------------------------ | ---------------------------------- | ------ |
| type        | 设置提示的样式           | 'success'/'info'/'error'/'warning' | 'info' |
| closable    | 默认不显示关闭按钮       | boolean                            | -      |
| closeText   | 设置按钮关闭提示信息     | string                             | -      |
| message     | 警告提示内容             | string                             | -      |
| description | 警告提示的辅助性文字介绍 | string                             | -      |
| onClose     | 关闭时触发的回调函数     | (e:MouseEvent)=>void               | -      |
