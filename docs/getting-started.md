## july-design

https://coloey.github.io/july-design/
npm 地址：https://www.npmjs.com/package/july-design

### 使用方式：

```js
npm install july-design
```

或者

```js
yarn add july-design
```

或者

```js
pnpm add july-design
```

### 引入组件方式

采用组件和样式抽离，可以自定义样式, &eg Button 组件引入及使用

```js
import { Button } from "july-design/lib/button";
import "july-design/lib/button/style";
<Button type="primary">Primary</Button>;
```

或者配置 babel-plugin-import 实现按需导入
