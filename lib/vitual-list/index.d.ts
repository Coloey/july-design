import * as React from "react";
export interface ListProps<T> extends Omit<React.HTMLAttributes<any>> {
    resources: T[];
    estimatedItemSize?: number;
    Item?: string | React.FC<any> | React.ComponentClass<any>;
    virtual?: boolean;
    visibleCount?: number;
    height?: number;
    onScroll?: React.UIEventHandler<HTMLElement>;
}
export declare function VirtualList<T>(props: ListProps<T>): JSX.Element;
export default VirtualList;
