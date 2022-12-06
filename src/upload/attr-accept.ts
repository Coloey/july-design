import { RCFile } from "./interface";   
export default (file: RCFile, acceptedFiles: string | string[]) => {
    if(file && acceptedFiles) {
        const acceptedFilesArray = Array.isArray(acceptedFiles)
            ? acceptedFiles
            : acceptedFiles.split(',')
        const fileName = file.name || ''
        const mimeType = file.type || ''
        const baseMimeType = mimeType.replace(/\/.*$/,'')

        return acceptedFilesArray.some(type => {
            const validType = type.trim()
            //if something like */*,
            //*代表匹配所有文件，如果有一个文件类型可以匹配到所有文件类型，则直接返回true
            if(/^\*(\/\*)?$/.test(type)){
                return true
            }
            if(validType.charAt(0) === '.') {
                const lowerFileName = fileName.toLowerCase()
                const lowerType = validType.toLowerCase()
                //可以接受的文件后缀
                let affixList = [lowerType]
                if(lowerType === '.jpg' || lowerType === '.jpeg'){
                    affixList=['.jpg','.jpeg']
                }
                //只要上传的文件时可以接受的文件中的一种就可以上传成功
                return affixList.some(affix => lowerFileName.endsWith(affix))
            }
            if(mimeType === validType)return true
            //可以接受的文件类型不能是没有'.'前缀
            if(/^\w+$/.test(validType)){
                alert(`Upload takes an invalidate 'accept' type ${validType} Skip for check`)
                return true
            }
            return false
        })
    }
    return true
}