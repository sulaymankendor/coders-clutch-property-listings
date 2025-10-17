import type { propertyType } from "../../utils/type";
import Property from "./Property";

function Listings({
  properties,
  mt,
  width,
}: {
  properties: propertyType[];
  mt?: string;
  width?: string;
}) {
  return (
    <div className={`${mt} ${width || "w-[90%]"} mx-auto`}>
      <div className="grid grid-cols-3 gap-10">
        {properties.map((property) => {
          return <Property property={property} />;
        })}
      </div>
    </div>
  );
}

export default Listings;
