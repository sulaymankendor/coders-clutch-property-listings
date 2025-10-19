import { Locations } from "../reusables/Locations";
import SearchBar from "../reusables/SearchBar";

function AgentsSearch({
  numberOfResults,
  searchText,
  setSearchText,
}: {
  numberOfResults: number;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex w-full mx-auto items-center gap-4">
        <SearchBar
          className="w-full sm:w-[60%] lg:w-[40%]"
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>
      <div>
        <div className="flex justify-between items-center w-full mx-auto mt-4 sm:mt-5">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-lg sm:text-xl text-gray-800">
              {numberOfResults} Results
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgentsSearch;
