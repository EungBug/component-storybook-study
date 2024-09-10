import React from 'react';
import styles from './Button.module.css';

export  type TButtonType = 'primary';

export type ButtonProps = {
  width?: string;
  height?: string;
  type?: TButtonType;
  borderRadius?: string;
  disabled?: boolean;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  onClick?: () => void;
  children: React.ReactNode
}

const Button = ({
  width = 'auto',
  height = 'auto',
  type = 'primary',
  borderRadius = '0',
  disabled = false,
  fontSize = '16px',
  fontWeight = '400',
  padding = '0',
  margin = '0',
  color = '#000',
  backgroundColor = '#fff',
  onClick = () => { },
  children
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles['btn']}
      style={{
        width : width,
        height: height,
        borderRadius: borderRadius,
        fontSize: fontSize,
        fontWeight: fontWeight,
        padding: padding,
        margin: margin,
        color: color,
        background: backgroundColor
      }}
    >
      {children}
    </button>
  )
}

export default Button