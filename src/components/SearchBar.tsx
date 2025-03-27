import React from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
        <CiSearch className="bg-blue-500 p-1 w-7 h-7 text-white rounded-lg" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block p-4 ps-12 text-sm outline-none border rounded-lg text-white"
        placeholder="Search ..."
      />
    </div>
  );
};

export default SearchBar;
