/**
 * Modal组件
 * @param {afterClose} func Modal完全关闭后的回调
 * @param {bodyStyle} object Modal body的样式
 * @param {cancelText} string|ReactNode 取消按钮文字
 * @param {centered} bool 居中展示Modal
 * @param {closable} bool 是否展示右上角的关闭按钮
 * @param {closeIcon} ReactNode 自定义关闭图标
 * @param {destroyOnClose} bool 关闭时销毁Modal里的子元素
 * @param {footer} null|ReactNode 底部内容，当不需要底部默认按钮时，可以设置为footer={null}
 * @param {keyboard} bool 是否支持键盘的esc键退出
 * @param {mask} bool 是否展示遮罩
 * @param {maskclosable} bool 点击蒙层是否允许关闭
 * @param {maskStyle} object 遮罩样式
 * @param {okText} string|ReactNode 确认按钮的文本
 * @param {title} string|ReactNode 标题内容
 * @param {visible} bool Modal是否可见
 * @param {width} string Modal宽度
 * @param {onCancel} func 点击遮罩或者取消按钮，或者键盘esc按键时的回调
 * @param {onOk} func 点击确定的回调
 */
import { ReactNode, SyntheticEvent, useEffect, useState } from 'react';
type ModalPropTypes = {
    afterClose?: () => any;
    bodyStyle?: any;
    cancleText?: string;
    centered?: boolean;
    closable?: boolean;
    closeIcon?: ReactNode;
    destroyOnClose?: boolean;
    footer?: ReactNode;
    keyboard?: boolean;
    mask?: any;
    maskclosable?: boolean;
    maskStyle?: Record<string, any>;
    okText?: string;
    title?: ReactNode;
    visible?: boolean;
    width?: string;
    onCancel?: (e: SyntheticEvent) => any;
    onConfirm?: (e: SyntheticEvent) => any;
    children?: any;
}
let hiddenCount = 0;
export default function Modal(props: ModalPropTypes) {
    const {
        afterClose,
        bodyStyle,
        cancelText,
        centered = true,
        closable,
        closeIcon,
        destroyOnClose,
        footer,
        keyboard,
        mask,
        maskclosable,
        maskStyle,
        confirmText='确认',
        cancleText='取消',
        title,
        visible = false,
        width='520px',
        onCancel,
        onConfirm,
        children
    } = props;
    const [hidden, setHidden] = useState<Boolean>(!visible);
    const [destroyChild, setDestroyChild] = useState<Boolean>(false);
    const hiddenModal = (cb: ()=>any) => {
        setHidden(()=>{
            cb && cb();
            return true;
        })
        if(destroyOnClose) {
            setDestroyChild(true)
        }       
        document.body.style.overflow = 'auto';
    }
    const handleClose = () => {
        hiddenModal(onCancel)
    }
    const handleConfirm = () => {
        hiddenModal(onConfirm)
    }
    const closeModal = function(event: KeyboardEvent) {
        const e = event || window.event;
        if(e && e.keyCode === 27) {
            handleClose();
        }
    }
    useEffect(() => {
        if(hidden && hiddenCount) {
            hiddenCount = 0//?
            afterClose && afterClose();
        }
        hiddenCount=1//?
    },[hidden])
    useEffect(() => {
        keyboard && document.addEventListener('keydown', closeModal, false)
        return () => {
            keyboard && document.removeEventListener('keydown', closeModal, false)
        }
    }, [])

    useEffect(() => {
        if(visible) {
            setHidden(false);
            if(destroyOnClose){
                setDestroyChild(true)
            }
        }
        return () => {};
    },[visible,destroyOnClose])

    return(
    <div className="ModalWrap" style={{display: hidden ? 'none' : 'block'}}>
        <div
            className={`ModalContent ${centered ? 'centered' : ''}`}
            style={{width}}
        >
            <div className="ModalHeader">
                <div className="ModalTitle">
                    {title}
                </div>
            </div>
            {
                closable &&
                <span
                    className="ModalCloseBtn"
                    onClick={handleClose}
                >
                    {closeIcon || 'X'}
                </span>
            }
            <div className="ModalBody">
                {children}
            </div>
            {
                footer === null ? null :
                <div className="ModalFooter">
                    {
                        footer ? footer :
                        <div className="FooterBtn">
                            <button
                                className="FooterBtn-cancel"
                                onClick={handleClose}
                            >{cancleText}</button>
                            <button
                                className="FooterBtn-confirm"
                                onClick={handleConfirm}
                            >
                                {confirmText}
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
        {
            mask &&
            <div
                className="ModalMask" 
                style={maskStyle}
                onClick={maskclosable && handleClose}
            >
            </div>
        }
    </div>
    )
}