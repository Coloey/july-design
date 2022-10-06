import React from "react"
import Image from "../index"
import "../style/index.scss"
export default () => {
    return (
        <>
        <Image 
        width={100}
        height={100}
        src='https://avatars.githubusercontent.com/u/71813516?v=4'
        loader={<p>图片加载中...</p>}
        >
        </Image>
        </>
    )
}