import React from "react";
import SearchIcon from "../svgs/SearchIcon";

function SearchBar({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center pl-3 gap-3 outline outline-gray-300 rounded-xl ${className}`}
    >
      <SearchIcon />
      <input
        placeholder="Search..."
        className="h-9 text-sm font-medium pr-2 text-gray-600 border-0 focus:border-0 focus: outline-0 w-full"
      />
    </div>
  );
}

export default SearchBar;
