(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{PpiC:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function a(e,t){if(null==e)return{};var r,a,o=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return a}))},k1Sb:function(e,t,r){},oypX:function(e,t,r){"use strict";r.r(t);var n=r("tJVT"),a=r("q1tI"),o=r.n(a),i=r("PpiC"),l=e=>{var t=e.length-1;return t<0?0:e[t].bottom},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;if(e>=1){var n=t[e].top-(t[e-r]?t[e-r].top:0);return t[e-1].bottom-n}return 0},u=(e,t)=>{Array.from(t).forEach((t=>{var r=Number(t.getAttribute("date-index")),n=t.getBoundingClientRect(),a=n.height,o=e[r].height,i=o-a;if(i){e[r].bottom=e[r].bottom-i,e[r].height=a;for(var l=r+1;l<e.length;l++)e[l].top=e[l-1].bottom,e[l].bottom=e[l].bottom-i}}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0,n=Array(t);while(r<t)n[r]={index:r,height:e,top:r*e,bottom:(1+r++)*e};return n},m=s,v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0,n=e.length-1,a=null;while(r<=n){var o=Math.floor((r+n)/2),i=e[o].bottom;if(i===t)return o+1;i<t?r=o+1:i>t&&((null===a||a>o)&&(a=o),n=o-1)}return a},b=(e,t,r)=>{var n=e.length,a=t+r;return n>0?Math.min(n,a):a},d="object"===typeof navigator&&/Firefox/i.test(navigator.userAgent),f=d,h=["resources","estimatedItemSize","Item","virtual","visibleCount","height"];function g(e){var t=e.resources,r=e.estimatedItemSize,o=e.Item,s=(e.virtual,e.visibleCount),d=(e.height,Object(i["a"])(e,h),m(r,t.length)),g=1,p=Object(a["useState"])(0),O=Object(n["a"])(p,2),j=O[0],y=O[1],E=Object(a["useState"])(l(d)),w=Object(n["a"])(E,2),S=w[0],x=w[1],I=Object(a["useState"])(0),C=Object(n["a"])(I,2),k=C[0],M=C[1],L=Object(a["useState"])(s),A=Object(n["a"])(L,2),N=A[0],P=A[1],z=Object(a["useState"])(s),F=Object(n["a"])(z,2),J=F[0],R=F[1],q=Object(a["useRef"])(),D=Object(a["useRef"])(),T=()=>{var e,t=q||D,r=null===(e=t.current)||void 0===e?void 0:e.parentElement;switch(window.getComputedStyle(r).overflowY){case"auto":case"scroll":case"overlay":case"visible":return r}return document.body},B=Math.min(k,g*J),H=Math.min(t.length-N,g*J),V=t.slice(k-B,N+H),X=e=>{var r,n=e.myvisibleCount,a=e.startIndex;y(a>=1?null===(r=d[a-1])||void 0===r?void 0:r.bottom:0),x(l(d)),M(a),R(n),P(b(t,a,n))},Y=()=>{requestAnimationFrame((()=>{var e=T(),t=e.scrollTop,r=v(d,t);X({myvisibleCount:J,startIndex:r})}))};return Object(a["useEffect"])((()=>{var e,t=null===(e=D.current)||void 0===e?void 0:e.children;t.length&&(u(d,t),x(l(d)),y(c(k,d,B)))}),[]),Object(a["useLayoutEffect"])((()=>{var e=T();return e.addEventListener("scroll",Y,!1),f?e.addEventListener("DOMMouseScroll",Y,!1):e.addEventListener("wheel",Y,!1),()=>{e&&(e.removeEventListener("scroll",Y,!1),f?e.removeEventListener("DOMMouseScroll",Y,!1):e.removeEventListener("wheel",Y,!1))}}),[]),a["createElement"]("div",{className:"list-container"},a["createElement"]("div",{ref:q,style:{height:"".concat(S,"px")},className:"list-platform"}),a["createElement"]("ul",{ref:D,className:"list",style:{transform:"translate3d(0,".concat(j,"px,0)")}},V.map(((e,t)=>a["createElement"]("li",{key:e.id||e.key||t,"data-index":"".concat(k+t)},a["createElement"](o,{data:e}))))))}var p=g,O=(r("k1Sb"),e=>{var t=e.data,r=parseInt(t),n=r%2?"40px":"80px";return o.a.createElement("div",{style:{lineHeight:n,background:r%2?"#f5f5f5":"#fff"}},o.a.createElement("h3",null,"#",r," title name"))}),j=o.a.memo(O),y=()=>{for(var e=[],t=0;t<1e4;t++)e.push("".concat(t," Item"));return e};t["default"]=()=>{var e=Object(a["useState"])(y()),t=Object(n["a"])(e,2),r=t[0],i=t[1],l=()=>{i(y())};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("button",{onClick:l},"\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u6e90")),o.a.createElement(p,{Item:j,resources:r,estimatedItemSize:60,visibleCount:10}))}}}]);