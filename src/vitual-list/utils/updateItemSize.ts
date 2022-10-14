import { PositionType } from "./initPositionCache"
export const updateItemSize = (
    positions: Array<PositionType>,
    items: HTMLCollection,
) => {
    Array.from(items).forEach(item => {
        let index = Number(item.getAttribute('date-index'))
        //内容撑起的高度
        let {height} = item.getBoundingClientRect()
        let oldHeight = positions[index].height
        //存在差值，减去差值，并更新该结点以后的所有结点
        let dValue = oldHeight - height
        if(dValue) {
            positions[index].bottom = positions[index].bottom - dValue
            positions[index].height = height

            for(let k = index + 1; k < positions.length; k++) {
                positions[k].top = positions[k-1].bottom
                positions[k].bottom = positions[k].bottom - dValue
            }
        }
    })

}