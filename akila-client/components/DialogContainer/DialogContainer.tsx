// DialogContainer.js

import React from 'react';
import { IconProfileNav } from '../IconProfileNav/IconProfileNav';
import { OperationOptions } from '../OperationOptions/OperationOptions';
import { ChatSection } from '../ChatSection/ChatSection';

export const DialogContainer = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex h-[90vh] w-[80%] -translate-x-1/2 -translate-y-1/2 transform rounded  border-[1px] border-black bg-light-color">
      <IconProfileNav />
      <OperationOptions />
      <ChatSection />
    </div>
  );
};
