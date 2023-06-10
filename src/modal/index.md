---
title: Modal
group:
  title: 组件
  order: 7
---

# Modal 模态框

<code src="./demo/basic.tsx"></code>

## API

| 属性        | 说明                                                       | 类型            | 默认值 |
| ----------- | ---------------------------------------------------------- | --------------- | ------ |
| cancleText  | 取消按钮文本                                               | string          | 取消   |
| confirmText | 确认按钮文本                                               | string          | 确认   |
| onCancel    | 取消回调函数                                               | ()=>any         | -      |
| onConfirm   | 确认回调函数                                               | ()=>any         | -      |
| children    | 可作为弹框内容                                             | any             | -      |
| bodyStyle   | 自定义样式                                                 | any             | -      |
| cantered    | 内容是否居中                                               | boolean         | true   |
| closable    | 是否可关闭                                                 | boolean         | -      |
| closeIcon   | 关闭标签                                                   | any             | -      |
| title       | 弹框标题                                                   | string          | -      |
| visible     | Modal 是否可见                                             | boolean         | -      |
| width       | Modal 宽度                                                 | string          | -      |
| footer      | 底部内容，当不需要底部默认按钮时，可以设置为 footer={null} | null /ReactNode | -      |
