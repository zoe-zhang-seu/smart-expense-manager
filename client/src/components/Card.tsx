import React from 'react';
import { Card as AntdCard } from 'antd';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function CustomCard(props: IProps) {
  return (
    <AntdCard title={props.className} bordered={false} style={{ width: 300 }}>
      {props.children}
    </AntdCard>
  );
}
