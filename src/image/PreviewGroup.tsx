import { number } from "prop-types";
import * as React from "react"
import { useState,useEffect } from "react"
import type { PreviewProps } from "./Preview"
import Preview from "./Preview";
export interface PreviewGroupPreview 
extends Omit<PreviewProps,'mask' | 'maskClassName'> {
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
    setisShowPreview: React.Dispatch<React.SetStateAction<boolean|undefined>>;
    registerImage: (id:number,url:string,canPreview?: boolean) => () => void;
}
export const context = React.createContext<GroupConsumerValue>({
    previewUrls: new Map(),
    setPreviewUrls: () => null,
    current: 0,
    setCurrent: () => null,
    setisShowPreview: () => null,
    registerImage: () => () => null,
})
const { Provider } = context;
const Group: React.FC<GroupConsumerProps> = ({
    children,
    preview,
}) => {
    const {
        showPreview: previewVisible = undefined,
        current: currentIndex = 0,
        countRender = undefined
    } = typeof preview === 'object' ? preview : {};
    const [previewUrls,setPreviewUrls] = useState<Map<number,PreviewUrl>>(new Map());
    const [current,setCurrent] = useState<number>(0)
    const [isShowPreview,setisShowPreview] = useState(previewVisible)
    //const [mousePosition,setMousePosition] = useState<null | { x: number,y: number}>(null)
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