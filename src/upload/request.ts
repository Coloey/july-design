import type { UploadRequestOption, UploadRequestError, UploadProgressEvent } from "./interface";

function getError(option: UploadRequestOption, xhr: XMLHttpRequest): UploadRequestError{
    const msg =  `cannot ${option.method} ${option.action} ${xhr.status}`
    const err = new Error(msg) as UploadRequestError
    err.status = xhr.status
    err.method = option.method
    err.url = option.action
    return err
}
function getBody(xhr: XMLHttpRequest) {
    const text = xhr.responseText || xhr.response
    if(!text) {
        return text;
    }
    try{
        return JSON.parse(text)
    }catch(e){
        return text
    }
}
export default function upload(option: UploadRequestOption){
    const xhr = new XMLHttpRequest()

    if(option.onProgress && xhr.upload) {
        //readyState为3 LOADING
        xhr.upload.onprogress = function progress(e: UploadProgressEvent) {
            if(e.total > 0) {
                e.percent = (e.loaded / e.total) * 100;
            }
            option.onProgress(e)
        }
    }
    const formData = new FormData()

    if(option.data) {
        Object.keys(option.data).forEach(key => {
            const value = option.data[key]
            if(Array.isArray(value)) {
                value.forEach(item => {
                    formData.append(`${key}[]`,item)
                })
                return;
            }
            formData.append(key,value as string | Blob)
        })
    }
    if(option.file instanceof Blob) {
        formData.append(option.filename,option.file,(option.file as any))
    }else{
        formData.append(option.filename,option.file)
    }

    xhr.onerror = function error(e){
        option.onError(e)
    }
    //请求结束,readyState为4 DONE
    xhr.onload = function onload(){
        if(xhr.status < 200 || xhr.status >= 300) {
            return option.onError(getError(optionxhr),getBody(xhr))
        }
        return option.onSuccess(getBody(xhr), xhr)
    }
    //readyState为1
    xhr.open(option.method,option.action,true)

    if(option.withCredentials && 'withCredentials' in xhr){
        xhr.withCredentials = true
    }
    const headers = option.headers || {}
    Object.keys(headers).forEach(h => {
        if(headers[h] !== null) {
            xhr.setRequestHeader(h,headers[h])
        }
    })
    //发送http请求，异步请求会在请求发送后立即返回，同步请求。则此方法直到响应到达后才会返回
    //接受一个可选参数作为请求主体，如果请求方法时get或者head,则请求主体设置为null
    xhr.send(formData)
    return {
        abort() {
            xhr.abort()
        }
    }
}