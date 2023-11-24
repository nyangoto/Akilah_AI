import React from 'react';
import Image from 'next/image';
import aiAvatar from '../../../assets/images/com.ai.chat.bot.aichat.icon.2023-05-02-21-37-43.png';

export const IconProfile = () => {
  return (
    <Image
      alt="Ai Profile"
      className="h-[40px] w-[40px] rounded-full object-cover"
      src={aiAvatar}
    />
  );
};
