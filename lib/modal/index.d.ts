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
import { ReactNode, SyntheticEvent } from 'react';
declare type ModalPropTypes = {
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
};
export default function Modal(props: ModalPropTypes): JSX.Element;
export {};
