import type { propertyType } from "./type";

export const filterBySorting = (
  sortText: string,
  properties: propertyType[],
  setSearchedProperties: React.Dispatch<React.SetStateAction<propertyType[]>>
) => {
  const sortedProperties = [...properties].sort((a, b) => {
    if (sortText === "price-desc") {
      return b.pricePerMonth - a.pricePerMonth;
    }

    if (sortText === "price-asc") {
      return a.pricePerMonth - b.pricePerMonth;
    }

    if (sortText === "recent") {
      return new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime();
    }

    return 0;
  });

  setSearchedProperties(sortedProperties);
};
