(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"9kvl":function(r,e,n){"use strict";var t=n("FfOG");n.d(e,"a",(function(){return t["b"]}));n("bCY9")},afA6:function(r,e,n){"use strict";n.r(e);var t=n("0Owb"),i=n("q1tI"),o=n.n(i),a=n("q3YX"),s=n("qLMh"),p=n("9og8"),l=n("rlch"),c='import React from \'react\'\r\nimport Alert from "../index"\r\nimport "../style"\r\nexport default ()=><Alert kind="info">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>',d="import React from 'react';\r\nimport t from 'prop-types';\r\n\r\nexport interface AlertProps {\r\n  children?:string\r\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\r\n}\r\n\r\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\r\n\r\nconst prefixCls = 'alert';\r\n\r\nconst kinds: KindMap = {\r\n  info: '#5352ED',\r\n  positive: '#2ED573',\r\n  negative: '#FF4757',\r\n  warning: '#FFA502',\r\n};\r\n\r\nconst Alert: React.FC<AlertProps> = ({children,kind = 'info', ...rest }) => (\r\n  <div\r\n    className={prefixCls}\r\n    style={{\r\n      background: kinds[kind],\r\n    }}\r\n    {...rest}   \r\n  >\r\n    {children}\r\n  </div>\r\n);\r\n\r\nAlert.propTypes = {\r\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\r\n};\r\n\r\nexport default Alert;",u="import './index.less'",f="@popupPrefix: alert;\r\n.@{popupPrefix} {\r\n    padding: 20px;\r\n    background: white;\r\n    border-radius: 3px;\r\n    color: white;\r\n}",m={"alert-basic":{component:Object(l["dynamic"])({loader:function(){var r=Object(p["a"])(Object(s["a"])().mark((function r(){return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.e(3).then(n.bind(null,"025M"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}}),r)})));function e(){return r.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:c},"index.tsx":{import:"../index",content:d},"style/index.ts":{import:"../style",content:u},"style/index.less":{import:"./index.less",content:f}},dependencies:{react:{version:"18.2.0"},"prop-types":{version:"15.8.1"}},componentName:"alert",identifier:"alert-basic"}}},x=n("x2v5"),b=n("KcUY"),v=n.n(b);e["default"]=r=>o.a.createElement(v.a,Object(t["a"])({},r,{config:a,demos:m,apis:x}))},q3YX:function(r){r.exports=JSON.parse('{"menus":{"en-US":{"/alert":[{"title":"\u53cd\u9988","meta":{"order":1,"__fallback":true},"children":[{"path":"/alert","title":"Alert \u8b66\u544a\u63d0\u793a","meta":{}}]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u7ec4\u4ef6","order":2,"path":"/alert"}]},"title":"My UI","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(r){r.exports=JSON.parse("{}")}}]);