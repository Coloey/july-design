import React, { ReactNode } from "react"
import classnames from "classnames"

export interface ButtonProps {
    style?:object,
    danger?:boolean,
    disabled?:boolean,
    href?:string,
    htmlType?:"button" | "reset" | "submit" | undefined,
    icon?:ReactNode,
    loading?:boolean,
    shape?:'default'|'circle'|'round',
    size?:'large'|'middle'|'small',
    target?:string,
    type?:'primary'|'dashed'|'link'|'text'|'default',
    onClick?:Function,
    children?:string,
}
const prefixCls = 'button'
const Button:React.FC<ButtonProps> = (props) => {
    const {
        style,
        danger,
        disabled,
        href,
        htmlType,
        loading,
        shape,
        size,
        target,
        type,
        onClick,
        children
    } = props
    const handleClick = () => {
        onClick && onClick()
    }
    if(href && !disabled) {
        return(
            <a href={href} {...style} className={classnames(prefixCls,'link')} target={target}>
                {children}
            </a>
        )
    }
    return(
        <button
        disabled={disabled}   
        {...style}
        type={htmlType?htmlType:'button'}
        className={classnames(prefixCls,size || 'middle', type || 'default',shape)}
        onClick={handleClick}
        >
        {loading && (
            <span>                
            </span>
        )}
        {children}
        </button>
    )

}
export default Button