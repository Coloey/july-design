import React from "react"
import CountDown from "../index"
export default () => {
    return(
        <React.StrictMode>
            <CountDown
                time={4000}
            ></CountDown>
        </React.StrictMode>
    )
}