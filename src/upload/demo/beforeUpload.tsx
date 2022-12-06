import React from "react";
import Upload from "../Upload";
const props = {
    action: '/upload.do',
    multiple: true,
    onStart(file) {
        console.log('onStart', file, file.name);
      },
      onSuccess(ret) {
        console.log('onSuccess', ret);
      },
      onError(err) {
        console.log('onError', err);
      },
      beforeUpload(file, fileList) {
        console.log(flie,fileList)
        return new Promise(resolve => {
            console.log('start check')
            setTimeout(() => {
                console.log('check finished')
                resolve(file)
            },3000)
        })
      }
}
export default () => {
    return (
        <div
        style={{margin: 100}}>
            <div>
                <Upload
                {...props}></Upload>
            </div>
        </div>
    )
}