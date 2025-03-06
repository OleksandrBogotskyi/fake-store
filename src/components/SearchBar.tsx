import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute z-2 cursor-pointer inset-y-0 start-0 flex items-center ps-3">
        <CiSearch className="bg-blue-500 p-1 w-7 h-7 text-white rounded-lg" />
      </div>
      <input
        className="block z-1 p-4 ps-12 text-sm outline-none border rounded-lg text-white "
        placeholder="Search ..."
      />
    </div>
  );
};

export default SearchBar;
