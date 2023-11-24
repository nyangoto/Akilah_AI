import React from 'react';
import { IconButton } from '../../SHARED/IconButton/IconButton';

export const IconProfileNavIcons = () => {
  return (
    <div className="text-background-color">
      <IconButton
        className="mt-5"
        name="material-symbols-light:window-outline"
      />
      <IconButton className="mt-5" name="wi:time-5" />
      <IconButton className="mt-5" name="cil:moon" />
      <IconButton className="mt-5" name="carbon:load-balancer-pool" />
      <IconButton className="mt-5" name="game-icons:expand" />
    </div>
  );
};
