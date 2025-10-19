import { Locations } from "../reusables/Locations";
import SearchBar from "../reusables/SearchBar";
import { PriceRangeFilter } from "../reusables/PriceRangeFilter";
import { SortBy } from "../reusables/SortBy";

function ListingSearchFiltering({
  filter,
  searchText,
  numberOfResults,
  setSearchText,
  setFilter,
}: {
  filter: {
    location: string;
    priceRange: {
      minimum: number;
      maximum: number;
    };
    sortBy: string;
  };
  searchText: string;
  numberOfResults: number;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<
    React.SetStateAction<{
      location: string;
      priceRange: {
        minimum: number;
        maximum: number;
      };
      sortBy: string;
    }>
  >;
}) {
  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10">
      <h1 className="font-semibold w-[90%] mx-auto text-lg sm:text-xl mb-4 sm:mb-5 text-gray-800">
        Listings
      </h1>
      <div className="flex w-[90%] mx-auto items-center gap-4">
        <div className="w-full sm:w-[60%] lg:w-[40%]">
          <SearchBar
            searchText={searchText}
            className="w-full"
            setSearchText={setSearchText}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-[90%] mx-auto mt-4 sm:mt-5 gap-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-lg sm:text-xl text-gray-800">
              {numberOfResults} Results
            </span>
          </p>
          <div className="flex items-center gap-1 flex-wrap">
            <Locations
              filter={filter}
              setFilter={setFilter}
              setSearchText={setSearchText}
            />
            <PriceRangeFilter
              filter={filter}
              setFilter={setFilter}
              setSearchText={setSearchText}
            />
            <SortBy
              filter={filter}
              setFilter={setFilter}
              setSearchText={setSearchText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingSearchFiltering;
