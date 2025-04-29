import React from 'react';
import { LucideProps } from 'lucide-react';

// This is a utility to help with rendering icons with props
export interface IconProps extends LucideProps {
  size?: number;
}

export const renderIcon = (Icon: React.ComponentType<LucideProps>, props: IconProps = {}) => {
  const { size = 24, ...restProps } = props;
  
  return <Icon size={size} {...restProps} />;
};