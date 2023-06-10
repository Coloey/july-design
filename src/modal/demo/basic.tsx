import Modal from "../index"
import {useEffect, useState} from "react"
import React from 'react'
import "../style/index.scss"
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
        <>
        <div>
            {modal}
        </div>
        </>
    )
}