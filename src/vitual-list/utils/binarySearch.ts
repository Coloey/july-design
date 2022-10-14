import { PositionType } from "./initPositionCache"
export const binarySearch = (list: Array<PotionType>,value: number = 0) => {
    let start: number = 0
    let end: number = list.length - 1
    let tempIndex = null
    while(start <= end) {
        let midIndex = Math.floor((start + end)/2)
        let midValue = list[midIndex].bottom
        //因为用bottom 所有查找到的数据索引为下一条
        if(midValue === value){
            return midIndex + 1
        }
        else if(midValue < value) {
            start = midIndex+1
        }
        else if(midValue > value) {
            //tempIndex存放最靠值为value的所有
            if(tempIndex === null || tempIndex > midIndex) {
                tempIndex = midIndex;
            }
            end = midIndex -1
        }
    }
    return tempIndex
}