(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"9kvl":function(r,e,n){"use strict";var t=n("FfOG");n.d(e,"a",(function(){return t["b"]}));n("bCY9")},afA6:function(r,e,n){"use strict";n.r(e);var t=n("0Owb"),o=n("q1tI"),i=n.n(o),s=n("q3YX"),a=n("qLMh"),c=n("9og8"),l=n("LtsZ"),u='import React from \'react\'\r\nimport Alert from "../index"\r\nimport "../style"\r\nexport default ()=>{\r\n    return(\r\n        <>\r\n        <Alert type="warning" >\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>\r\n        <Alert type="info" closable onClose={()=>alert("\u5173\u95ed\u6210\u529f\uff01")} message="\u8bf7\u5173\u95ed"></Alert>\r\n        <Alert type="success" message=\'\u6ce8\u518c\u6210\u529f\' description=\'\u4f60\u5728\u672c\u7f51\u7ad9\u4e0a\u6ce8\u518c\u6210\u529f\u4e86\uff01\'></Alert>\r\n        </>\r\n        \r\n    )\r\n}',p="import React from 'react';\r\nimport classnames from 'classnames';\r\nimport { useState } from 'react';\r\nexport interface AlertProps {\r\n  style?: object,\r\n  closable?: boolean,\r\n  closeText?: string,\r\n  message?: string,\r\n  description?: string,\r\n  type?: 'success'|'error'|'info'|'warning',\r\n  onClose?: Function,\r\n  children?: string\r\n}\r\n\r\nconst prefixCls = 'alert';\r\n\r\nconst Alert: React.FC<AlertProps> = (props) => {\r\n  const {\r\n    style,\r\n    closable,\r\n    closeText,\r\n    message,\r\n    description,\r\n    type='info',\r\n    onClose,\r\n    children\r\n  } = props\r\n  let [visible,setVisible] = useState(true)\r\n  const handleClose = () =>{\r\n    setVisible(false)\r\n    onClose && onClose()\r\n  }\r\n  return(\r\n    visible\r\n    ? <div\r\n    className={classnames(prefixCls,type || 'warning')}\r\n    style={{\r\n      opacity:visible ? '1' : '0',\r\n      ...style\r\n    }}  \r\n  >\r\n    <div className = 'alertMes'>{message}</div>\r\n    {description&&<div className = 'alertDesc'>{description}</div>}\r\n    {\r\n      !!closable && <span className='closeBtn' \r\n      onClick={handleClose}\r\n      >{closeText ? closeText : 'x' }</span>\r\n    }\r\n    {children}\r\n  </div>\r\n  :null\r\n  ) \r\n};\r\nexport default Alert;",d="import './index.scss'",m="$prefixCls:alert;\r\n.#{$prefixCls} {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    padding: 5px 12px;\r\n    margin-bottom: 16px;\r\n    border-radius: 3px;\r\n    &.success {\r\n        background-color: #f6ffed;  \r\n        border: 1px solid #b7eb8f;      \r\n    }\r\n    &.info {\r\n        background: #edf7ff;\r\n        border: 1px solid #91d5ff;\r\n\r\n    }\r\n    &.error {\r\n        background: #fffbe6;\r\n        border: 1px solid #ff4e02;\r\n    }\r\n    &.warning {\r\n        background: #fff1f0;\r\n        border: 1px solid #FFA502;\r\n    }\r\n    .alertMes {\r\n        margin-bottom: 5px;\r\n        color: rgba(0,0,0,0.85);\r\n        font-size: 14px;\r\n        line-height: 1.5em;\r\n\r\n    }\r\n    .alertDesc {\r\n        color: rgba(0,0,0,0.65);\r\n        font-size: 14px;\r\n        line-height: 1.5em;\r\n        word-break: break-all;\r\n    }\r\n    .closeBtn {\r\n        position: absolute;\r\n        right: 8px;\r\n        top: 5px;\r\n        color: rgba(0,0,0,0.4);\r\n        cursor: pointer;\r\n    }\r\n}",v='import React from "react";\r\nimport Button from "../index"\r\nimport "../style"\r\nexport default ()=>{\r\n    return(\r\n        <>\r\n        <Button type="primary">Primary</Button>\r\n        <Button type="default">DeFault</Button>\r\n        <Button type="dashed">Dashed</Button>\r\n        <Button type="link" href="http://baidu.com">\u8df3\u8f6c\u767e\u5ea6</Button>\r\n        <Button type="text"> Text</Button>\r\n        <br/>\r\n        <Button size="middle" type="default">Middle</Button>\r\n        <Button size="large">Large</Button>\r\n        <Button size="small">Small</Button>\r\n        <br />\r\n        <Button type="primary" size="large"  shape="circle" >\u4e0b\u8f7d</Button>\r\n        <Button type="primary" size="middle"  shape="circle" >\u4e0b\u8f7d</Button>\r\n        <Button type="primary" size="small"  shape="circle" >\u4e0b\u8f7d</Button>\r\n\r\n        <Button type="primary" shape="round" size="large">\u4e0b\u8f7d</Button>\r\n        <Button type="primary" shape="round" size="middle">\u4e0b\u8f7d</Button>\r\n        <Button type="primary" shape="round" size="small">\u4e0b\u8f7d</Button>\r\n        <Button type="primary" shape="round" size="small" onClick={()=>alert("\u63d0\u4ea4\u6210\u529f")}>\r\n            submit\r\n        </Button>\r\n        </>\r\n    )\r\n}',w="import React, { ReactNode } from \"react\"\r\nimport classnames from \"classnames\"\r\n\r\nexport interface ButtonProps {\r\n    style?:object,\r\n    danger?:boolean,\r\n    disabled?:boolean,\r\n    href?:string,\r\n    htmlType?:\"button\" | \"reset\" | \"submit\" | undefined,\r\n    icon?:ReactNode,\r\n    loading?:boolean,\r\n    shape?:'default'|'circle'|'round',\r\n    size?:'large'|'middle'|'small',\r\n    target?:string,\r\n    type?:'primary'|'dashed'|'link'|'text'|'default',\r\n    onClick?:Function,\r\n    children?:string,\r\n}\r\nconst prefixCls = 'button'\r\nconst Button:React.FC<ButtonProps> = (props) => {\r\n    const {\r\n        style,\r\n        danger,\r\n        disabled,\r\n        href,\r\n        htmlType,\r\n        loading,\r\n        shape,\r\n        size,\r\n        target,\r\n        type,\r\n        onClick,\r\n        children\r\n    } = props\r\n    const handleClick = () => {\r\n        onClick && onClick()\r\n    }\r\n    if(href && !disabled) {\r\n        return(\r\n            <a href={href} {...style} className={classnames(prefixCls,'link')} target={target}>\r\n                {children}\r\n            </a>\r\n        )\r\n    }\r\n    return(\r\n        <button\r\n        disabled={disabled}   \r\n        {...style}\r\n        type={htmlType?htmlType:'button'}\r\n        className={classnames(prefixCls,size || 'middle', type || 'default',shape)}\r\n        onClick={handleClick}\r\n        >\r\n        {children}\r\n        </button>\r\n    )\r\n\r\n}\r\nexport default Button",f='import "./index.scss"',g="$prefixCls: button;\r\n$btn-primary: #3697f1;\r\n$btn-focus: #70b3f5;\r\n$btn-default-border: #007bff;\r\n$btn-danger: #f5222d;\r\n$gray-200:               #e9ecef;\r\n$gray-300:               #dee2e6;\r\n$gray-400:               #ced4da;\r\n$gray-500:               #adb5bd;\r\n$gray-600:               #6c757d;\r\n$gray-700:               #495057;\r\n$gray-800:               #343a40;\r\n$gray-900:               #212529;\r\n$large: 120px;\r\n$middle: 100px;\r\n$small: 60px;\r\n\r\n.#{$prefixCls} {\r\n    display: inline-block;\r\n    margin: 10px;\r\n    margin-bottom: 0;\r\n    border: 1px solid transparent;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    outline: none;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    text-decoration: none;\r\n    &:hover,\r\n    &:focus {\r\n        background-color: $btn-focus;\r\n        text-decoration: none;\r\n        outline: none;\r\n    }\r\n    &[disabled] {\r\n        position: relative;\r\n        box-shadow: none;\r\n    }\r\n    &.primary {\r\n        color: #fff;\r\n        background: $btn-primary;\r\n        border: 1px solid $btn-primary; \r\n        &:hover,\r\n        &:focus {\r\n            background-color: $btn-focus;\r\n            text-decoration: none;\r\n            outline: none;\r\n        }      \r\n    }\r\n    &.default {\r\n        border: 1px solid $gray-700;     \r\n        &:hover,\r\n        &:focus {\r\n            border: 1px solid $btn-default-border;\r\n            background-color: #fff;\r\n            color: $btn-default-border\r\n        }\r\n    }\r\n    &.dashed {\r\n        border: 1px dotted $gray-700;\r\n        &:hover,\r\n        &:focus {\r\n            border: 1px dotted $btn-default-border;\r\n            background-color: #fff;\r\n            color: $btn-default-border\r\n        }\r\n    }\r\n    &.link{\r\n        color:$btn-primary;\r\n        &:hover,\r\n        &:focus {\r\n            background-color: #fff;\r\n        }\r\n    }\r\n    &.text {\r\n        &:hover,\r\n        &:focus {\r\n            background-color: $gray-300;\r\n        }\r\n    }\r\n    &.large{       \r\n        width: $large;\r\n        height: 40px;\r\n        &.circle {\r\n            width: $large;\r\n            height: $large;\r\n            border-radius: calc($large/2);\r\n        }\r\n        &.round {\r\n            border-radius: calc($large/2);\r\n        }\r\n\r\n    }\r\n    &.middle{\r\n        width: $middle;        \r\n        height: 30px;\r\n        &.circle {\r\n            width: $middle;\r\n            height: $middle;\r\n            border-radius: calc($middle/2);\r\n        }\r\n        &.round {\r\n            border-radius: calc($middle/2);\r\n        }\r\n\r\n    }\r\n    &.small{\r\n        width: $small;      \r\n        height: 20px;\r\n        &.circle {\r\n            width: $small;\r\n            height: $small;\r\n            border-radius: calc($small/2);\r\n        }\r\n        &.round {\r\n            border-radius: calc($small/2);\r\n        }\r\n    }\r\n}",h="import React from \"react\"\r\nimport Image from \"../index\"\r\nimport \"../style/index.scss\"\r\nexport default () => {\r\n    return (\r\n        <>\r\n        <h4>\u52a0\u8f7d\u5931\u8d25\u6587\u5b57\u5360\u4f4d</h4>\r\n        <Image src ={['error-path','error-path']}\r\n        unloader ={<p>\u56fe\u7247\u52a0\u8f7d\u5931\u8d25</p>}\r\n        >\r\n        </Image>\r\n        <h4>\u52a0\u8f7d\u5931\u8d25\u56fe\u7247\u5360\u4f4d</h4>\r\n        <Image src ={['error-path','error-path']}\r\n        width={100}\r\n        height={100}\r\n        unloader ='https://th.bing.com/th/id/OIP.Xd2zstiokv_VCthLHHem7wAAAA?w=174&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'\r\n        >\r\n        </Image>       \r\n        </>\r\n    )\r\n}",b='import * as React from "react"\r\nimport { useState ,useEffect,useContext} from "react"\r\nimport { useImageParams,useImage } from "./useImage"\r\nimport Preview from "./Preview"\r\nimport PreviewGroup,{context} from "./PreviewGroup"\r\n//import {CSSTransition} from "react-transition-group"\r\nimport cn from "classnames"\r\nexport type ImageProps =\r\nOmit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>,\'src\'>\r\n& Omit<useImageParams,\'srcList\'> & {\r\n    loader?: JSX.Element | string;\r\n    unloader?: JSX.Element | string;\r\n    preview?: boolean,\r\n    mask?: boolean,\r\n    maskClassName?:string,\r\n    src:useImageParams[\'srcList\']\r\n}\r\nlet uuid = 0;\r\nconst Image:any= (props:ImageProps)=>{\r\n    const {\r\n        src:srcList,\r\n        loadImg,\r\n        loader ,\r\n        unloader,\r\n        preview = false,\r\n        mask,\r\n        onClick,\r\n        maskClassName,\r\n        ...imageProps\r\n    } = props\r\n    const {src,loading,error} = useImage({\r\n        srcList,\r\n        loadImg,\r\n    });\r\n    const [showPreview,setShowPreview] = useState<boolean>(false)\r\n    const {\r\n        isPreviewGroup,\r\n        setCurrent,\r\n        setisShowPreview:setGroupShowPriew,\r\n        setMousePosition: setGroupMousePosition,\r\n        registerImage,\r\n    } = useContext(context)\r\n   /* const handleShowPreview = (value:boolean) => {\r\n        setShowPreview(value)\r\n    }*/\r\n    const [currentId] = useState<number>(() => {\r\n        uuid += 1;\r\n        return uuid;\r\n    })\r\n\r\n    const onPreview = (event:React.MouseEvent<HTMLImageElement>) => {\r\n        \r\n        if(isPreviewGroup) {\r\n            setCurrent(currentId)\r\n            //console.log(currentId)\r\n            //setGroupMousePosition()\r\n            registerImage(currentId,src,preview)\r\n            setGroupShowPriew(true)\r\n        }\r\n        else setShowPreview(true)\r\n       // console.log(showPreview)\r\n        if(onClick)onClick(event)\r\n    }\r\n    useEffect(() => {\r\n        const unRegister = registerImage(currentId,src)\r\n        return unRegister;\r\n    },[])\r\n    useEffect(() => {\r\n        registerImage(currentId,src,preview)\r\n    },[src,preview])\r\n    if(src){\r\n        return (\r\n            <>\r\n                <img src={src} \r\n                {...imageProps}\r\n                data-testid="img"\r\n                onClick={preview ? onPreview : onClick}/>\r\n                {/* \u5b9e\u73b0\u56fe\u7247\u9884\u89c8\u529f\u80fd */}\r\n                {!isPreviewGroup && preview &&(<Preview\r\n                    src={src}\r\n                    showPreview={showPreview}\r\n                    setShowPreview = {setShowPreview}\r\n                    mask={mask}\r\n                    maskClassName={maskClassName}                    \r\n                ></Preview>)}\r\n            </>\r\n        )\r\n    } \r\n    if(loading){\r\n        if(typeof loader === \'string\') {\r\n            return <img src={loader} {...imageProps} />\r\n        }\r\n        else return loader;\r\n    }\r\n    if(error || error === undefined) {\r\n        if(typeof unloader === \'string\'){\r\n            return <img src={unloader} {...imageProps}></img>\r\n        }\r\n        else return unloader;\r\n    }\r\n    return null\r\n}\r\nImage.PreviewGroup = PreviewGroup\r\nexport default Image',x="import * as React from 'react'\r\nimport {useState,useEffect} from 'react'\r\n//\u5c06\u56fe\u7247\u52a0\u8f7d\u8f6c\u4e3apromise\u8c03\u7528\u5f62\u5f0f\r\nfunction imgPromise(src:string) {\r\n    return new Promise((resolve,reject) => {\r\n        const i = new Image()\r\n        i.onload = () => resolve(i);\r\n        i.onerror = () => reject(new Error(\"Can not\"+src));\r\n        i.src = src;\r\n    })\r\n}\r\n\r\nconst removeBlankArrayElements = (a:string[]) => a.filter(x=>x)\r\nconst stringToArray = (x: string | string[]) => (Array.isArray(x) ? x : [x])\r\n\r\n//\u4e00\u7ec4\u56fe\u7247\u4e2d\u627e\u5230\u53ef\u4ee5\u52a0\u8f7d\u7684\u4e00\u5f20\u56fe\u7247\r\nfunction promiseFind(sourceList:string[],imgPromise:(src:string)=>Promise<unknown>):Promise<string> {\r\n    let done = false\r\n    return new Promise((resolve,reject) => {\r\n        const queueNext = (src:string) => {\r\n            return imgPromise(src).then(()=>{\r\n                done = true;\r\n                //\u52a0\u8f7d\u6210\u529fresolve\r\n                resolve(src)\r\n            })\r\n        }\r\n        const firstPromise = queueNext(sourceList.shift() || '')\r\n        //\u6bcf\u4e00\u4e2apromise\u90fd\u8ddf\u7740catch\u65b9\u6cd5\u5904\u7406\u5f53\u524dpromise\u7684\u5931\u8d25\r\n        sourceList\r\n            .reduce((p,src) => {\r\n                //\u52a0\u8f7d\u5931\u8d25\uff0c\u7ee7\u7eed\u52a0\u8f7d\r\n                return p.catch(() => {\r\n                    if(!done) return queueNext(src)\r\n                    return;\r\n                })\r\n            },firstPromise)\r\n            //\u5168\u90fd\u52a0\u8f7d\u5931\u8d25 reject\r\n            .catch(reject)\r\n    })\r\n}\r\nexport interface useImageParams {\r\n    loadImg?: (src:string) => Promise<unknown>\r\n    srcList: string | string[]\r\n}\r\n//\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\uff0c\u52a0\u8f7d\u5907\u9009\u56fe\u7247\u6216\u8005error\u5360\u4f4d\u7b26\r\n//imgPromise\u4f5c\u4e3a\u53ef\u9009\u53c2\u6570loadImg\u4f20\u5165\uff0c\u65b9\u4fbf\u4f7f\u7528\u8005\u81ea\u5b9a\u4e49\u52a0\u8f7d\u65b9\u6cd5\r\nexport function useImage({loadImg = imgPromise,srcList}:useImageParams) \r\n    :{src:string | undefined,loading:boolean,error:any} {\r\n    const cache: {\r\n        [key:string]: Promise<string>,\r\n    } = {}\r\n    const [loading,setLoading] = useState<boolean>(true)\r\n    const [error,setError] = useState<undefined | null>(null)\r\n    const [value,setValue] = useState<string | undefined>(undefined)\r\n\r\n    //\u56fe\u7247\u94fe\u63a5\u6570\u7ec4\r\n    const sourceList = removeBlankArrayElements(stringToArray(srcList))\r\n    const sourceKey = sourceList.join('')\r\n     \r\n    useEffect(() => {\r\n        if(!cache[sourceKey]) {\r\n            if(!cache[sourceKey]) {\r\n                cache[sourceKey] = promiseFind(sourceList,loadImg)              \r\n            }\r\n        }\r\n        cache[sourceKey]\r\n            .then(src => {\r\n                setLoading(false)\r\n                setValue(src)\r\n            })\r\n            .catch(error => {\r\n                setLoading(false)\r\n                setError(error)\r\n            })\r\n    },[sourceKey])\r\n    return {src:value,loading: loading,error:error}\r\n}",P="import { string } from \"prop-types\"\r\nimport * as React from \"react\"\r\nimport { useImageParams } from \"./useImage\"\r\nimport { useState ,useEffect,useRef} from \"react\"\r\nimport cn from \"classnames\"\r\nimport {context} from \"./PreviewGroup\"\r\nimport classNames from \"classnames\"\r\nexport type PreviewProps = \r\nOmit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>,'src'>\r\n& {\r\n    src: string,\r\n    showPreview?: boolean,\r\n    mask?: boolean,\r\n    maskClassName?: string,\r\n    preview?:boolean,\r\n    onClose?:(e:MouseEvent)=>void,\r\n    countRender?: (current: number, total: number) => string;\r\n    setShowPreview?:(value:boolean)=>boolean\r\n   \r\n}\r\nconst initialPosition = {\r\n    x: -200,\r\n    y: -200,\r\n}\r\nconst Preview:any = (props:PreviewProps) => {\r\n    const {\r\n        src,\r\n        showPreview,\r\n        mask,\r\n        maskClassName,\r\n        onClose,\r\n        countRender,\r\n        setShowPreview,\r\n        ...restProps\r\n    } = props\r\n    const [mousePosition,setMousePosition] = useState<null | { x: number; y: number }>(null)  \r\n    const [position,setPosition] = useState<{ x: number,y: number }>(initialPosition)\r\n    const originPositionRef = useRef<{\r\n        originX: number,\r\n        originY: number,\r\n        deltaX: number,\r\n        deltaY: number\r\n    }>({\r\n        originX: 0,\r\n        originY: 0,\r\n        deltaX: 0,\r\n        deltaY: 0\r\n    })\r\n    let isControl = showPreview\r\n    const [isMoving,setMoving] = useState<boolean>(false)\r\n    const {previewUrls,current,isPreviewGroup,setCurrent} = React.useContext(context)\r\n    const previewGroupCount = previewUrls.size \r\n    //console.log(previewGroupCount)\r\n    const previewUrlKeys = Array.from(previewUrls.keys())\r\n    const currentPreviewIndex = previewUrlKeys.indexOf(current)\r\n    const combinationSrc = isPreviewGroup ? previewUrls.get(current) : src\r\n    const showLeftOrRightSwitches = isPreviewGroup && previewGroupCount > 1;\r\n    const showOperationProgress = isPreviewGroup && previewGroupCount >= 1;\r\n    const imgRef = React.createRef<HTMLImageElement>()\r\n\r\n    const onSwitchLeft: any = (event:React.MouseEvent<HTMLElement>) => {\r\n        event.preventDefault()\r\n        event.stopPropagation()\r\n        if(currentPreviewIndex > 0) {\r\n            setCurrent(previewUrlKeys[currentPreviewIndex-1])\r\n            //console.log(previewUrls.get(current))\r\n        }\r\n    }\r\n\r\n    const onSwitchRight: any = (event:React.MouseEvent<HTMLElement>) => {\r\n        event.preventDefault()\r\n        event.stopPropagation()\r\n        if(currentPreviewIndex < previewGroupCount - 1) {\r\n            setCurrent(previewUrlKeys[currentPreviewIndex+1])\r\n            //console.log(previewUrls.get(current))\r\n        }\r\n    }\r\n\r\n    const closePreview = (event: React.SyntheticEvent<Element>) => {\r\n        //console.log('click')\r\n        event.stopPropagation()\r\n        setShowPreview(false)\r\n        if(!isControl) {\r\n            setPosition(initialPosition)\r\n        }\r\n    }\r\n\r\n    const onWheelMove:any= (event:React.WheelEvent<HTMLElement>) => {\r\n        if(!showPreview)return\r\n        event.preventDefault()       \r\n    }\r\n\r\n    const onMouseDown:React.MouseEventHandler<HTMLDivElement>  = (event:React.MouseEvent<HTMLImageElement>) => {\r\n        if(event?.button !== 0)return;\r\n        event?.preventDefault()\r\n        event?.stopPropagation()\r\n        originPositionRef.current.deltaX = event?.pageX - position.x\r\n        originPositionRef.current.deltaY = event?.pageY - position.y\r\n        originPositionRef.current.originX = position.x\r\n        originPositionRef.current.originY = position.y\r\n        setMoving(true)\r\n    }\r\n\r\n    const onMouseMove: any = (event:React.MouseEvent<HTMLImageElement>) => {\r\n        if(showPreview && isMoving ) {\r\n            setPosition({\r\n                x: event.pageX - originPositionRef.current.deltaX,\r\n                y: event.pageY - originPositionRef.current.deltaY\r\n            })\r\n        }\r\n    }\r\n\r\n    const onMouseUp: any = () => {\r\n        if(showPreview && isMoving) {\r\n            setMoving(false)\r\n        }\r\n    }\r\n\r\n    const onKeyDown = React.useCallback((event: KeyboardEvent)=>{\r\n        if(!showPreview|| !showLeftOrRightSwitches) return;\r\n        event.preventDefault()\r\n        if(event.keyCode === 37 && currentPreviewIndex > 0){\r\n            setCurrent(previewUrlKeys[currentPreviewIndex-1])\r\n        }else if(event.keyCode === 39 && currentPreviewIndex < previewGroupCount-1){\r\n            setCurrent(previewUrlKeys[currentPreviewIndex+1])\r\n        }\r\n    },[\r\n        currentPreviewIndex,\r\n        previewGroupCount,\r\n        previewUrlKeys,\r\n        setCurrent,\r\n        showLeftOrRightSwitches,        \r\n    ])\r\n\r\n    useEffect(()=>{\r\n       window.addEventListener(\"mousemove\",onMouseMove,false)\r\n       window.addEventListener(\"mouseup\",onMouseUp,false)\r\n       window.addEventListener('wheel', onWheelMove,{passive:false});//\u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6\r\n       window.addEventListener(\"keydown\",onKeyDown,false)\r\n       return () => {\r\n        window.removeEventListener(\"mousemove\",onMouseMove,false)\r\n        window.removeEventListener(\"mouseup\",onMouseUp,false)\r\n        window.removeEventListener('wheel', onWheelMove)\r\n        window.removeEventListener(\"keydown\",onKeyDown,false)\r\n       }\r\n    },[showPreview,isMoving,onKeyDown])\r\n     //\u6eda\u8f6e\u653e\u5927\u7f29\u5c0f\u56fe\u7247\r\n     const handleZoom :React.WheelEventHandler<HTMLImageElement> = e =>{        \r\n        let {clientHeight,clientWidth,style,offsetLeft,offsetTop} = imgRef.current!\r\n        if(e.nativeEvent.deltaY <= 0 && clientWidth < 1000) {\r\n            style.width = clientWidth + 10 +'px'//\u56fe\u7247\u5bbd\u5ea6\u6bcf\u6b21\u52a010\r\n            style.height = clientHeight + 10 +'px'\r\n            style.left = offsetLeft - 5 + 'px'\r\n            style.top = offsetTop -5 + 'px'\r\n        }else if(e.nativeEvent.deltaY > 0) {\r\n            if(clientWidth > 50){\r\n                style.width = clientWidth -10 +'px'\r\n                style.height = clientHeight - 10 +'px'       \r\n                style.left = offsetLeft + 5  + 'px'\r\n                style.top = offsetTop + 5 +'px'\r\n            }else{\r\n                style.left = 0 +'px'\r\n            }          \r\n        }\r\n    }\r\n\r\n    return(\r\n        <>\r\n         {/* \u5b9e\u73b0\u56fe\u7247\u9884\u89c8\u529f\u80fd */}\r\n         {showPreview&&\r\n            <div className='img-view'                                     \r\n            >\r\n                <ul className=\"operations\">\r\n                    {showOperationProgress&& (\r\n                        <li>\r\n                            {countRender?.(currentPreviewIndex+1,previewGroupCount)?? \r\n                            `${currentPreviewIndex+1}/${previewGroupCount}`}\r\n                        </li>\r\n                    )}\r\n                </ul>\r\n                    <img src={combinationSrc} \r\n                    ref={imgRef}\r\n                    onMouseDown={onMouseDown}\r\n                    onWheel = {handleZoom}\r\n                    style={{transform:`translate3d(${position.x}px,${position.y}px,0)`}}                                        \r\n                    />\r\n                    {showLeftOrRightSwitches && (\r\n                        <div className={cn(\"switch-left\",{\r\n                            ['switch-left-disabled']:currentPreviewIndex === 0,\r\n                        })}\r\n                        onClick={onSwitchLeft}\r\n                        >&lt;</div>\r\n                    )}\r\n                    {showLeftOrRightSwitches && (\r\n                        <div className={cn('switch-right',{\r\n                            ['switch-right-disabled']:currentPreviewIndex === previewGroupCount-1\r\n                        })}\r\n                        onClick={onSwitchRight}\r\n                        >&gt;</div>)\r\n                    }\r\n            </div>                       \r\n        }\r\n        {\r\n            mask && showPreview &&(\r\n                <>\r\n                  <div className=\"close\" onClick={closePreview}>X</div>\r\n                  <div className={cn(\"mask\",maskClassName)}></div>\r\n                </>\r\n              )\r\n        }\r\n        \r\n        </>\r\n    )\r\n}\r\nexport default Preview",y='import { number } from "prop-types";\r\nimport * as React from "react"\r\nimport { useState,useEffect } from "react"\r\nimport type { ImageProps } from "./index"\r\nimport Preview from "./Preview";\r\nexport interface PreviewGroupPreview \r\nextends Omit<ImageProps,\'mask\' | \'maskClassName\'> {\r\n    current?: number;\r\n    currentRender?: (current: number, total: number) => string;\r\n}\r\nexport interface GroupConsumerProps {\r\n    preview?: boolean | PreviewGroupPreview;\r\n    children?: React.ReactNode;\r\n}\r\ninterface PreviewUrl {\r\n    url: string;\r\n    canPreview: boolean;\r\n}\r\nexport interface GroupConsumerValue extends GroupConsumerProps {\r\n    isPreviewGroup?: boolean;\r\n    previewUrls: Map<number, string>;\r\n    setPreviewUrls: React.Dispatch<React.SetStateAction<Map<number,PreviewUrl>>>;\r\n    current: number;\r\n    setCurrent: React.Dispatch<React.SetStateAction<number>>;\r\n    setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;\r\n    setMousePosition: React.Dispatch<React.SetStateAction<null | {x: number, y: number}>>;\r\n    registerImage: (id:number,url:string,canPreview?: boolean) => () => void;\r\n    rootClassName?: string;\r\n}\r\nexport const context = React.createContext<GroupConsumerValue>({\r\n    previewUrls: new Map(),\r\n    setPreviewUrls: () => null,\r\n    current: null,\r\n    setCurrent: () => null,\r\n    setShowPreview: () => null,\r\n    setMousePosition: () => null,\r\n    registerImage: () => () => null,\r\n    rootClassName: \'\',\r\n})\r\nconst { Provider } = context;\r\nconst Group: React.FC<GroupConsumerProps> = ({\r\n    children,\r\n    preview,\r\n}) => {\r\n    const {\r\n        visible: previewVisible = undefined,\r\n        onVisibleChange: onPreviewVisibleChange = undefined,\r\n        getContainer = undefined,\r\n        current: currentIndex = 0,\r\n        countRender = undefined\r\n    } = typeof preview === \'object\' ? preview : {};\r\n    const [previewUrls,setPreviewUrls] = useState<Map<number,PreviewUrl>>(new Map());\r\n    const [current,setCurrent] = useState<number>()\r\n    const [isShowPreview,setisShowPreview] = useState(previewVisible)\r\n    const [mousePosition,setMousePosition] = useState<null | { x: number,y: number}>(null)\r\n    const isControlled = previewVisible !== undefined\r\n    const previewUrlKeys = Array.from(previewUrls.keys())\r\n    const currentControlledkey = previewUrlKeys[currentIndex]\r\n    const canPreviewUrls = new Map<number,string>(\r\n        Array.from(previewUrls)\r\n            .filter(([,{canPreview}]) => !!canPreview)\r\n            .map(([id,{url}]) => [id,url])\r\n    )\r\n   \r\n    const registerImage = (id: number,url: string,canPreview: boolean = true) => {\r\n        const unRegister = () => {\r\n            setPreviewUrls(oldPreviewUrls => {\r\n                const clonePreviewUrls = new Map(oldPreviewUrls);\r\n                const deleteResult = clonePreviewUrls.delete(id);\r\n                return deleteResult ? clonePreviewUrls : oldPreviewUrls;\r\n            })\r\n        }\r\n        setPreviewUrls(oldPreviewUrls => {\r\n            return new Map(oldPreviewUrls).set(id,{\r\n                url,\r\n                canPreview,\r\n            })\r\n        })\r\n        return unRegister\r\n    }\r\n    \r\n    useEffect(()=>{\r\n        setCurrent(currentControlledkey)\r\n    },[currentControlledkey])\r\n\r\n    useEffect(()=>{\r\n        if(!isShowPreview && isControlled) {\r\n            setCurrent(currentControlledkey)\r\n        }\r\n    },[currentControlledkey,isControlled,isShowPreview])\r\n\r\n    return(\r\n        <Provider\r\n        value={{\r\n            isPreviewGroup: true,\r\n            previewUrls:canPreviewUrls,\r\n            setPreviewUrls,\r\n            current,\r\n            setCurrent,\r\n            setisShowPreview,\r\n            setMousePosition,\r\n            registerImage\r\n        }}\r\n        >\r\n\r\n           {children}\r\n          <Preview\r\n            src={canPreviewUrls.get(current)}\r\n            showPreview ={isShowPreview}\r\n            setShowPreview={setisShowPreview}\r\n            mask={true}\r\n            countRender={countRender}\r\n          >\r\n          </Preview>\r\n        </Provider>\r\n    )\r\n}\r\nexport default Group',C=".fade-enter-active,\r\n.fade-leave-active {\r\n    transition: all 0.2s linear;\r\n    transform: translate3d(0,0,0);\r\n}\r\n.fade-enter,\r\n.fade-leave-active {\r\n    transform: translate3d(100%,0,0);\r\n}\r\n\r\n.img-view {\r\n        position: fixed;\r\n        z-index: 9999;\r\n        top: 0;\r\n        left: 0;\r\n        background: (0,0,0,0.7);\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n        transition: transform 0.3s cubic-bezier(0,0,0.25,1) 0s; \r\n        .operations {\r\n            pointer-events: auto;\r\n            list-style: none;\r\n            position: absolute;\r\n            display: flex;\r\n            bottom: 0;\r\n            left: 50%;\r\n            transform: translateX(-50%);\r\n            align-items: center;\r\n            flex-direction: row-reverse;\r\n            \r\n        }       \r\n        img {\r\n        width: 500px;\r\n        height: 500px;\r\n        display: block;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translateX(-50%) translateY(-50%);\r\n        z-index: 10000;\r\n        }\r\n        .switch-left {\r\n            position: absolute;\r\n            left: 40%;\r\n            bottom: 0;\r\n            width: 55px;\r\n            height: 55px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            pointer-events: auto;\r\n            cursor: pointer;\r\n            &-disabled {\r\n                cursor: not-allowed;\r\n            }\r\n        }\r\n        .switch-right {\r\n            position: absolute;\r\n            right: 40%;\r\n            bottom: 0;\r\n            width: 55px;\r\n            height: 55px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            pointer-events: auto;\r\n            cursor: pointer;\r\n            &-disabled {\r\n                cursor: not-allowed;\r\n            }\r\n        }\r\n}\r\n.mask {\r\n    background: rgba(0,0,0,0.3);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 9998;\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    //pointer-events: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #fff;\r\n    transition: opacity 0.3s;\r\n\r\n}\r\n.close {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: fixed;\r\n    top: 5%;\r\n    right: 20%;\r\n    z-index: 10000; \r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}",I="import React from \"react\"\r\nimport Image from \"../index\"\r\nimport \"../style/index.scss\"\r\nexport default () => {\r\n    return (\r\n        <>\r\n        <Image width={100} height={100}\r\n        preview={true}\r\n        mask = {true}\r\n        src = {[\r\n            'error-path',\r\n            'error-path',\r\n            'https://avatars.githubusercontent.com/u/71813516?v=4'\r\n        ]} />           \r\n        </>       \r\n    )\r\n}",k='import React from "react"\r\nimport Image from "../index"\r\nimport "../style/index.scss"\r\nexport default () => {\r\n    return (\r\n        <>\r\n        <Image \r\n        width={100}\r\n        height={100}\r\n        src=\'https://avatars.githubusercontent.com/u/71813516?v=4\'\r\n        loader={<p>\u56fe\u7247\u52a0\u8f7d\u4e2d...</p>}\r\n        >\r\n        </Image>\r\n        </>\r\n    )\r\n}',R='import * as React from "react"\r\nimport Image from ".."\r\nimport "../style/index.scss"\r\n\r\nexport default function PreviewGroup() {\r\n    return (\r\n        <div>\r\n            <Image.PreviewGroup\r\n            preview={{\r\n                countRender: (current,total) => `\u7b2c${current}\u5f20/\u603b\u5171${total}\u5f20`,\r\n            }}\r\n            >\r\n                <Image width={200} preview={true} mask={true} height={100} width={100} src="https://avatars.githubusercontent.com/u/71813516?v=4"></Image>\r\n                <Image width={200} preview={true} height={100} width={100} src="https://tse2-mm.cn.bing.net/th/id/OIP-C.mb5H7dYDOybJXGGOYO-ViAHaGy?w=182&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7"></Image>\r\n            </Image.PreviewGroup>\r\n        </div>\r\n    )\r\n}',S={"alert-basic":{component:Object(l["dynamic"])({loader:function(){var r=Object(c["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.e(7).then(n.bind(null,"025M"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}}),r)})));function e(){return r.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:u},"index.tsx":{import:"../index",content:p},"style/index.ts":{import:"../style",content:d},"style/index.scss":{import:"./index.scss",content:m}},dependencies:{react:{version:"18.2.0"},classnames:{version:"2.3.2"}},componentName:"alert",identifier:"alert-basic"}},"button-basic":{component:Object(l["dynamic"])({loader:function(){var r=Object(c["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.e(6).then(n.bind(null,"oSWt"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}}),r)})));function e(){return r.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v},"index.tsx":{import:"../index",content:w},"style/index.ts":{import:"../style",content:f},"style/index.scss":{import:"./index.scss",content:g}},dependencies:{react:{version:"18.2.0"},classnames:{version:"2.3.2"}},componentName:"button",identifier:"button-basic"}},"image-basic":{component:Object(l["dynamic"])({loader:function(){var r=Object(c["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.e(5).then(n.bind(null,"ERXH"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}}),r)})));function e(){return r.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h},"index.tsx":{import:"../index",content:b},"useImage.ts":{import:"./useImage",content:x},"Preview.tsx":{import:"./Preview",content:P},"PreviewGroup.tsx":{import:"./PreviewGroup",content:y},"style/index.scss":{import:"../style/index.scss",content:C}},dependencies:{react:{version:"18.2.0"},classnames:{version:"2.3.2"}},componentName:"image",identifier:"image-basic"}},"image-previewimage":{component:Object(l["dynamic"])({loader:function(){var r=Object(c["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.e(5).then(n.bind(null,"AIBA"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}}),r)})));function e(){return r.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:I},"index.tsx":{import:"../index",content:b},"useImage.ts":{import:"./useImage",content:x},"Preview.tsx":{import:"./Preview",content:P},"PreviewGroup.tsx":{import:"./PreviewGroup",content:y},"style/index.scss":{import:"../style/index.scss",content:C}},dependencies:{react:{version:"18.2.0"},classnames:{version:"2.3.2"}},componentName:"image",identifier:"image-previewimage"}},"image-loaderimage":{component:Object(l["dynamic"])({loader:function(){var r=Object(c["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.e(5).then(n.bind(null,"5+hv"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}}),r)})));function e(){return r.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k},"index.tsx":{import:"../index",content:b},"useImage.ts":{import:"./useImage",content:x},"Preview.tsx":{import:"./Preview",content:P},"PreviewGroup.tsx":{import:"./PreviewGroup",content:y},"style/index.scss":{import:"../style/index.scss",content:C}},dependencies:{react:{version:"18.2.0"},classnames:{version:"2.3.2"}},componentName:"image",identifier:"image-loaderimage"}},"image-previewgroup":{component:Object(l["dynamic"])({loader:function(){var r=Object(c["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.e(5).then(n.bind(null,"/GZl"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}}),r)})));function e(){return r.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:R},"index.tsx":{import:"../index",content:b},"useImage.ts":{import:"./useImage",content:x},"Preview.tsx":{import:"./Preview",content:P},"PreviewGroup.tsx":{import:"./PreviewGroup",content:y},"style/index.scss":{import:"../style/index.scss",content:C}},dependencies:{react:{version:"18.2.0"},classnames:{version:"2.3.2"}},componentName:"image",identifier:"image-previewgroup"}}},M=n("x2v5"),E=n("KcUY"),L=n.n(E);e["default"]=r=>i.a.createElement(L.a,Object(t["a"])({},r,{config:s,demos:S,apis:M}))},q3YX:function(r){r.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"july-design","meta":{"order":null}},{"title":"\u7ec4\u4ef6","path":"/alert","meta":{"order":3,"__fallback":true},"children":[{"path":"/alert","title":"Alert \u8b66\u544a\u63d0\u793a","meta":{}},{"path":"/button","title":"Button","meta":{}},{"path":"/image","title":"Image \u56fe\u7247","meta":{}}]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{},"title":"july design","mode":"doc","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(r){r.exports=JSON.parse("{}")}}]);