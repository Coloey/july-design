import React from "react"
import Image from "../index"
import "../style/index.scss"
export default () => {
    return (
        <>
        <Image width={100} height={100}
        preview={true}
        mask = {true}
        src = {[
            'error-path',
            'error-path',
            'https://avatars.githubusercontent.com/u/71813516?v=4'
        ]} />           
        </>       
    )
}