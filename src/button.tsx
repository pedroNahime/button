import React from "react";
import './button.css'

interface ButtonProps {
    color?: 'default' | 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    label: string;
    onClick?: () => void;
    variant?: 'text' | 'outline' | 'none';
    disabled?: boolean;
    disableShadow?: boolean;
    startIcon?: string
    endIcon?: string
}

export const Button = ({
                           color = 'default',
                           size = 'md',
                           label,
                           variant = 'none',
                           disabled = false,
                           disableShadow = false,
                           ...props
                       }: ButtonProps) => {

    const colors = {
        'primary': 'button--primary',
        'secondary': 'button--secondary',
        'danger':  'button--danger',
        'default': 'button--default'
    }
    const modes = {
        'outline': 'button--outline',
        'text': 'button--text',
        'none': ''
    }

    const sizes = {
        'sm': 'sm',
        'md': 'md',
        'lg': 'lg',
    }

    return (
        <button
            type="button"
            className={['button', `button--${sizes[size]}`, colors[color], modes[variant], disabled ? 'button--disabled' : '', disableShadow ? 'button--disable-shadow' : ''].join(' ')}
            disabled={disabled}
            {...props}
        >
            <i className='material-icons'>{props.startIcon}</i>
            {label}
            <i className='material-icons'>{props.endIcon}</i>
        </button>
    );
};