import { string } from "prop-types"
import React,{ReactElement, useEffect,useRef,useState} from "react"
import getUid from "./uid"
import attrAccept from "./attr-accept"
import defaultRequest from "./request"
import { 
    UploadProps,
    UploadProgressEvent,
    UploadRequestError,
    RCFile,
    BeforeUploadFileType
 } from "./interface"

//打包后的文件?
interface ParsedFile {
    origin: RCFile,
    action: string,
    data: Record<string, unknown>,
    parsedFile: RCFile
}

const AjaxUpload = (props: UploadProps) => {
    const {
        style,
        id,
        data,
        className,
        disabled,
        multiple,
        multipart,
        accept,
        children,
        directory,
        onMouseEnter,
        onMouseLeave,
        openFileDialogOnClick,
        beforeUpload,
        onBatchStart,
        onSuccess,
        onStart,
        onError,
        action,
        customRequest,
        withCredentials,
        headers,
        name,
        method,
        onProgress,
        ...otherProps
    } = props
    const [ uid,setUid ] = useState<number>(getUid())
    let reqs: any = {}
    let [isMounted,setIsMounted] = useState<boolean>(true)
    const fileInput = useRef<HTMLInputElement>(null)
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target
        const acceptedFiles = [...Array.from(files)].filter(
            (file:RCFile) => !directory && attrAccept(file,accept)//不是文件夹并且是可以接受的文件类型           
        )
        uploadFiles(acceptedFiles)
        reset()
    }
    const onClick = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        const el = fileInput.current
        if(!el) {
            return
        }
        const {children,onClick} = props
        if(children && (children as ReactElement).type === 'button') {
            const parent = el.parentNode as HTMLInputElement
            parent.focus()
            parent.querySelector('button')?.blur()
        }
        el.click()
        if(onClick) {
            onClick(e)
        }
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') {
            onClick(e)
        }
    }

    useEffect(() => {
        setIsMounted(true)
        return ()=>{
            setIsMounted(false)
            abort()
        }
    },[isMounted])

    const uploadFiles = (files: File[]) => {
        const originFiles = [...files] as RCFile[];
        const postFiles = originFiles.map((file: RCFile) => {
            file.uid = getUid() as number
            return processFile(file, originFiles)
        })  
        //批量上传图片
        Promise.all(postFiles).then(fileList => {
            //
            onBatchStart?.(fileList.map(({ origin, parsedFile}) => ({file: origin,parsedFile})))
            fileList
                .filter(file => file.parsedFile !== null)
                .forEach(file => {
                    post(file)
                })
        })
    }

    //process file before upload,when all file is ready,we start upload
    const processFile = async(file: RCFile, fileList: RCFile[]):Promise<ParsedFile> => {
        let transformedFile: BeforeUploadFileType | void = file
        if(beforeUpload) {
            try{
                transformedFile = await beforeUpload(file,fileList)
                console.log(transformedFile)
            } catch(e){
                transformedFile = false
            }
            if(transformedFile===false) {
                return{
                    origin: file,
                    action: null,
                    data: null,
                    parsedFile: null                    
                }
            }            
        }
        //获取最新action
        let mergedAction: string
        if(typeof action === 'function') {
            mergedAction = await action(file)
        }else{
            mergedAction = action
        }
        //获取最新data
        let mergedData: Record<string,unknown>
        if(typeof data === 'function'){
            mergedData = await data(file)
        }else{
            mergedData = data
        }

        //经过打包的数据
        const parsedData = 
        (typeof transformedFile === 'object' || typeof transformedFile === 'string') &&
        transformedFile ? transformedFile : file
        let parsedFile: File

        if(parsedData instanceof File){
            parsedFile = parsedData
        }else{
            parsedFile = new File([parsedData],file.name,{type: file.type})
        }
        const mergedParsedFile: RCFile = parsedFile as RCFile
        //??
        mergedParsedFile.uid = file.uid
        return {
            origin: file,
            data: mergedData,
            parsedFile: mergedParsedFile,
            action: mergedAction
        }
    }
    const post = ({ data, origin, action, parsedFile }: ParsedFileInfo) => {
        if(!isMounted) {
            return;
        }
        const { uid } = origin
        const request = customRequest || defaultRequest
        const requestOption = {
            action,
            filename: name,
            data,
            file: parsedFile,
            headers,
            withCredentials,
            method: method || 'post',
            onProgress: (e: UploadProgressEvent) => {
                onProgress?.(e,parsedFile);
            },
            onSuccess: (ret: any,xhr: XMLHttpRequest) => {
                onSuccess?.(ret, parsedFile, xhr)
                delete reqs[uid]
            },
            onError: (err: UploadRequestError, ret: any) => {
                onError?.(err, ret, parsedFile)
                delete reqs[uid]
            },
        }
        //??开始上传
        onStart(origin)
        reqs[uid] = request(requestOption)
    }
    const reset = () => {
        setUid(getUid())
    }
    const abort = (file?: any) => {
        if(file) {
            const uid = file.uid ? file.uid : file
            if(reqs[uid] && reqs[uid].abort) {
                reqs[uid].abort()
            }
            delete reqs[uid]
        }else{
            Object.keys(reqs).forEach(uid => {
                if(reqs[uid] && reqs[uid].abort){
                    reqs[uid].abort()
                }
                delete reqs[uid]
            })
        }


    }
    const events = disabled 
        ? {}
        : {
            onClick: openFileDialogOnClick ? onClick : () => {},
            onKeyDown: openFileDialogOnClick ? onKeyDown : () => {},
            onMouseEnter,
            onMouseLeave,
            tabIndex: '0',
        }
    
    return(
        <>
        <input
            {...events}
            id={id}
            ref = {fileInput}
            type="file"
            key={uid}
            accept={accept}
            multiple={multiple}
            onChange={onChange}            
            >            
            </input>
            {children}
        </>
    )
}
export default AjaxUpload