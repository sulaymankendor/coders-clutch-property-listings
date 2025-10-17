import type { propertyType } from "../../utils/type";
import Property from "./Property";

function Listings({
  title,
  properties,
  mt,
  width,
}: {
  title?: string;
  properties: propertyType[];
  mt: string;
  width?: string;
}) {
  return (
    <div className={`${mt} ${width || "w-[90%]"} mx-auto`}>
      {title && (
        <h1 className="font-semibold text-xl mb-5 text-gray-800">{title}</h1>
      )}
      <div className="grid grid-cols-3 gap-10">
        {properties.map((property) => {
          return <Property property={property} />;
        })}
      </div>
    </div>
  );
}

export default Listings;
