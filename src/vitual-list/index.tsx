import * as React from "react"
import { useState ,useEffect,useLayoutEffect,useRef,createRef} from "react"
import { getListHeight } from "./utils/getListHeight";
import { getStartOffset } from "./utils/getStartOffset";
import { PositionType } from "./utils/initPositionCache";
import { updateItemSize } from "./utils/updateItemSize";
import initPositionCache from "./utils/initPositionCache";
import { binarySearch } from "./utils/binarySearch"
import { getEndIndex } from "./utils/getEndIndex"
import isFF from "./utils/isFF";
export interface ListProps<T> extends Omit<React.HTMLAttributes<any>> {
    resources: T[]
    //listHeight?: number;
    estimatedItemSize?: number;
    //if not match virtual scroll condition,Set List still use height of container
    //fullHeight?: boolean;
    Item?: string | React.FC<any> | React.ComponentClass<any>;
    //set false will always use real scroll insted of virtual one
    virtual?: boolean;
    visibleCount?: number;
    height?:number;
    onScroll?: React.UIEventHandler<HTMLElement>;
}
export function VirtualList<T>(props:ListProps<T>){
    const {
        resources,
        estimatedItemSize,
        Item,
        virtual,
        visibleCount,
        height,
        ...restprops    
    } = props
    //const useVirtual = !!(virtual !== false && listHeight && estimatedItemSize);
    //const inVirtual = useVirtual && resources && estimatedItemSize && resources.length > listHeight;
    let positions:PotionType = initPositionCache(estimatedItemSize,resources.length)
    //为了避免滑动过快时出现白屏，给可视区域上方和下方渲染额外的项目，在滚动时给予缓冲
    //缓冲区比例
    const bufferScale = 1
    const [startOffset,setStartOffset] = useState<number>(0)
    const [listHeight,setListHeight] = useState<number>(getListHeight(positions))
    const [startIndex,setStartIndex] = useState<number>(0)
    const [endIndex,setEndIndex] = useState<number>(visibleCount)
    const [myvisibleCount,setMyVisibleCount] = useState<number>(visibleCount)
    //虚拟列表容器ref
    const scrollRef = useRef<HTMLElement>()
    //虚拟列表显示区域ref
    const items = useRef<any>()
    //获取虚拟列表容器或者可视区域容器的父元素
    const getEl = () => {
        let el = scrollRef || items
        let parentEl: any = el.current?.parentElement 
        switch(window.getComputedStyle(parentEl).overflowY) {
            case 'auto':
            case 'scroll':
            case 'overlay':
            case 'visible':
                return parentEl;
        }
        return document.body
    }
    const aboveCount = Math.min(startIndex,bufferScale * myvisibleCount)
    const blowCount = Math.min(resources.length - endIndex,bufferScale * myvisibleCount)
    //可视区域数据
    let visibleData = resources.slice(startIndex - aboveCount,endIndex + blowCount)
    //根据新计算的结点更新data数据
    const updateState = ({myvisibleCount,startIndex}) => {
        setStartOffset(startIndex >= 1 ? positions[startIndex -1]?.bottom : 0 )
        setListHeight(getListHeight(positions))
        setStartIndex(startIndex)
        setMyVisibleCount(myvisibleCount)
        setEndIndex(getEndIndex(resources,startIndex,myvisibleCount))
    }

    //回调函数在浏览器下一次重绘之前执行
    const onScroll = () => {
        requestAnimationFrame(() => {
            let { scrollTop } = getEl()
            let startIndex = binarySearch(positions,scrollTop)
            //startIndex变更，更新endIndex,ListHeight
            updateState({myvisibleCount,startIndex})
        })
    }

    //在componentDidUpdate阶段更新缓存，useEffect渲染到页面后异步执行
    useEffect(() => {
        let nodes: HTMLCollection = items.current?.children
        if(!nodes.length) return
        //更新缓存
        updateItemSize(positions,nodes)
        //更新总高度
        setListHeight(getListHeight(positions))
        //更新总偏移量
        setStartOffset(getStartOffset(startIndex,positions,aboveCount))       
    },[])

    //useLayoutEffect相当于componentDidMount,在dom更新后，页面渲染前执行，避免出现闪烁现象
    useLayoutEffect(()=>{
        const el = getEl()
        el.addEventListener('scroll',onScroll,false)
        //火狐浏览器是DOMMouseScroll
        if(isFF)el.addEventListener('DOMMouseScroll',onScroll,false)
        else el.addEventListener('wheel',onScroll,false)
        return () => {
            if(el){
                el.removeEventListener('scroll',onScroll,false)
                if(isFF)el.removeEventListener('DOMMouseScroll',onScroll,false)
                else el.removeEventListener('wheel',onScroll,false)
            }
        }
    },[])

    return (
        <div ref={scrollRef} style={{height:`${listHeight}px`}}>
            <ul ref={items}
            style = {{transform:`translate3d(0,${startOffset}px,0)`}}
            >
                {visibleData.map((data,index) => {
                    return(
                        <li key = {data.id ||data.key || index} data-index={`${startIndex+index}`}>                       
                            <Item data={data}></Item>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default VirtualList