import React, { ReactNode } from "react";
export interface ButtonProps {
    style?: object;
    danger?: boolean;
    disabled?: boolean;
    href?: string;
    htmlType?: "button" | "reset" | "submit" | undefined;
    icon?: ReactNode;
    loading?: boolean;
    shape?: 'default' | 'circle' | 'round';
    size?: 'large' | 'middle' | 'small';
    target?: string;
    type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
    onClick?: Function;
    children?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
