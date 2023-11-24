import React from 'react';
import { IconButton } from '../IconButton/IconButton';

interface RepotsOptionProps {
  name: string;
}

export const RepotsOption: React.FC<RepotsOptionProps> = ({ name }) => {
  return (
    <div className="justify-left mt-6 flex w-[100%] items-center">
      <div className="mr-5 rounded bg-secondary-color p-1 ">
        <IconButton name="solar:documents-broken" />
      </div>
      <p>{name}</p>
    </div>
  );
};
