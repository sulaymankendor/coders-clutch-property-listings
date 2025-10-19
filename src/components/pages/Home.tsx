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
      <div className="grid grid-cols-2 gap-8 [1281px]:w-[70%] w-[75%] max-[1281px]:gap-8 mx-auto">
        <img
          src={heroImage}
          alt="hero image"
          width={20000000}
          height={20000000}
          className="w-[37rem] h-[22rem] rounded-3xl"
        />
        <div className="mt-5 text-start">
          <h1 className="font-medium text-4xl text-gray-800">
            Find your <span className="text-sky-700">Dream Home</span>
          </h1>
          <p className="text-gray-600 text-left [1281px]:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            dicta aliquid ab perferendis facere quod amet numquam ipsum placeat
            molestias quaerat perspiciatis, cupiditate incidunt veniam iste
            earum laboriosam tempore eos.
          </p>
          <div className="flex mb-12 items-center justify-between">
            {[
              { id: 1, name: "Total Properties", stat: "5,200" },
              { id: 2, name: "Agents", stat: "200" },
              { id: 3, name: "Successful Transactions", stat: "2,000" },
              { id: 4, name: "Customers", stat: "12,000" },
            ].map((item) => (
              <div key={item.id} className="mt-4">
                <h2 className="text-xl text-center font-semibold text-gray-800">
                  {item.stat}
                </h2>
                <p className="text-gray-600 text-xs text-center">{item.name}</p>
              </div>
            ))}
          </div>
          <a
            href={"/"}
            className="bg-sky-600 text-sm transition-all hover:bg-sky-700 px-9 py-[15px] text-white rounded-lg font-medium"
          >
            Get Started
          </a>
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
