import { Locations } from "../reusables/Locations";
import Filters from "../reusables/Filters";
import SearchBar from "../reusables/SearchBar";

function ListingSearchFiltering() {
  return (
    <div className="mt-20 mb-10">
      <h1 className="font-semibold w-[90%] mx-auto text-xl mb-5 text-gray-800">
        Listings
      </h1>
      <div className="flex w-[90%] mx-auto items-center gap-4">
        <div className="w-[40%] mx-auto">
          <SearchBar className="w-full" />
        </div>
        <Filters />
      </div>
      <div>
        <div className="flex justify-between items-center w-[90%] mx-auto mt-5">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-xl text-gray-800">
              100 Results
            </span>{" "}
            in Kunkujang Keitaya
          </p>
          <div className="flex items-center gap-1">
            <Locations />
            {/* <Locations /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingSearchFiltering;
