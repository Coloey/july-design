import * as React from 'react'
import {useState,useEffect} from 'react'
//将图片加载转为promise调用形式
function imgPromise(src:string) {
    return new Promise((resolve,reject) => {
        const i = new Image()
        i.onload = () => resolve();
        i.onerror = () => reject();
        i.src = src;
    })
}

const removeBlankArrayElements = (a:string[]) => a.filter(x=>x)
const stringToArray = (x: string | string[]) => (Array.isArray(x) ? x : [x])

//一组图片中找到可以加载的一张图片
function promiseFind(sourceList:string[],imgPromise:(src:string)=>Promise<void>):Promise<string> {
    let done = false
    return new Promise((resolve,reject) => {
        const queueNext = (src:string) => {
            return imgPromise(src).then(()=>{
                done = true;
                //加载成功resolve
                resolve(src)
            })
        }
        const firstPromise = queueNext(sourceList.shift() || '')
        //每一个promise都跟着catch方法处理当前promise的失败
        sourceList
            .reduce((p,src) => {
                //加载失败，继续加载
                return p.catch(() => {
                    if(!done) return queueNext(src)
                    return;
                })
            },firstPromise)
            //全都加载失败 reject
            .catch(reject)
    })
}
export interface useImageParams {
    loadImg?: (src:string) => Promise<void>
    srcList: string | string[]
}
//图片加载失败，加载备选图片或者error占位符
//imgPromise作为可选参数loadImg传入，方便使用者自定义加载方法
export function useImage({loadImg = imgPromise,srcList}:useImageParams) 
    :{src:string | undefined,isLoading:boolean,error:any} {
    const cache: {
        [key:string]: Promise<string>,
    } = {}
    const [loading,setLoading] = useState<Boolean>(true)
    const [error,setError] = useState<undefined | null>(null)
    const [value,setValue] = useState<string | undefined>(undefined)

    //图片链接数组
    const sourceList = removeBlankArrayElements(stringToArray(srcList))
    const sourceKey = sourceList.join('')
     
    useEffect(() => {
        if(!cache[sourceKey]) {
            if(!cache[sourceKey]) {
                cache[sourceKey] = promiseFind(sourceList,loadImg)
               
            }
        }
        cache[sourceKey]
            .then(src => {
                setLoading(false)
                setValue(src)
            })
            .catch(error => {
                setLoading(false)
                setError(error)
            })
    },[sourceKey])
    return {loading: loading,src:value,error:error}
}
