import React, { useEffect, useState } from "react";
import SearchIcon from "../svgs/SearchIcon";

function SearchBar({
  className,
  searchText,
  setSearchText,
}: {
  className?: string;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [searchInputText, setSearchInputText] = useState("");
  useEffect(() => {
    if (!searchText) {
      setSearchInputText("");
    }
  }, [searchText]);
  return (
    <div
      className={`flex items-center pl-3 gap-3 outline outline-gray-300 rounded-xl ${className}`}
    >
      <SearchIcon />
      <input
        placeholder="Search..."
        value={searchInputText}
        onChange={(event) => {
          setSearchInputText(event.target.value);
          setTimeout(() => {
            setSearchText(event.target.value);
          }, 10);
        }}
        className="h-9 text-sm font-medium pr-2 text-gray-600 border-0 focus:border-0 focus: outline-0 w-full"
      />
    </div>
  );
}

export default SearchBar;
