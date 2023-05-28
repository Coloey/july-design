import Modal from "../index"
import {useEffect, useState} from "react"
import "../style"
export default () => {
    const modal = (
        <Modal
            title="退出登录"
            width="300px"
            height="400px"
            visible
            closable
            mask
            maskclosable
            keyboard
        >
            确认退出登录？
        </Modal>
    )
    return (
        <React.StrictMode>
        <div>
            {modal}
        </div>
        </React.StrictMode>
    )
}