import type { propertyType } from "../../utils/type";
import Property from "./Property";

function Listings({
  searchedProperties,
  mt,
  width,
}: {
  searchedProperties: propertyType[];
  mt?: string;
  width?: string;
}) {
  return (
    <div className={`${mt} ${width || "w-[90%]"} mx-auto`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
        {searchedProperties.map((property) => {
          return <Property key={property.id} property={property} />;
        })}
      </div>
    </div>
  );
}

export default Listings;
