import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function Card(props: IProps) {
  return (
    <div
      className={
        `bg-white shadow-lg rounded-lg p-6 ` + 
        `border border-gray-200 ` +
        props.className
      }
    >
      {props.children}
    </div>
  );
}
