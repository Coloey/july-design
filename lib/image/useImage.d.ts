export interface useImageParams {
    loadImg?: (src: string) => Promise<unknown>;
    srcList: string | string[];
}
export declare function useImage({ loadImg, srcList }: useImageParams): {
    src: string;
    loading: boolean;
    error: any;
};
