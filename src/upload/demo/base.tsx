import React,{useState} from "react";
import Upload from "../Upload"
const uploadProps = {
    action:"upload/do",
    data:{a:1,b:2},
    multiple: true,
    beforeUpload(file) {
        console.log('beforeUpload', file.name)
    },
    onStart(file) {
        console.log('onStart', file.name)
    },
    onSuccess(file) {
        console.log('onSuccess',file)
    },
    onProgress(step,file) {
        console.log('onProgress',Math.round(step.percent),file.name)
    },
    onError(err) {
        console.log('onError',err)
    }
}
export default () => {
    const [destroyed, setDestroyed] = useState(false)
    const destroy = () => {
        setDestroyed(true)
    }
    if(destroyed){
        return null
    }
    return (
        <div style = {{margin: 100, width: 200, height: 500}}>
            <h2>固定位置</h2>
            <div>
                <Upload {...uploadProps}>
                    <a>开始上传</a>
                </Upload>
            </div>
            <div style={{height: 100}}>
                <Upload {...uploadProps} style={{display: 'inline-block'}}>
                    <a>开始上传2</a>
                </Upload>
            </div>
            <button type = "button" onClick = {destroy}>
                destroy
            </button>
        </div>
    )
}