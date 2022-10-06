import React from 'react'
import Alert from "../index"
import "../style"
export default ()=>{
    return(
        <>
        <Alert type="warning" >这是一条警告提示</Alert>
        <Alert type="info" closable onClose={()=>alert("关闭成功！")} message="请关闭"></Alert>
        <Alert type="success" message='注册成功' description='你在本网站上注册成功了！'></Alert>
        </>
        
    )
}
