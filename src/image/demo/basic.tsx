import React from "react"
import Image from "../index"
import "../style/index.scss"
export default () => {
    return (
        <>
        <h4>加载失败文字占位</h4>
        <Image src ={['error-path','error-path']}
        unloader ={<p>图片加载失败</p>}
        >
        </Image>
        <h4>加载失败图片占位</h4>
        <Image src ={['error-path','error-path']}
        width={100}
        height={100}
        unloader ='https://th.bing.com/th/id/OIP.Xd2zstiokv_VCthLHHem7wAAAA?w=174&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        >
        </Image>       
        </>
    )
}