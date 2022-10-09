import { number } from "prop-types";
import * as React from "react"
import { useState,useEffect } from "react"
import type { ImageProps } from "./index"
import Preview from "./Preview";
export interface PreviewGroupPreview 
extends Omit<ImageProps,'mask' | 'maskClassName'> {
    current?: number;
    currentRender?: (current: number, total: number) => string;
}
export interface GroupConsumerProps {
    preview?: boolean | PreviewGroupPreview;
    children?: React.ReactNode;
}
interface PreviewUrl {
    url: string;
    canPreview: boolean;
}
export interface GroupConsumerValue extends GroupConsumerProps {
    isPreviewGroup?: boolean;
    previewUrls: Map<number, string>;
    setPreviewUrls: React.Dispatch<React.SetStateAction<Map<number,PreviewUrl>>>;
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
    setMousePosition: React.Dispatch<React.SetStateAction<null | {x: number, y: number}>>;
    registerImage: (id:number,url:string,canPreview?: boolean) => () => void;
    rootClassName?: string;
}
export const context = React.createContext<GroupConsumerValue>({
    previewUrls: new Map(),
    setPreviewUrls: () => null,
    current: null,
    setCurrent: () => null,
    setShowPreview: () => null,
    setMousePosition: () => null,
    registerImage: () => () => null,
    rootClassName: '',
})
const { Provider } = context;
const Group: React.FC<GroupConsumerProps> = ({
    children,
    preview,
}) => {
    const {
        visible: previewVisible = undefined,
        onVisibleChange: onPreviewVisibleChange = undefined,
        getContainer = undefined,
        current: currentIndex = 0,
        countRender = undefined
    } = typeof preview === 'object' ? preview : {};
    const [previewUrls,setPreviewUrls] = useState<Map<number,PreviewUrl>>(new Map());
    const [current,setCurrent] = useState<number>()
    const [isShowPreview,setisShowPreview] = useState(previewVisible)
    const [mousePosition,setMousePosition] = useState<null | { x: number,y: number}>(null)
    const isControlled = previewVisible !== undefined
    const previewUrlKeys = Array.from(previewUrls.keys())
    const currentControlledkey = previewUrlKeys[currentIndex]
    const canPreviewUrls = new Map<number,string>(
        Array.from(previewUrls)
            .filter(([,{canPreview}]) => !!canPreview)
            .map(([id,{url}]) => [id,url])
    )
   
    const registerImage = (id: number,url: string,canPreview: boolean = true) => {
        const unRegister = () => {
            setPreviewUrls(oldPreviewUrls => {
                const clonePreviewUrls = new Map(oldPreviewUrls);
                const deleteResult = clonePreviewUrls.delete(id);
                return deleteResult ? clonePreviewUrls : oldPreviewUrls;
            })
        }
        setPreviewUrls(oldPreviewUrls => {
            return new Map(oldPreviewUrls).set(id,{
                url,
                canPreview,
            })
        })
        return unRegister
    }
    
    useEffect(()=>{
        setCurrent(currentControlledkey)
    },[currentControlledkey])

    useEffect(()=>{
        if(!isShowPreview && isControlled) {
            setCurrent(currentControlledkey)
        }
    },[currentControlledkey,isControlled,isShowPreview])

    return(
        <Provider
        value={{
            isPreviewGroup: true,
            previewUrls:canPreviewUrls,
            setPreviewUrls,
            current,
            setCurrent,
            setisShowPreview,
            setMousePosition,
            registerImage
        }}
        >

           {children}
          <Preview
            src={canPreviewUrls.get(current)}
            showPreview ={isShowPreview}
            setShowPreview={setisShowPreview}
            mask={true}
            countRender={countRender}
          >
          </Preview>
        </Provider>
    )
}
export default Group