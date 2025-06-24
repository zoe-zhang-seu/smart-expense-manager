// components/Button.jsx
import React from 'react';

interface IProps{
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
    [x: string]: any; // For additional props like onClick, disabled, etc.
}
export function Button(props: IProps) {
  const {
    variant = 'primary',
    className = '',
    children,
    ...rest
  } = props;

  const baseStyles = 'px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${props.className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
