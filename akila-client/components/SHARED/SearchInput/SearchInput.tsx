import React from 'react';
import { IconButton } from '../IconButton/IconButton';

const SearchInput = () => {
  return (
    <div className="w-35 relative mr-5  flex h-10 items-center overflow-hidden rounded-md ">
      <input
        className="border-by-transparent focus:border-btn-hover h-[80%] w-[250px] rounded-full border bg-input-backcolor p-1  py-4 pl-8 text-[.8rem] text-gray-700 focus:border-secondary-color  focus:outline-none"
        placeholder="Search bizcoop ...."
        type="text"
      />
      <IconButton
        className="absolute mb-4 ml-2 text-light-color"
        name="ic:baseline-search"
      />
    </div>
  );
};

export default SearchInput;
