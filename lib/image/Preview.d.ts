import * as React from "react";
export declare type PreviewProps = Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'> & {
    src: string;
    showPreview?: boolean;
    setShowPreview?: React.Dispatch<React.SetStateAction<boolean>>;
    mask?: boolean;
    maskClassName?: string;
    onClose?: (e: MouseEvent) => void;
    countRender?: (current: number, total: number) => string;
};
declare const Preview: any;
export default Preview;
