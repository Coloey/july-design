import React, { useEffect } from "react"
import {useState} from "react"
import CountDown from "../index"
export default () => {
    const [time, setTime] = useState<string|number>(300);
    let pre;
    useEffect(()=>{
        // 只有传入的time改变了才重新计时，否则刷新页面由上一次计时继续计时
        if(+sessionStorage.getItem('pre') !== +time && sessionStorage.getItem('duration')){
            sessionStorage.removeItem('duration')
        }
        sessionStorage.setItem('pre',time)
    },[time])
    return(
        <React.StrictMode>
            <CountDown
                time={time}
            ></CountDown>
        </React.StrictMode>
    )
}