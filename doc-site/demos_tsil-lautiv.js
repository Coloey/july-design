(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{PpiC:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function o(e,t){if(null==e)return{};var r,o,a=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return o}))},oypX:function(e,t,r){"use strict";r.r(t);var n=r("tJVT"),o=r("q1tI"),a=r.n(o),i=r("PpiC"),l=e=>{var t=e.length-1;return t<0?0:e[t].bottom},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;if(e>=1){var n=t[e].top-(t[e-r]?t[e-r].top:0);return t[e-1].bottom-n}return 0},u=(e,t)=>{Array.from(t).forEach((t=>{var r=Number(t.getAttribute("date-index")),n=t.getBoundingClientRect(),o=n.height,a=e[r].height,i=a-o;if(i){e[r].bottom=e[r].bottom-i,e[r].height=o;for(var l=r+1;l<e.length;l++)e[l].top=e[l-1].bottom,e[l].bottom=e[l].bottom-i}}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0,n=Array(t);while(r<t)n[r]={index:r,height:e,top:r*e,bottom:(1+r++)*e};return n},v=s,m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0,n=e.length-1,o=null;while(r<=n){var a=Math.floor((r+n)/2),i=e[a].bottom;if(i===t)return a+1;i<t?r=a+1:i>t&&((null===o||o>a)&&(o=a),n=a-1)}return o},d=(e,t,r)=>{var n=e.length,o=t+r;return n>0?Math.min(n,o):o},b="object"===typeof navigator&&/Firefox/i.test(navigator.userAgent),f=b,h=["resources","estimatedItemSize","Item","virtual","visibleCount","height"];function g(e){var t=e.resources,r=e.estimatedItemSize,a=e.Item,s=(e.virtual,e.visibleCount),b=(e.height,Object(i["a"])(e,h),v(r,t.length)),g=1,p=Object(o["useState"])(0),O=Object(n["a"])(p,2),y=O[0],j=O[1],E=Object(o["useState"])(l(b)),w=Object(n["a"])(E,2),x=w[0],S=w[1],I=Object(o["useState"])(0),C=Object(n["a"])(I,2),M=C[0],k=C[1],L=Object(o["useState"])(s),A=Object(n["a"])(L,2),P=A[0],z=A[1],F=Object(o["useState"])(s),J=Object(n["a"])(F,2),R=J[0],q=J[1],D=Object(o["useRef"])(),T=Object(o["useRef"])(),B=()=>{var e,t=D||T,r=null===(e=t.current)||void 0===e?void 0:e.parentElement;switch(window.getComputedStyle(r).overflowY){case"auto":case"scroll":case"overlay":case"visible":return r}return document.body},H=Math.min(M,g*R),N=Math.min(t.length-P,g*R),V=t.slice(M-H,P+N),X=e=>{var r,n=e.myvisibleCount,o=e.startIndex;j(o>=1?null===(r=b[o-1])||void 0===r?void 0:r.bottom:0),S(l(b)),k(o),q(n),z(d(t,o,n))},Y=()=>{requestAnimationFrame((()=>{var e=B(),t=e.scrollTop,r=m(b,t);X({myvisibleCount:R,startIndex:r})}))};return Object(o["useEffect"])((()=>{var e,t=null===(e=T.current)||void 0===e?void 0:e.children;t.length&&(u(b,t),S(l(b)),j(c(M,b,H)))}),[]),Object(o["useLayoutEffect"])((()=>{var e=B();return e.addEventListener("scroll",Y,!1),f?e.addEventListener("DOMMouseScroll",Y,!1):e.addEventListener("wheel",Y,!1),()=>{e&&(e.removeEventListener("scroll",Y,!1),f?e.removeEventListener("DOMMouseScroll",Y,!1):e.removeEventListener("wheel",Y,!1))}}),[]),o["createElement"]("div",{ref:D,style:{height:"".concat(x,"px")}},o["createElement"]("ul",{ref:T,style:{transform:"translate3d(0,".concat(y,"px,0)")}},V.map(((e,t)=>o["createElement"]("li",{key:e.id||e.key||t,"data-index":"".concat(M+t)},o["createElement"](a,{data:e}))))))}var p=g,O=e=>{var t=e.data,r=parseInt(t),n=r%2?"40px":"80px";return a.a.createElement("div",{style:{lineHeight:n,background:r%2?"#f5f5f5":"#fff"}},a.a.createElement("h3",null,"#",r," title name"))},y=a.a.memo(O),j=()=>{for(var e=[],t=0;t<1e4;t++)e.push("".concat(t," Item"));return e};t["default"]=()=>{var e=Object(o["useState"])(j()),t=Object(n["a"])(e,2),r=t[0],i=t[1],l=()=>{i(j())};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("button",{onClick:l},"\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u6e90")),a.a.createElement("div",{style:{height:"400px",overflow:"scroll",border:"1px solid #f5f5f5",padding:"0 10px"}},a.a.createElement(p,{Item:y,resources:r,estimatedItemSize:60,visibleCount:10})))}}}]);