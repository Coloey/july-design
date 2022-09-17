import React from 'react';
import classnames from 'classnames';
import { useState } from 'react';
export interface AlertProps {
  style?: object,
  closable?: boolean,
  closeText?: string,
  message: string,
  description?: string,
  type?: 'success'|'error'|'info'|'warning',
  onClose?: Function,
  children?: string
}

const prefixCls = 'alert';

const Alert: React.FC<AlertProps> = (props) => {
  const {
    style,
    closable,
    closeText,
    message,
    description,
    type='info',
    onClose,
    children
  } = props
  let [visible,setVisible] = useState(true)
  const handleClose = () =>{
    setVisible(false)
    onClose && onClose()
  }
  return(
    visible
    ? <div
    className={classnames(prefixCls,type || "warning")}
    style={{
      opacity:visible ? '1' : '0',
      ...style
    }}  
  >
    <div className = 'alertMes'>{message}</div>
    {description&&<div className = 'alertDesc'>{description}</div>}
    {
      !!closable && <span className='closeBtn' 
      onClick={handleClose}
      >{closeText ? closeText : 'x' }</span>
    }
    {children}
  </div>
  :null
  ) 
};
export default Alert;