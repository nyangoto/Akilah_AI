import React from 'react';
import { IconProfile } from '../SHARED/IconProfile/IconProfile';
import { IconProfileNavIcons } from './IconProfileNavIcons/IconProfileNavIcons';

export const IconProfileNav = () => {
  return (
    <div className="flex h-[100%] w-[4%] flex-col items-center justify-between border-r-[1px] border-r-black p-2">
      <IconProfile />
      <IconProfileNavIcons />
    </div>
  );
};
