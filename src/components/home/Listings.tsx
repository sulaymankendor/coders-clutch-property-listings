import { useEffect, useState } from "react";
import type { propertyType } from "../../utils/type";
import Property from "./Property";
import { axiosRequest } from "@/utils/axiosRequest";

function Listings({
  propertiesRequest,
  mt,
  width,
}: {
  propertiesRequest: {
    errorMsg: string;
    isLoading: boolean;
    properties: never[] | propertyType[];
  };
  mt?: string;
  width?: string;
}) {
  return (
    <div className={`${mt} ${width || "w-[90%]"} mx-auto`}>
      <div className="grid grid-cols-3 gap-10">
        {propertiesRequest.properties.map((property) => {
          return <Property key={property.id} property={property} />;
        })}
      </div>
    </div>
  );
}

export default Listings;
