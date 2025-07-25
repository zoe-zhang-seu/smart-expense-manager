import React from 'react';
import { Button as AntButton } from 'antd';

interface IProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  htmlType?: 'button' | 'submit' | 'reset';
  type?: 'default' | 'link' | 'text';
}

export function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  htmlType = 'button',
  type,
}: IProps) {
  const getButtonProps = () => {
    switch (variant) {
      case 'primary':
        return { type: 'primary' as const };
      case 'danger':
        return { danger: true, type: 'primary' as const };
      case 'secondary':
        return { type: 'default' as const };
      default:
        return { type: 'default' as const };
    }
  };

  return (
    <AntButton
      {...getButtonProps()}
      onClick={onClick}
      className={className}
      htmlType={htmlType}
      type={type || getButtonProps().type}
    >
      {children}
    </AntButton>
  );
}
