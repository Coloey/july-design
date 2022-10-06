import * as React from "react"
import { useState ,useEffect,useRef} from "react"
import { useImageParams,useImage } from "./useImage"
//import {CSSTransition} from "react-transition-group"
import cn from "classnames"
//type srcList=string|string[]
export type ImageProps =
Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>,'src'>
& Omit<useImageParams,'srcList'> & {
    loader?: JSX.Element | null | string;
    unloader?: JSX.Element | null | string;
    preview?: boolean,
    mask?: boolean,
    maskClassName?:string,
    src:useImageParams['srcList']

}
const initialPosition = {
    x: -280,
    y: -280,
}
const Image : React.FC<ImageProps>=(props)=>{
    const {
        src:srcList,
        loadImg,
        loader = null,
        unloader = null,
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
    const [mousePosition,setMousePosition] = useState<null | { x: number; y: number }>(null)  
    const [scale,setScale] = useState(1)
    const [position,setPosition] = useState<{ x: number,y: number }>(initialPosition)
    const originPositionRef = useRef<{
        originX: number,
        originY: number,
        deltaX: number,
        deltaY: number
    }>({
        originX: 0,
        originY: 0,
        deltaX: 0,
        deltaY: 0
    })
    let isControl = showPreview
    const [isMoving,setMoving] = useState<boolean>(false)
    const imgRef = useRef() as HTMLImageElement | null
    const onPreview = (e:MouseEvent) => {
        e.stopPropagation()
        setShowPreview(true)
        if(onClick)onClick(e)
    }
    const closePreview = (e:MouseEvent) => {
        //console.log('click')
        e.stopPropagation()
        setShowPreview(false)
        if(!isControl) {
            setPosition(initialPosition)
        }
    }
    const onWheelMove:React.WheelEventHandler<HTMLBodyElement> = event => {
        if(!showPreview)return
        event.preventDefault()       
    }
    const onMouseDown:React.MouseEventHandler<HTMLDivElement>  = event:MouseEvent => {
        if(event.button !== 0)return;
        event.preventDefault()
        event.stopPropagation()
        originPositionRef.current.deltaX = event.pageX - position.x
        originPositionRef.current.deltaY = event.pageY - position.y
        originPositionRef.current.originX = position.x
        originPositionRef.current.originY = position.y
        setMoving(true)
    }
    const onMouseMove :React.MouseEventHandler<HTMLBodyElement> = event => {
        if(showPreview && isMoving ) {
            setPosition({
                x: event.pageX - originPositionRef.current.deltaX,
                y: event.pageY - originPositionRef.current.deltaY
            })
        }
    }
    const onMouseUp:React.MouseEventHandler<HTMLBodyElement> = () => {
        if(showPreview && isMoving) {
            setMoving(false)
        }
    }
    useEffect(()=>{
       //const onMouseDownListener = window.addEventListener("mousedown",onMouseDown,false)
       const onMouseMoveListener = window.addEventListener("mousemove",onMouseMove,false)
       const onMouseUpListener = window.addEventListener("mouseup",onMouseUp,false)
       return () => {
        //window.removeEventListener("mousedown",onMouseDown)
        window.removeEventListener("mousemove",onMouseMove)
        window.removeEventListener("mouseup",onMouseUp)
       }
    },[showPreview,isMoving])
    useEffect(() => {
        window.addEventListener('wheel', onWheelMove, {
          passive: false,
        });
       
        return () => {
         window.removeEventListener('wheel', onWheelMove, {
            passive: false,
          })
        };
      }, [showPreview]);
    //滚轮放大缩小图片
    const handleZoom :React.WheelEventHandler<HTMLImageElement> = e =>{
        
        let {clientHeight,clientWidth,style} = imgRef.current as any
        if(e.nativeEvent.deltaY <= 0 && clientWidth < 1000) {
            style.width = clientWidth + 10 +'px'//图片宽度每次加10
            style.height = clientHeight + 10 +'px'
            style.left = style.left -10% +'px'
        }else if(e.nativeEvent.deltaY > 0) {
            if(clientWidth > 50){
                style.width = clientWidth -10 +'px'
                style.height = clientHeight - 10 +'px'       
                style.left = style.left +10% +'px'
            }else{
                style.left = 0
            }          
        }
    }
    
    if(src){
        return (
            <>
                <img src={src} 
                {...imgProps}
                className="image"  
                onClick={preview ? onPreview : onClick}/>
                {/* 实现图片预览功能 */}
                {preview&&showPreview&&
                    <div className='img-view'                                     
                    >
                            <img src={src} 
                            ref={imgRef}
                            onMouseDown={onMouseDown}
                            onWheel = {handleZoom}
                            style={{transform:`translate3d(${position.x}px,${position.y}px,0)`}}                                        
                            />
                    </div>                       
                }
                {
                    mask && showPreview &&(
                        <>
                          <div className="close" onClick={closePreview}>X</div>
                          <div className={cn("mask",maskClassName)}></div>
                        </>
                      )
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
    if(error || error === undefined) {
        if(typeof unloader === 'string'){
            return <img src={unloader} {...imgProps}></img>
        }
        else return unloader;
    }
    return null;
}
export default Image