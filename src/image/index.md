---
title: Image 图片
group:
  title: 组件
  order: 3
---

# Image 图片

可预览的图片

## 何时使用

1.需要展示图片时使用

2.加载大图时显示 loading 或加载失败时容错处理

## 代码演示

### 基本用法

#### 图片加载失败

<code src="./demo/basic.tsx"></code>

#### 预览图片,图片部分加载失败

预览图片可以放大缩小，鼠标拖拽图片

<code src="./demo/previewImage.tsx"></code>

#### 当网络速度较慢时，设置加载中占位

<code src="./demo/loaderImage.tsx"></code>

| 属性          | 说明                           | 类型                    | 默认值     |
| ------------- | ------------------------------ | ----------------------- | ---------- |
| src           | 图片地址                       | string/string[]         | -          |
| preview       | 预览参数,为 false 时禁用       | boolean                 | false      |
| loader        | 加载过程占位                   | ReactNode/string        | -          |
| unloader      | 加载失败占位                   | ReactNode/string        | -          |
| loadImg       | 图片加载方法，返回一个 Promise | (src:string) => Promise | imgPromise |
| width         | 图片宽度                       | number                  | -          |
| height        | 图片高度                       | number                  | -          |
| mask          | 预览时加遮罩层                 | boolean                 | -          |
| maskClassName | 遮罩层自定义样式               | string                  | -          |
