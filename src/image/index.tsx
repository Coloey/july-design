import * as React from "react"
import { useState ,useEffect,useContext} from "react"
import { useImageParams,useImage } from "./useImage"
import Preview from "./Preview"
import PreviewGroup,{context} from "./PreviewGroup"
//import {CSSTransition} from "react-transition-group"
import cn from "classnames"
export type ImageProps =
Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>,'src'>
& Omit<useImageParams,'srcList'> & {
    loader?: JSX.Element | string;
    unloader?: JSX.Element | string;
    preview?: boolean,
    mask?: boolean,
    maskClassName?:string,
    src:useImageParams['srcList']
}
let uuid = 0;
const Image:any= (props:ImageProps)=>{
    const {
        src:srcList,
        loadImg,
        loader ,
        unloader,
        preview = false,
        mask,
        onClick,
        maskClassName,
        ...imageProps
    } = props
    const {src,loading,error} = useImage({
        srcList,
        loadImg,
    });
    const [showPreview,setShowPreview] = useState<boolean>(false)
    const {
        isPreviewGroup,
        setCurrent,
        setisShowPreview:setGroupShowPriew,
        setMousePosition: setGroupMousePosition,
        registerImage,
    } = useContext(context)
   /* const handleShowPreview = (value:boolean) => {
        setShowPreview(value)
    }*/
    const [currentId] = useState<number>(() => {
        uuid += 1;
        return uuid;
    })

    const onPreview = (event:React.MouseEvent<HTMLImageElement>) => {
        
        if(isPreviewGroup) {
            setCurrent(currentId)
            //console.log(currentId)
            //setGroupMousePosition()
            registerImage(currentId,src,preview)
            setGroupShowPriew(true)
        }
        else setShowPreview(true)
       // console.log(showPreview)
        if(onClick)onClick(event)
    }
    useEffect(() => {
        const unRegister = registerImage(currentId,src)
        return unRegister;
    },[])
    useEffect(() => {
        registerImage(currentId,src,preview)
    },[src,preview])
    if(src){
        return (
            <>
                <img src={src} 
                {...imageProps}
                data-testid="img"
                onClick={preview ? onPreview : onClick}/>
                {/* 实现图片预览功能 */}
                {!isPreviewGroup && preview &&(<Preview
                    src={src}
                    showPreview={showPreview}
                    setShowPreview = {setShowPreview}
                    mask={mask}
                    maskClassName={maskClassName}
                    
                ></Preview>)}
            </>
        )
    } 
    if(loading){
        if(typeof loader === 'string') {
            return <img src={loader} {...imageProps} />
        }
        else return loader;
    }
    if(error || error === undefined) {
        if(typeof unloader === 'string'){
            return <img src={unloader} {...imageProps}></img>
        }
        else return unloader;
    }
    return null
}
Image.PreviewGroup = PreviewGroup
export default Image