import { PositionType } from "./initPositionCache"
//获取当前偏移量
export const getStartOffset = (startIndex: number,positions: Array<PositionType> = [],aboveCount: number) => {
    if(startIndex >= 1 ) {
        let size = positions[startIndex].top - (positions[startIndex-aboveCount] ? positions[startIndex-aboveCount].top : 0)
        //如果上一个数据条目滚动到一半，则要获取的是上一个数据条目的bottom值即为startOffset
        return positions[startIndex-1].bottom -size
    }else{
        return 0
    }
}