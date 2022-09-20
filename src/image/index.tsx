import * as React from "react"
import { useState ,useEffect} from "react"
import { useImageParams,useImage } from "./useImage"
//import {CSSTransition} from "react-transition-group"
import cn from "classnames"
export type ImageProps =
Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>,'src'>
& Omit<useImageParams,'srcList'> & {
    src: useImageParams['srcList'];
    loader?: JSX.Element | null | string;
    unloader?: JSX.Element | null | string;
    preview?: boolean
}
let className;
let prefixCls = "Image"
const Image : React.FC<ImageProps>=(props)=>{
    const {
        src:srcList,
        loadImg,
        loader = null,
        unloader = null,
        preview = false,
        onClick,
        ...imgProps      
    } = props
    const {src,loading,error} = useImage({
        srcList,
        loadImg,
    });
    const [showPreview,setShowPreview] = useState<Boolean>(false)
    const onPreview = (e:React.SyntheticEvent<Element>) => {
        e.stopPropagation()
        setShowPreview(true)
        if(onClick)onClick(e)
    }
    const closePreview = (e:React.SyntheticEvent<Element>) => {
        e.stopPropagation()
        setShowPreview(false)
    }
    if(src){
        return (
            <>
                <img src={src} {...imgProps}  onClick={preview ? onPreview : onClick}/>
                {preview&&                
                    showPreview&&
                    <div className='img-view'>
                        <img src={src} onClick={closePreview}/>
                    </div>
                }
            </>
        )
    } 
    if(loading){
        if(typeof loader === 'string') {
            return <img src={loader} {...imgProps} />
        }
        else return loader;
    }
    if(error || error ===undefined) {
        if(typeof unloader === 'string'){
            return <img src={unloader} {...imgProps}></img>
        }
        else return unloader;
    }
    return null;
}
export default Image