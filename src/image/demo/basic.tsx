import React from "react"
import Image from "../index"
import "../style/index.scss"
export default () => {
    return (
        <>
        <h3>图片加载失败</h3>
        <Image src ={['error-path','error-path']}
        unloader ={<p>图片加载失败</p>}
        >
        </Image>
        <h3>图片加载失败</h3>
        <Image src ={['error-path','error-path']}
        width={100}
        height={100}
        unloader ='https://th.bing.com/th/id/OIP.Xd2zstiokv_VCthLHHem7wAAAA?w=174&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
        >
        </Image>
        <h3>部分图片加载失败</h3>
        <Image width={100} height={100}
        preview={true}
        src = {[
            'error-path',
            'error-path',
            'https://avatars.githubusercontent.com/u/71813516?v=4'
        ]}
        >           
        </Image>
        <h3>加载中</h3>
        <Image 
        width={100}
        height={100}
        src={['https://avatars.githubusercontent.com/u/71813516?v=4']}
        loader={<p>图片加载中...</p>}
        >
        </Image>
        </>
    )
}