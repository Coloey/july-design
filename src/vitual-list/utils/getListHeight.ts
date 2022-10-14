import { PositionType } from "./initPositionCache"
export const getListHeight = (positions: Array<PotionType>) => {
    let index = positions.length -1;
    return index < 0 ? 0 : positions[index].bottom
}
