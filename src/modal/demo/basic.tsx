import Modal from "../index"
import {useEffect, useState} from "react"
import React from 'react'
import "../style/index.scss"
export default () => {
    const [visible1,setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const changeVisible1 = () => {
        setVisible1(visible1=>visible1=!visible1)
    }
    const changeVisible2 = () => {
        setVisible2(visible2=>visible2=!visible2)
    }
    const modal1 = (
        <Modal
            title="退出登录"
            width="300px"
            height="400px"
            visible={visible1}
            closable
            mask
            maskclosable
            keyboard
        >
            确认退出登录？
        </Modal>
    )
    const modal2=(
        <Modal
        title="跳转页面"
        width="300px"
        height="400px"
        visible={visible2}
        closable
        onConfirm={() => alert('confirm success')}
        onCancel={()=>alert('cancle success')}
        centered
        >
            Are you sure?
        </Modal>
    )
    return (
        <>
        <div>
            <button onClick={changeVisible1}>弹框1出现</button>
            <br></br>
            <br></br>
            <button onClick={changeVisible2}>弹框2出现</button>
            {modal1}
            {modal2}
        </div>
        </>
    )
}