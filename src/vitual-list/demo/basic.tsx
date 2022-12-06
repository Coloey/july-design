import React,{useState} from "react"
import VirtualList from "../index"
const Item = ({data}) => {
    let dindex = parseInt(data)
    let lineHeight = dindex%2 ? '40px' : '80px';
    return (
        <div style={{lineHeight,background: dindex % 2 ? '#f5f5f5' : '#fff'}}>
            <h3>#{dindex} title name</h3>
        </div>
    )
}
const ItemMemo = React.memo(Item)
//数据列表初始化
const getData = () => {
    const datas = []
    for(let i = 0; i < 10000; i++) {
        datas.push(`${i} Item`)
    }
    return datas
}
//使用虚拟列表
export default () => {
    let [resources,setResources] = useState(getData())
    const changeResources = () => {
        setResources(getData())
    }
    return (
        <>
        <div>
            <button onClick = {changeResources}>重新获取数据源</button>
        </div>
        <div 
        style={{
            height: '400px',
            overflow:'scroll',
            border: '1px solid #f5f5f5',
            padding: '0 10px',
        }}>
            <VirtualList
            Item = {ItemMemo}
            resources={resources}
            estimatedItemSize={60}
            visibleCount = {10}
            />
        </div>
        </>
        
    )
}