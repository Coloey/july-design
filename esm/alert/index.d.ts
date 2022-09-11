import React from 'react';
export interface AlertProps {
    children?: string;
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}
export declare type KindMap = Record<Required<AlertProps>['kind'], string>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
