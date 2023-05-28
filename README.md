## july-design
###  https://coloey.github.io/july-design/
### npm地址：https://www.npmjs.com/package/july-design
## 使用方式：
```
npm install july-design
```
或者
```
yarn add july-design
```
或者
```
pnpm add july-design
```
### 引入组件方式
采用组件和样式抽离，可以自定义样式,
&eg Button组件引入及使用
```react
import { Button } from "july-design/lib/button";
import "july-design/lib/button/style";
<Button type="primary">Primary</Button>
```
或者配置babel-plugin-import实现按需导入
