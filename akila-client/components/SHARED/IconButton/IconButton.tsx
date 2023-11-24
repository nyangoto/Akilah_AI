import React from 'react';
import { Icon } from '@iconify/react';

interface IconButtonProps {
  name: string;
  className?: string;
}
export const IconButton: React.FC<IconButtonProps> = ({ name, className }) => {
  return (
    <Icon
      className={` cursor-pointer rounded-full ${className}`}
      icon={name}
      width="20"
    />
  );
};
