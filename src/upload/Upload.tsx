import React,{Component, useRef}from "react"
import type { UploadProps,RCFile } from "./interface"
import AjaxUpload from "./AjaxUpload"
function empty() {}
const Upload = (props: UploadProps) => {
    const {
        style,
        id,
        className,
        disabled,
        action,
        onBatchStart,
        data = {},
        headers = {},
        name = "file",
        multipart = false,
        onStart = empty,
        onError = empty,
        onSuccess = empty,
        onProgress,
        multiple = false,
        method,
        accept,
        directory,
        onMouseEnter,
        onMouseLeave,
        beforeUpload = null,
        customRequest = null,
        withCredentials = false,
        openFileDialogOnClick = true,
    } = props
    const uploader = useRef(null)
    const abort = (file:RCFile) => {
        uploader.current.abort(file)
    }
   
    return (
        <AjaxUpload {...props} ref={uploader}></AjaxUpload>
    )    
}
export default Upload