import React from 'react';
import SearchInput from '../SHARED/SearchInput/SearchInput';
import { RepotsOption } from '../SHARED/RepotsOption/RepotsOption';

export const OperationOptions = () => {
  return (
    <div className="flex h-[100%]  flex-col items-center  border-r-[1px] border-r-black p-2">
      <SearchInput />
      <RepotsOption name="TAX Reports" />
      <RepotsOption name="Financial Reports" />
      <RepotsOption name="Legal Reports" />
      <RepotsOption name="Sales Reports" />
      <RepotsOption name="Marketing Reports" />
      <RepotsOption name="Employee  Reports" />
      <RepotsOption name="Inventory Reports" />
      <RepotsOption name="Customer  Reports" />
      <RepotsOption name="Project Management Reports" />
    </div>
  );
};
