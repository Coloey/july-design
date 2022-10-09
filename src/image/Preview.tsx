import { string } from "prop-types"
import * as React from "react"
import { useImageParams } from "./useImage"
import { useState ,useEffect,useRef} from "react"
import cn from "classnames"
import {context} from "./PreviewGroup"
import classNames from "classnames"
export type PreviewProps = 
Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>,'src'>
& {
    src: string,
    showPreview?: boolean,
    mask?: boolean,
    maskClassName?: string,
    preview?:boolean,
    onClose?:(e:MouseEvent)=>void,
    countRender?: (current: number, total: number) => string;
    setShowPreview?:(value:boolean)=>boolean
   
}
const initialPosition = {
    x: -200,
    y: -200,
}
const Preview:any = (props:PreviewProps) => {
    const {
        src,
        showPreview,
        mask,
        maskClassName,
        onClose,
        countRender,
        setShowPreview,
        ...restProps
    } = props
    const [mousePosition,setMousePosition] = useState<null | { x: number; y: number }>(null)  
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
    const {previewUrls,current,isPreviewGroup,setCurrent} = React.useContext(context)
    const previewGroupCount = previewUrls.size 
    //console.log(previewGroupCount)
    const previewUrlKeys = Array.from(previewUrls.keys())
    const currentPreviewIndex = previewUrlKeys.indexOf(current)
    const combinationSrc = isPreviewGroup ? previewUrls.get(current) : src
    const showLeftOrRightSwitches = isPreviewGroup && previewGroupCount > 1;
    const showOperationProgress = isPreviewGroup && previewGroupCount >= 1;
    const imgRef = React.createRef<HTMLImageElement>()

    const onSwitchLeft: any = (event:React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        event.stopPropagation()
        if(currentPreviewIndex > 0) {
            setCurrent(previewUrlKeys[currentPreviewIndex-1])
            //console.log(previewUrls.get(current))
        }
    }

    const onSwitchRight: any = (event:React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        event.stopPropagation()
        if(currentPreviewIndex < previewGroupCount - 1) {
            setCurrent(previewUrlKeys[currentPreviewIndex+1])
            //console.log(previewUrls.get(current))
        }
    }

    const closePreview = (event: React.SyntheticEvent<Element>) => {
        //console.log('click')
        event.stopPropagation()
        setShowPreview(false)
        if(!isControl) {
            setPosition(initialPosition)
        }
    }

    const onWheelMove:any= (event:React.WheelEvent<HTMLElement>) => {
        if(!showPreview)return
        event.preventDefault()       
    }

    const onMouseDown:React.MouseEventHandler<HTMLDivElement>  = (event:React.MouseEvent<HTMLImageElement>) => {
        if(event?.button !== 0)return;
        event?.preventDefault()
        event?.stopPropagation()
        originPositionRef.current.deltaX = event?.pageX - position.x
        originPositionRef.current.deltaY = event?.pageY - position.y
        originPositionRef.current.originX = position.x
        originPositionRef.current.originY = position.y
        setMoving(true)
    }

    const onMouseMove: any = (event:React.MouseEvent<HTMLImageElement>) => {
        if(showPreview && isMoving ) {
            setPosition({
                x: event.pageX - originPositionRef.current.deltaX,
                y: event.pageY - originPositionRef.current.deltaY
            })
        }
    }

    const onMouseUp: any = () => {
        if(showPreview && isMoving) {
            setMoving(false)
        }
    }

    const onKeyDown = React.useCallback((event: KeyboardEvent)=>{
        if(!showPreview|| !showLeftOrRightSwitches) return;
        event.preventDefault()
        if(event.keyCode === 37 && currentPreviewIndex > 0){
            setCurrent(previewUrlKeys[currentPreviewIndex-1])
        }else if(event.keyCode === 39 && currentPreviewIndex < previewGroupCount-1){
            setCurrent(previewUrlKeys[currentPreviewIndex+1])
        }
    },[
        currentPreviewIndex,
        previewGroupCount,
        previewUrlKeys,
        setCurrent,
        showLeftOrRightSwitches,        
    ])

    useEffect(()=>{
       window.addEventListener("mousemove",onMouseMove,false)
       window.addEventListener("mouseup",onMouseUp,false)
       window.addEventListener('wheel', onWheelMove,{passive:false});//阻止默认事件
       window.addEventListener("keydown",onKeyDown,false)
       return () => {
        window.removeEventListener("mousemove",onMouseMove,false)
        window.removeEventListener("mouseup",onMouseUp,false)
        window.removeEventListener('wheel', onWheelMove)
        window.removeEventListener("keydown",onKeyDown,false)
       }
    },[showPreview,isMoving,onKeyDown])
     //滚轮放大缩小图片
     const handleZoom :React.WheelEventHandler<HTMLImageElement> = e =>{        
        let {clientHeight,clientWidth,style,offsetLeft,offsetTop} = imgRef.current!
        if(e.nativeEvent.deltaY <= 0 && clientWidth < 1000) {
            style.width = clientWidth + 10 +'px'//图片宽度每次加10
            style.height = clientHeight + 10 +'px'
            style.left = offsetLeft - 5 + 'px'
            style.top = offsetTop -5 + 'px'
        }else if(e.nativeEvent.deltaY > 0) {
            if(clientWidth > 50){
                style.width = clientWidth -10 +'px'
                style.height = clientHeight - 10 +'px'       
                style.left = offsetLeft + 5  + 'px'
                style.top = offsetTop + 5 +'px'
            }else{
                style.left = 0 +'px'
            }          
        }
    }

    return(
        <>
         {/* 实现图片预览功能 */}
         {showPreview&&
            <div className='img-view'                                     
            >
                <ul className="operations">
                    {showOperationProgress&& (
                        <li>
                            {countRender?.(currentPreviewIndex+1,previewGroupCount)?? 
                            `${currentPreviewIndex+1}/${previewGroupCount}`}
                        </li>
                    )}
                </ul>
                    <img src={combinationSrc} 
                    ref={imgRef}
                    onMouseDown={onMouseDown}
                    onWheel = {handleZoom}
                    style={{transform:`translate3d(${position.x}px,${position.y}px,0)`}}                                        
                    />
                    {showLeftOrRightSwitches && (
                        <div className={cn("switch-left",{
                            ['switch-left-disabled']:currentPreviewIndex === 0,
                        })}
                        onClick={onSwitchLeft}
                        >&lt;</div>
                    )}
                    {showLeftOrRightSwitches && (
                        <div className={cn('switch-right',{
                            ['switch-right-disabled']:currentPreviewIndex === previewGroupCount-1
                        })}
                        onClick={onSwitchRight}
                        >&gt;</div>)
                    }
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
export default Preview