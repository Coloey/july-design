import { string } from "prop-types";
import type * as React from "react"
export type BeforeUploadFileType = File | Blob | boolean | string
export type Action = string | ((file: RCFile) => string | PromiseLike<string>)

export interface UploadProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onError' | 'onProgress'> {
        name?: string;
        style?:React.CSSProperties;
        className?: string;
        disabled?:boolean;
        component?: React.JSXElementConstructor<any>;
        action?: Action;
        method?: UploadRequestMethod;
        directory?: boolean;
        data?: Record<string,unknown> | ((file: RCFile | string | Blob) => Record<string, unknown>);
        headers?: UploadRequestHeader;
        accept?: string;
        multipart?: boolean;
        multiple?: boolean;
        onBatchStart?: (
            fileList: {file: RCFile; parsedFile: Exclude<BeforeUploadFileType,boolean>}[],
        ) => void;
        onStart?: (file: RcFile) => void;
        onError?: (error: Error, ret: Record<string,unknown>, file: RCFile) => void;
        onSuccess?: (response: Record<string,unknown>,file: RCFile,xhr: XMLHttpRequest) => void;
        onProgress?: (event: UploadProgressEvent,file: RCFile) => void;
        beforeUpload?: (
            file: RCFile,
            FileList: RCFile[],        
        ) => BeforeUploadFileType | Promise<void | BeforeUploadFileType>;
        customRequest?: (option: UploadRequestOption) => void;
        withCredentials?: boolean;
        openFileDialogOnClick?: boolean;
        id?: string;
        onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
        onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
        onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;


    }
export interface UploadProgressEvent extends Partial<ProgressEvent> {
    percent?: number;
}

export type UploadRequestHeader = Record<string, string>
export interface
export interface UploadRequestError extends Error {
    status?: number;
    method?: UploadRequestMethod;
    url?: string;
}
export interface UploadRequestOption<T = any> {
    onProgress?: (event: UploadProgressEvent) => void;
    onError?: (event: UploadRequestError),
    onSuccess?: (body: T,xhr?: XMLHttpRequest) => void,
    data?: Record<string,unknown>,
    filename?: string,
    file: Exclude<BeforeUploadFileType,File | boolean> | RCFile,
    withCredentials?: boolean,
    action: string,
    headers?: UploadRequestHeader,
    method: UploadRequestMethod
}
export type UploadRequestMethod = 'POST' | 'PUT' | 'PATCH' | 'post' | 'put' | 'patch'
export interface RCFile extends File {
    uid: string;
}
