import * as React from "react"
import Image from ".."
import "../style/index.scss"

export default function PreviewGroup() {
    return (
        <div>
            <Image.PreviewGroup
            preview={{
                countRender: (current,total) => `第${current}张/总共${total}张`,
            }}
            >
                <Image width={200} preview={true} mask={true} height={100} width={100} src="https://avatars.githubusercontent.com/u/71813516?v=4"></Image>
                <Image width={200} preview={true} height={100} width={100} src="https://tse2-mm.cn.bing.net/th/id/OIP-C.mb5H7dYDOybJXGGOYO-ViAHaGy?w=182&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7"></Image>
            </Image.PreviewGroup>
        </div>
    )
}