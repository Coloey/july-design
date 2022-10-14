import { number } from "prop-types"

export type PositionType = {
    index: number,
    height: number,
    top: number,
    bottom: number
}
//缓存列表的总体初始化高度
const initPositionCache = (
    estimatedItemSize: number =32,
    length: number = 0,
) => {
    let index = 0,
    positions = Array(length)
    while(index < length) {
        positions[index] = {
            index,
            height: estimatedItemSize,
            top: index * estimatedItemSize,
            bottom: (index++ +1) * estimatedItemSize//下一条数据的开始位置就是上一条数据的结束位置
        }
    }
    return positions
}
export default initPositionCache