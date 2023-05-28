import * as React from "react";
import { useImageParams } from "./useImage";
export declare type ImageProps = Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'> & Omit<useImageParams, 'srcList'> & {
    loader?: JSX.Element | string;
    unloader?: JSX.Element | string;
    preview?: boolean;
    mask?: boolean;
    maskClassName?: string;
    src: useImageParams['srcList'];
};
declare const Image: any;
export default Image;
