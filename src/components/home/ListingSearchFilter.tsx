import { Locations } from "../reusables/Locations";
import SearchBar from "../reusables/SearchBar";
import { PriceRangeFilter } from "../reusables/PriceRangeFilter";
import { SortBy } from "../reusables/SortBy";
import type { propertyType } from "@/utils/type";

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
    <div className="mt-20 mb-10">
      <h1 className="font-semibold w-[90%] mx-auto text-xl mb-5 text-gray-800">
        Listings
      </h1>
      <div className="flex w-[90%] mx-auto items-center gap-4">
        <div className="w-[40%]">
          <SearchBar
            searchText={searchText}
            className="w-full"
            setSearchText={setSearchText}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center w-[90%] mx-auto mt-5">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-xl text-gray-800">
              {numberOfResults} Results
            </span>
          </p>
          <div className="flex items-center gap-1">
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
            {/* <Locations /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingSearchFiltering;
