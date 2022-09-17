import React from "react";
import Button from "../index"
import "../style"
export default ()=>{
    return(
        <>
        <Button type="primary">Primary</Button>
        <Button type="default">DeFault</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link" href="http://baidu.com">跳转百度</Button>
        <Button type="text"> Text</Button>
        <br/>
        <Button size="middle" type="default">Middle</Button>
        <Button size="large">Large</Button>
        <Button size="small">Small</Button>
        <br />
        <Button type="primary" size="large"  shape="circle" >下载</Button>
        <Button type="primary" size="middle"  shape="circle" >下载</Button>
        <Button type="primary" size="small"  shape="circle" >下载</Button>

        <Button type="primary" shape="round" size="large">下载</Button>
        <Button type="primary" shape="round" size="middle">下载</Button>
        <Button type="primary" shape="round" size="small">下载</Button>
        <Button type="primary" shape="round" size="small" onClick={()=>alert("提交成功")}>
            submit
        </Button>
        </>
    )
}