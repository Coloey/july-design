import * as React from "react";
import type { PreviewProps } from "./Preview";
export interface PreviewGroupPreview extends Omit<PreviewProps, 'mask' | 'maskClassName'> {
    current?: number;
    currentRender?: (current: number, total: number) => string;
}
export interface GroupConsumerProps {
    preview?: boolean | PreviewGroupPreview;
    children?: React.ReactNode;
}
interface PreviewUrl {
    url: string;
    canPreview: boolean;
}
export interface GroupConsumerValue extends GroupConsumerProps {
    isPreviewGroup?: boolean;
    previewUrls: Map<number, string>;
    setPreviewUrls: React.Dispatch<React.SetStateAction<Map<number, PreviewUrl>>>;
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    setisShowPreview: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    registerImage: (id: number, url: string, canPreview?: boolean) => () => void;
}
export declare const context: React.Context<GroupConsumerValue>;
declare const Group: React.FC<GroupConsumerProps>;
export default Group;
