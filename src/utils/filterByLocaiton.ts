import type { propertyType } from "./type";

export const filterByLocation = (
  location: string,
  properties: propertyType[],
  setSearchedProperties: React.Dispatch<React.SetStateAction<propertyType[]>>
) => {
  const filteredProperties = properties.filter((property) => {
    return property.location === location;
  });

  setSearchedProperties(filteredProperties);
};
