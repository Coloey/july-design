import React from 'react';
export interface AlertProps {
    style?: object;
    closable?: boolean;
    closeText?: string;
    message?: string;
    description?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    onClose?: Function;
    children?: string;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
