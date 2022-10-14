export const getEndIndex = (resource:Array<string>,startIndex: number,visibleCount: number) => {
    let resourceLength = resource.length
    let endIndex = startIndex + visibleCount
    return resourceLength > 0 ? Math.min(resourceLength,endIndex) : endIndex;
}