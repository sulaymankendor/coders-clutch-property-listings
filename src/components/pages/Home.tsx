import Listings from "../home/Listings";
import heroImage from "../../assets/house2.jpg";
import ListingSearchFiltering from "../home/ListingSearchFilter";
import { LoadingSpinner } from "../reusables/LoadingSpinner";
import { useGetProperties } from "@/hooks/useGetProperties";
import { useEffect, useState } from "react";
import type { propertyType } from "@/utils/type";
import { searchProperties } from "@/utils/searchProperties";
import { filterByLocation } from "@/utils/filterByLocaiton";
import { filterByPriceRange } from "@/utils/filterByPriceRange";
import { filterBySorting } from "@/utils/filterBySorting";
import { Link } from "react-router-dom";
const initialFilterValues = {
  location: "",
  priceRange: { minimum: 0, maximum: 0 },
  sortBy: "",
};

function Home() {
  const [searchedProperties, setSearchedProperties] = useState<propertyType[]>(
    []
  );
  const [filter, setFilter] = useState(initialFilterValues);
  const { propertiesRequest } = useGetProperties(setSearchedProperties);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      setFilter(initialFilterValues);
      searchProperties(
        searchText,
        propertiesRequest.properties,
        setSearchedProperties
      );
    } else if (filter.location) {
      setSearchText("");
      filterByLocation(
        filter.location,
        propertiesRequest.properties,
        setSearchedProperties
      );
    } else if (filter.sortBy) {
      filterBySorting(
        filter.sortBy,
        propertiesRequest.properties,
        setSearchedProperties
      );
    } else if (filter.priceRange.minimum && filter.priceRange.maximum) {
      filterByPriceRange(
        propertiesRequest.properties,
        filter.priceRange,
        setSearchedProperties
      );
    } else {
      setSearchedProperties(propertiesRequest.properties);
    }
  }, [searchText, filter]);
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-[90%] sm:w-[85%] lg:w-[75%] xl:w-[70%] mx-auto">
        <img
          src={heroImage}
          alt="hero image"
          width={20000000}
          height={20000000}
          className="w-full h-[18rem] sm:h-[20rem] lg:h-[22rem] rounded-3xl object-cover"
        />
        <div className="mt-2 sm:mt-5 text-start">
          <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-800">
            Find your <span className="text-sky-700">Dream Home</span>
          </h1>
          <p className="text-gray-600 text-left text-sm sm:text-base mt-2">
            Discover the perfect place to call home. Explore a wide range of
            beautiful properties designed to match your lifestyle and budget.
            From modern city apartments to peaceful suburban houses, each
            listing is carefully selected to offer comfort, convenience, and
            lasting value. Start your journey today and find the home that truly
            feels like yours.
          </p>
          <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
            {[
              { id: 1, name: "Total Properties", stat: "5,200" },
              { id: 2, name: "Agents", stat: "200" },
              { id: 3, name: "Successful Transactions", stat: "2,000" },
              { id: 4, name: "Customers", stat: "12,000" },
            ].map((item) => (
              <div key={item.id} className="mt-4">
                <h2 className="text-lg sm:text-xl text-center font-semibold text-gray-800">
                  {item.stat}
                </h2>
                <p className="text-gray-600 text-xs text-center">{item.name}</p>
              </div>
            ))}
          </div>
          <Link
            to={"/about-us"}
            className="inline-block bg-sky-600 text-sm transition-all hover:bg-sky-700 px-6 sm:px-9 py-[12px] sm:py-[15px] text-white rounded-lg font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
      <ListingSearchFiltering
        filter={filter}
        searchText={searchText}
        setSearchText={setSearchText}
        numberOfResults={searchedProperties.length}
        setFilter={setFilter}
      />
      {propertiesRequest.isLoading ? (
        <LoadingSpinner />
      ) : propertiesRequest.errorMsg ? (
        <div className="text-center py-10">
          <p className="text-red-700 text-sm">{propertiesRequest.errorMsg}</p>
        </div>
      ) : searchedProperties && searchedProperties.length > 0 ? (
        <Listings searchedProperties={searchedProperties} />
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 text-sm">No properties found</p>
        </div>
      )}
    </section>
  );
}

export default Home;
