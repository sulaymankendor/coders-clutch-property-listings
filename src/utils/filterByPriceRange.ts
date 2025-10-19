import type { propertyType } from "./type";

export const filterByPriceRange = (
  properties: propertyType[],
  priceRange: { minimum: number; maximum: number },
  setSearchedProperties: React.Dispatch<React.SetStateAction<propertyType[]>>
) => {
  const filteredProperties = properties.filter((property) => {
    return (
      property.pricePerMonth >= priceRange.minimum &&
      property.pricePerMonth <= priceRange.maximum
    );
  });
  setSearchedProperties(filteredProperties);
};
